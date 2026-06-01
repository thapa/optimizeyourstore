"use client";

import { useEffect, useRef } from "react";

export default function HeroWebGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const ctxAttrs = { alpha: true, antialias: true, premultipliedAlpha: false };
    const gl = (canvas.getContext("webgl", ctxAttrs) || 
                canvas.getContext("experimental-webgl", ctxAttrs)) as WebGLRenderingContext | null;
    if (!gl) return;

    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    // Vertex shader
    const vsSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // Fragment shader: perspective line-lattice
    const fsSource = `
      precision mediump float;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uOpacity;

      void main() {
        // Normalize screen coordinates relative to height
        vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / uResolution.y;

        // Camera position moving forward over time with pointer drift
        vec3 ro = vec3(0.0, 0.0, uTime * 0.25);
        ro.xy += uMouse * 0.15;

        // Ray direction
        vec3 rd = normalize(vec3(p, 1.5));

        // Floor and ceiling plane grid intersections
        float t_floor = (-1.2 - ro.y) / rd.y;
        float t_ceil = (1.2 - ro.y) / rd.y;

        float t = -1.0;
        if (rd.y < 0.0 && t_floor > 0.0) t = t_floor;
        else if (rd.y > 0.0 && t_ceil > 0.0) t = t_ceil;

        if (t > 0.0 && t < 16.0) {
          vec3 pos = ro + t * rd;

          // Grid line spacing
          float spacing = 0.5;

          // Line thickness scaling with depth t to simulate perspective scaling
          float thickness = 0.006 + 0.005 * t;

          // Calculate grid line presence
          float lineX = smoothstep(thickness, 0.0, abs(fract(pos.x / spacing - 0.5) - 0.5));
          float lineZ = smoothstep(thickness, 0.0, abs(fract(pos.z / spacing - 0.5) - 0.5));
          float gridLine = max(lineX, lineZ);

          // Depth fade towards horizon
          float fade = smoothstep(16.0, 2.0, t);

          // Brand color #FF707C = vec3(1.0, 0.44, 0.49)
          vec3 color = vec3(1.0, 0.44, 0.49);

          // Alpha range: 0.12 - 0.20 based on breathing pulse (uOpacity)
          float alpha = gridLine * fade * uOpacity * 0.18;

          gl_FragColor = vec4(color, alpha);
        } else {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      }
    `;

    // Compile Shader
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Uniform locations
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uMouseLoc = gl.getUniformLocation(program, "uMouse");
    const uOpacityLoc = gl.getUniformLocation(program, "uOpacity");

    // Setup buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    // Mouse coordinates tracking
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2.0 - 1.0;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2.0 + 1.0;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle resizing with clamped devicePixelRatio (max 2)
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize, { passive: true });
    resize();

    let animationFrameId: number;
    const startTime = performance.now();

    const render = () => {
      if (isReducedMotion) {
        // Draw one static frame if prefers-reduced-motion is active
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(uTimeLoc, 0.0);
        gl.uniform2f(uMouseLoc, 0.0, 0.0);
        gl.uniform1f(uOpacityLoc, 0.8);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        return;
      }

      const currentTime = performance.now();
      const elapsedSeconds = (currentTime - startTime) / 1000;

      // Inertial mouse smoothing
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Breathing pulse: sin(uTime * 0.8) yields a smooth 6-8 second period (7.85s)
      const opacity = 0.65 + 0.35 * Math.sin(elapsedSeconds * 0.8);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, elapsedSeconds);
      gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
      gl.uniform1f(uOpacityLoc, opacity);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrameId);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}

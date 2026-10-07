import { Fragment } from 'react';

// Renders CMS text, turning each newline into a <br />.
export default function Lines({ text }: { text?: string }) {
  const lines = (text ?? '').split('\n');
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

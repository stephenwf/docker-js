import React from 'react';

export default function Echo({children}) {
  return (
    <span>
      echo {children}
    </span>
  );
}

export function WriteFile({ file, children }) {
  return <Echo>"{children ? children : null}" > {file}</Echo>
}

export function AppendFile({ file, children }) {
  return <Echo>"{children ? children : null}" >> {file}</Echo>
}

export function ClearFile({ file }) {
  return <WriteFile file={file}/>
}
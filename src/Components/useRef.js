import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  return <div ref={myRef}>Hello, World!</div>;
}

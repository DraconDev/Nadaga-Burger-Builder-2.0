import React, { useState, useEffect } from "./node_modules/react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ error: null });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

// import React, { useState, useEffect } from "react";

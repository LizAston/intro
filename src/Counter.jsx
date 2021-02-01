import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [])

  return(
        <div>
          <h6> Counter </h6>
          <p> Current count: {count} </p>
          <button onClick={() => setCount(count + 1)}> Increment the count</button>

        </div>
  );
};

export default Counter;
import React, { useState } from 'react'

function ErrorPage() {

  const [count, setCount] = useState(1);

  return (
    <div>

    <p>You clicked {count} times</p>
      <button onClick={() => setCount(count * 12)}>
        Click me
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click mmoi
      </button>
    </div>
  )
}

export default ErrorPage
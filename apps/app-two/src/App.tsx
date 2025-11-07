import { useState } from 'react'
import './App.css'
import { Button } from '@acme/ui';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is second app
      </p>
      <Button onClick={() => alert('Button from UI package in second app!')}>Click Me</Button>
    </>
  )
}

export default App

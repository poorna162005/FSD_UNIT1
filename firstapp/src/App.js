import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const App = () => {
  const[count, setCoun] = useState(0);
  const increaseValue = () =>
  {
    setCoun(count+1);
  }
  const decreaseValue = () =>
  {
    setCoun(count-1)
  }
  return (
    
    <div>
      <h1>I am {count} from parent</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <Button variant="warning">Warning</Button>
    </div>
  )
} 

export default App

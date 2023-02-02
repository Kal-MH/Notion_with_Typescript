import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const str = 'hello';
  const hello = 'hello';

  console.log(count, setCount(1), str, hello);

  return (
    <div className='App'>
      <h2>Hello</h2>
    </div>
  );
}

export default App;

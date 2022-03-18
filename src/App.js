
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manubar from './components/Shared/Menubar/Manubar';
import Allproduct from './components/Shared/Allproduct/Allproduct';
import { useState } from 'react';





function App() {
  const [count, setCount] = useState(0)
  const setCutCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Manubar count={count}></Manubar>
      <Allproduct setCutCount={setCutCount}></Allproduct>
    </div>
  );
}


export default App;


import { useState } from "react";
import "./App.css";



function App() {
  const[val,setVal] = useState(0)
  function increment()
  {
    
    setVal(val+1);

  }
  function decrement()
  {
    setVal(val-1);
  }
  function reset()
  {
    setVal(0);
  }
  return (
    <div className="w-[100vw] flex h-[100vh] flex-col bg-[#344151] items-center justify-center gap-10">
    <p className="text-[#0398d4] text-center font-semibold text-2xl ">Increment & Decrement</p>  
    <div className="box flex gap-2 bg-white justify-center py-2 text-[25px] rounded-md text-[#344151]">
    <button className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl pb-2" onClick={increment}>+</button>
    <p className=" font-bold gap-12 text-5xl px-2">{val}</p>
    <button onClick={decrement} className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl pb-2">-</button>
    </div>
    <button className=" bg-blue-600 py-2 px-4 text-white rounded-md" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

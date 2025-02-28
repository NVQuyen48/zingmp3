import { useState } from "react";

function App() {
  
  const [work  , setwork ] = useState ('')
  return (
    <div className="flex gap-8 h-screen justify-center border border-red-500 items-center">
        <input 
        type="text" 
        className="outline-none border border-blue-600 px-4  py-2 w-[400px] "
        value={work}
        onChange={e => setwork (e.target.value)}
        />

        <button
          type="button"
          className="outline-none px-4 py-2 bg-blue-400 rounded-md text-white"
        >
          Add
        </button>
    </div>
  );
}

export default App;

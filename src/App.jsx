import { useState } from "react";
function App() {
  const [results, setResults] = useState("");
  const handleClick = (e) => {
    setResults(results.concat(e.target.name));
  };
  const clear = () => {
    setResults((prev) => (prev = ""));
  };
  const calculate = () => {
    try {
      setResults(eval(results).toString());
    } catch {
      setResults("Error");
    }
  };
  return (
    <div className="h-[80vh] w-[30vw]">
      <div className="grid grid-cols-4 grid-rows-6 w-full h-full font-bold gap-[2px]">
        <div className="col-span-full text-[4rem] h-[80px] text-right mt-5 bg-gray-500">
          {results}
        </div>
        <button className="bg-gray-300" onClick={clear}>
          AC
        </button>
        <button className="bg-gray-300" onClick={handleClick}>
          +/-
        </button>
        <button className="bg-gray-300" name="%" onClick={handleClick}>
          %
        </button>
        <button className="bg-orange-400" name="÷" onClick={handleClick}>
          ÷
        </button>
        <button className="bg-gray-300" name="7" onClick={handleClick}>
          7
        </button>
        <button className="bg-gray-300" name="8" onClick={handleClick}>
          8
        </button>
        <button className="bg-gray-300" name="9" onClick={handleClick}>
          9
        </button>
        <button className="bg-orange-400" name="x" onClick={handleClick}>
          ×
        </button>
        <button className="bg-gray-300" name="4" onClick={handleClick}>
          4
        </button>
        <button className="bg-gray-300" name="5" onClick={handleClick}>
          5
        </button>
        <button className="bg-gray-300" name="6" onClick={handleClick}>
          6
        </button>
        <button className="bg-orange-400" name="+" onClick={handleClick}>
          {" "}
          +
        </button>
        <button className="bg-gray-300" name="1" onClick={handleClick}>
          1
        </button>
        <button className="bg-gray-300" name="2" onClick={handleClick}>
          2
        </button>
        <button className="bg-gray-300" name="3" onClick={handleClick}>
          3
        </button>
        <button className="bg-orange-400" name="-" onClick={handleClick}>
          -
        </button>
        <button
          className="bg-gray-300 col-span-2"
          name="0"
          onClick={handleClick}
        >
          0
        </button>
        <button className="bg-gray-300" name="." onClick={handleClick}>
          .
        </button>
        <button className="equal bg-orange-400" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;

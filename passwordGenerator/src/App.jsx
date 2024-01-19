import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumbersAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowes] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numberAllowed) char += '0123456789'
    if(symbolAllowed) char += '!#$%()*+-/:?@'

    let pass = ""
    for(let i=1; i <=length; i++) {
      const index = Math.floor(Math.random() * char.length +1)
      pass += char.charAt(index)
    }
    setPassword(pass)
  
  }, [length, numberAllowed, symbolAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, symbolAllowed])

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipBoard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length"> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {setNumbersAllowed((prev)=>!prev)}}
              name=""
              id=""
            />
            <label htmlFor="numbers"> Numbers </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              onChange={() => {setSymbolAllowes((prev)=>!prev)}}
              name=""
              id=""
            />
            <label htmlFor="symbols"> Symbols </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

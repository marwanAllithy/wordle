import React, {useEffect} from 'react'

export default function KeyPad({isLightMode, handleKeyUp}) {
     const lettersArray = [
          "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
               "z", "x", "c", "v", "b", "n", "m",
     ]
     const [letters, setLetters] = React.useState();
     useEffect(() => {
          if (!letters) {           
               setLetters(lettersArray)
          }
     })
     useEffect(() => {
          window.addEventListener("keyup", handleKeyUp);
          return () => window.removeEventListener("keyup", handleKeyUp);
     },[handleKeyUp])
  return (
    <div className="keypad">
         {letters?.map((l) => {
              return (
                    <div  key={l} onClick={() => handleKeyUp({key: l})}
                    style={{background: !isLightMode ? "#121213" : "#ededed", transition: "300ms",
                    color: isLightMode ? "#121213" : "#ededed",
                    
               }}
                     className="letter" 
                     >{l}</div>
              )
         })}
    </div>
  )
}

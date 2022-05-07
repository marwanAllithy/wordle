import React from 'react'

export default function KeyPad({isLightMode}) {
     const lettersArray = [
          "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
               "z", "x", "c", "v", "b", "n", "m",
     ]
     const [letters, setLetters] = React.useState();
     React.useEffect(() => {
          if (!letters) {           
               setLetters(lettersArray)
          }
     })
  return (
    <div className="keypad">
         {letters?.map((l) => {
              return (
                    <div  key={l}
                    style={{background: !isLightMode ? "#121213" : "#ededed", transition: "300ms",
                    color: isLightMode ? "#121213" : "#ededed"}}
                     className="letter"
                     >{l}</div>
              )
         })}
    </div>
  )
}
import React from 'react'

export default function KeyPad() {
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
                    <div key={l} className="letter">{l}</div>
              )
         })}
    </div>
  )
}

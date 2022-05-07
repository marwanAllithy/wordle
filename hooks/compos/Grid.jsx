import React from 'react'
import Row from './Row'

export default function Grid({turn, guesses, currentGuess, isLightMode}) {
  return (
    <div>
         {
              guesses.map((g, index) => {
                   if (turn === index) {
                        return <Row key={index} isLightMode={isLightMode} currentGuess={currentGuess} />
                   }

                   return <Row key={index} isLightMode={isLightMode} guess={g} />
         })
         }
    </div>
  )
}

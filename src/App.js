import React, { useState, useEffect } from 'react'
import words from './words.json'
import alphabet from './letters.json'
import Step0 from './images/step_0.png'
import Step1 from './images/step_1.png'
import Step2 from './images/step_2.png'
import Step3 from './images/step_3.png'
import Step4 from './images/step_4.png'
import Step5 from './images/step_5.png'
import Step6 from './images/step_6.png'
import Step7 from './images/step_7.png'

const App = () => {
  const images = [Step0, Step1, Step2, Step3, Step4, Step5, Step6, Step7]
  // state variable to track clicked letters
  const [clickedLetters, setClickedLetters] = useState([])
  const [randomWord, setRandomWord] = useState('')
  const [revealedLetters, setRevealedLetters] = useState([])

  useEffect(() => {
    // a random word picked from the words.json file
    setRandomWord(words[Math.ceil(Math.random() * words.length)])
  }, [])

  // split the word into an array
  const letters = randomWord.split('')

  const checkLetter = (e) => {
    // log that is been clicked
    const value = e.target.value
    setClickedLetters((oldLetter) => [...oldLetter, value])

    //setRevealedLetters
    if (letters.includes(value.toLowerCase())) {
      setRevealedLetters((oldLetter) => [...oldLetter, value])
    }
  }

  const resetGame = () => {
    setClickedLetters([])
    setRevealedLetters([])
    setRandomWord(words[Math.ceil(Math.random() * words.length)])
  }

  return (
    <main>
      <section className="randomWord">
        {letters.map((letter) => {
          return (
            <div className="underlineLetter" key={letter}>
              <div
                className={
                  clickedLetters.includes(letter.toUpperCase())
                    ? ''
                    : 'hiddenLetter'
                }
                key={letter}
              >
                {letter}
              </div>
            </div>
          )
        })}
      </section>
      <section>
        {alphabet.map((letter) => {
          return (
            <button
              onClick={checkLetter}
              className="letterOfAlphabet"
              disabled={
                clickedLetters.includes(letter.toUpperCase()) ? true : false
              }
              value={letter}
              key={letter}
            >
              {letter}
            </button>
          )
        })}
      </section>
      <section className="resetButton">
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </section>
      <section>
        {/* <img src={`./images/step_${revealedLetters.length}.png`} /> */}
        <img width="300" src={images[revealedLetters.length]} />
      </section>
    </main>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import alphabet from './letters.json'
import Step0 from './images/step_0.png'
import Step1 from './images/step_1.png'
import Step2 from './images/step_2.png'
import Step3 from './images/step_3.png'
import Step4 from './images/step_4.png'
import Step5 from './images/step_5.png'
import Step6 from './images/step_6.png'
import Step7 from './images/step_7.png'
import axios from 'axios'

const App = () => {
  const images = [Step0, Step1, Step2, Step3, Step4, Step5, Step6, Step7]
  // state variable to track clicked letters
  const [clickedLetters, setClickedLetters] = useState([])
  const [randomWord, setRandomWord] = useState('')
  const [incorrectlyGuessedLetters, setIncorrectlyGuessedLetters] = useState([])

  const createRandomWord = async () => {
    const url = 'https://sdg-words.herokuapp.com/api/words/random'
    const resp = await axios.get(url)
    setRandomWord(resp.data.word)
  }
  useEffect(() => {
    // a random word picked from the words.json file
    createRandomWord()
  }, [])

  // split the word into an array
  const letters = randomWord.split('')

  const checkLetter = (e) => {
    // log that is been clicked
    const value = e.target.value
    setClickedLetters((oldLetter) => [...oldLetter, value])

    //setRevealedLetters
    if (!letters.includes(value.toLowerCase())) {
      setIncorrectlyGuessedLetters((oldLetter) => [...oldLetter, value])
    }
  }

  const resetGame = () => {
    setClickedLetters([])
    setIncorrectlyGuessedLetters([])
    createRandomWord()
  }

  return (
    <>
      <header>Snowman</header>
      <main>
        <section className="word">
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
          <section className="alphabet">
            {alphabet.map((letter) => {
              return (
                <button
                  onClick={checkLetter}
                  className="letterOfAlphabet"
                  disabled={
                    clickedLetters.includes(letter.toUpperCase()) ||
                    incorrectlyGuessedLetters.length > 6
                      ? true
                      : false
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
        </section>
        <section className="displayedImage">
          <section>
            {/* <img src={`./images/step_${revealedLetters.length}.png`} /> */}
            <img
              width="300"
              src={images[incorrectlyGuessedLetters.length]}
              alt="step"
            />
          </section>
        </section>
      </main>
    </>
  )
}

export default App

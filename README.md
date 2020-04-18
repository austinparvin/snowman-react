# Snowman React

A less grim variation of a popular game _Hangman_. Built in React.

# Objectives

- Reinforce component architecture in React
- Effective use props and state in React

# Includes: 

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [REACT](https://reactjs.org/docs/getting-started.html)
- [API INTEGRATION](https://sdg-words.herokuapp.com/api/words/random)

- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)

# Requirements 

- Selects a random word from the list and display a number of blank spaces (or underscores) equal to the word length
- Display a list of letters, A through Z as clickable buttons
- When the player guesses a letter (clicks the button):
  - All instances of that letter are revealed at their corresponding positions in the word
  - The button becomes disabled, as it has already been guessed
  - Display the snowman image that corresponds with the number of letters guessed wrong
- After the word has been completed, offer the player to play again. Reset the state of the game without a page reload
- Use this API to get your random word
- If the snowman is completed (counter reaches 7) before the word is completed, the player loses, and the snowman wins
 
## Live Site

[LIVE SITE](https://snowman-react-austinparvin.netlify.app/)

![Snowman React Live Site](http://g.recordit.co/fPmZ5S93HR.gif)

## Featured Code

### Setting Hooks and UseEffects + API Axios Request

```JSX
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
 ```
 

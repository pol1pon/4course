
import { useEffect, useState } from 'react'
import './App.css'
import Card, { type IEmoji } from './components/card'
import { getEmojis } from './api/emojiApi'
function App() {
  const [emojis, setEmojis] = useState<IEmoji[]>(
    []
  )
  const [input, setInput] = useState('')




  useEffect(() => {
    fetchData()
  }, [input])
async function fetchData(){
  const data = await getEmojis(input)
  setEmojis(data)
}



  return (
    <>
    <header>
      <h1>Emoji Finder</h1>
      <p>find emoji by keywords</p>
      <input 
      type="text"
      placeholder='Enter text....'
      value={input}
      onInput={(e) => setInput(e.currentTarget.value) }
      />
    </header>
    <main>
      {emojis && emojis.map((el) => {
        return(
          <Card
          emoji={el.emoji}
          title={el.title}
          keywords={el.keywords}
          />
        )
      })
      }
    </main>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Card, { type IEmoji } from './components/card'
function App() {
  const [emojis] = useState<IEmoji[]>(
    [
      {
        emoji:'🌧️',
        title:'Oблако Дождя',
        keywords:'Белое месиво, Дождь, Облако',

      },
      {
        emoji:'🤮',
        title:'Рвота',
        keywords:'Обед, Вкусно'
      }
  ]
  )
  return (
    <>
    <header>
      <h1>Emoji Finder</h1>
      <p>find emoji by keywords</p>
      <input type="text" placeholder='Enter text....'/>
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

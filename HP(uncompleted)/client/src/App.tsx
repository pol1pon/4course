import { useState } from 'react'
import './App.css'

export interface ICharacter {
  name: string
  actor: string
  gender: string
  house: string
  wand: string
  alive: boolean
}

const initialCharacters: ICharacter[] = [
  {
    name: "Hermione Granger",
    actor: "Emma Watson",
    gender: "female",
    house: "Gryffindor",
    wand: "dragon heartstring",
    alive: true
  },
  {
    name: "Draco Malfoy",
    actor: "Tom Felton",
    gender: "male",
    house: "Slytherin",
    wand: "unicorn tail-hair",
    alive: true
  },
  {
    name: "Harry Potter",
    actor: "Daniel Radcliffe",
    gender: "male",
    house: "Gryffindor",
    wand: "phoenix feather",
    alive: true
  },
]

const placeholderImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='334' height='190' viewBox='0 0 334 190' fill='none'%3E%3Crect width='334' height='190' fill='%23E8EAED'/%3E%3Ccircle cx='167' cy='78' r='32' fill='%23BDC1C6'/%3E%3Cpath d='M112 152 C112 118 222 118 222 152 Z' fill='%23BDC1C6'/%3E%3C/svg%3E"

function App() {
  const [school, setSchool] = useState<string>('')
  const [name, setName] = useState<string>('')

  const filteredCharacters = initialCharacters.filter((char) => {
    const matchesSchool =
      !school ||
      school === 'All' ||
      char.house?.toLowerCase() === school.toLowerCase()
    const matchesName =
      !name || char.name?.toLowerCase().includes(name.trim().toLowerCase())
    return matchesSchool && matchesName
  })

  return (
    <div className='app-container'>
      <header>
        <h1>Harry Potter</h1>
        <p>View all characters from the Harry Potter universe</p>
        <div className='input_label'>
          <div>
            <p>Name</p>
            <input
              type='text'
              placeholder='Write your favorite charapter'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>School</p>
            <select
              name='choose_school'
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            >
              <option value=''>Choose one</option>
              <option value='All'>All</option>
              <option value='Gryffindor'>Gryffindor</option>
              <option value='Slytherin'>Slytherin</option>
            </select>
          </div>
        </div>
      </header>
      <main>
        {filteredCharacters.map((char) => (
          <div className='Card' key={char.name}>
            <img
              src={placeholderImg}
              alt={char.name}
            />
            <div className='card_info'>
              <h3>{char.name}</h3>
              <p>Actor: {char.actor || 'Unknown'}</p>
              <p>Gender: {char.gender || 'Unknown'}</p>
              <p>House: {char.house || 'None'}</p>
              <p>Wand core: {char.wand || 'none'}</p>
              <p>Alive: {char.alive ? 'yes' : 'no'}</p>
            </div>
          </div>
        ))}
        {filteredCharacters.length === 0 && (
          <p className='not-found'>
            No characters found
          </p>
        )}
      </main>
    </div>
  )
}

export default App

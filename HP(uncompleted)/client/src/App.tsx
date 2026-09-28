
import './App.css'

function App() {

  return (
    <>
    <header>
        <div className='header_info'>
          <h1>Harry Potter</h1>
          <p>View all charapter from the Harry Potter universe</p>
          <div className='input_label'>
            <div>
              <p>Name</p>
              <input type="text" placeholder='Hermione' />
            </div>
            <div>
              <p>School</p>
              <select name="choose_school" className=''>
                <option value="" disabled selected hidden>Choose one</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="">Slytherin</option>
              </select>
            </div>
          </div>
        </div>
    </header>
    <main>
      <div className='Card'>
        <img src="" alt="" />
        <h3>Hermiona Granger</h3>
        <p>Actor: Emma Watson</p>
        <p>Gender: female</p>
        <p>House: Gryffindor</p>
        <p>Wand core: dragon hearstring</p>
        <p>Alive: yes</p>
      </div>
    </main>
    </>
  )
}

export default App

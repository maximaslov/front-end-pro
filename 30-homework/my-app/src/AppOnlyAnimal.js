import * as React from 'react'

function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

function Display({animal}) {
  return <div>{`Твое любимое животное: ${animal}!`}</div>
}

function setValue(setItem) {
  return e => setItem(e.target.value);
}

function App() {
  const [animal, setAnimal] = React.useState('');
  
  return (
    <form>
      <FavoriteAnimal animal={animal} onAnimalChange={setValue(setAnimal)} />
      
      <Display animal={animal} />
    </form>
  )
}

export default App
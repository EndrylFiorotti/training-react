import Header from "./components/Header";
import Form from "./components/Form";
import Rank from "./components/Rank";
import { useState } from "react";

function App() {
  const ranks = [
    {
      name: 'Rank National',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Rank S',
      primaryColor: '#82CFFA',
      secondaryColor: '#EBF8FF'
    },
    {
      name: 'Rank A',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Rank B',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Rank C',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Rank D',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFFED9'
    },
    {
      name: 'Rank E',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]
  const [characters, setCharacter] = useState([])
  return (
    <div className="App">
      <Header />
      <Form ranks={ranks.map(rank => rank.name)} whenCharacterCreate={character => setCharacter([...characters, character])} />

      {ranks.map(
        rank => <Rank
          key={rank.name}
          name={rank.name}
          primaryColor={rank.primaryColor}
          secondaryColor={rank.secondaryColor}
          characters={characters.filter(character => character.rank === rank.name)}
        />
      )}
    </div>
  );
}

export default App;

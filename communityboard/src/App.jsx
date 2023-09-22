import './App.css';
import MatchCard from '../components/matchCard';
import Matches from '../components/Matches';
import Header from '../components/Header';
import CardGrid from '../components/CardGrid';

const App = () => {

 

  return (
    <div className="App">
      <Header />
      <h1> Group Stage Matches </h1>
      <CardGrid matches={Matches} />

      
    </div>
  )
}

export default App

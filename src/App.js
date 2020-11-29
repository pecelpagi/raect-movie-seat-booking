import './App.css';
import Select from "./components/Select";
import Showcase from "./components/Showcase";
import MovieSeat from "./components/MovieSeat";

const movies = [
  {
    id: '10',
    name: 'Avengers: Endgame ($10)'
  },
  {
    id: '12',
    name: 'Joker ($12)'
  },
  {
    id: '8',
    name: 'Toy Story 4 ($8)'
  },
  {
    id: '9',
    name: 'The Lion King ($9)'
  },
]
const App = () => {
  return (
    <div className="container">
      <label>Pick a movie:</label>
      <Select id="movie" data={movies} />
      <Showcase />
      <MovieSeat />
      <p className="text">You have selected <span>0</span> seats for a price of $<span>0</span></p>
    </div>
  );
}

export default App;

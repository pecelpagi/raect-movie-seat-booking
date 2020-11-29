import { useState } from 'react';
import './App.css';
import Select from "./components/Select";
import Showcase from "./components/Showcase";
import MovieSeat from "./components/MovieSeat";

const movies = [
  {
    id: '10',
    name: 'Avengers: Endgame ($10)',
    price: 10,
  },
  {
    id: '12',
    name: 'Joker ($12)',
    price: 12,
  },
  {
    id: '8',
    name: 'Toy Story 4 ($8)',
    price: 8,
  },
  {
    id: '9',
    name: 'The Lion King ($9)',
    price: 9,
  },
];

const setStorage = (selectedMovie, selectedSeats) => {
  localStorage.setItem("data", JSON.stringify({ selectedMovie, selectedSeats }));
}

const App = () => {
  let storageData = localStorage.getItem("data");

  if (storageData) {
    storageData = JSON.parse(storageData);
  }

  const [selectedSeats, setSelectedSeats] = useState(storageData ? storageData.selectedSeats : []);
  const [selectedMovie, setSelectedMovie] = useState(storageData ? storageData.selectedMovie : '10');

  const onSeatClick = (seatNumber) => {
    const found = selectedSeats.find(x => (x === seatNumber));
    let newValue = [...selectedSeats, seatNumber];

    if (found) {
      newValue = selectedSeats.filter(x => (x !== seatNumber));
    }

    setSelectedSeats(newValue);
    setStorage(selectedMovie, newValue);
  }

  const onSelectMovie = (val) => {
    setSelectedMovie(val);
    setStorage(val, selectedSeats);
  }

  const calculateTotalPrice = () => {
    const movie = movies.find(x => (x.id === selectedMovie));

    return (movie.price * selectedSeats.length);
  }

  return (
    <div className="App">
      <div className="movie-container">
        <label>Pick a movie:</label>
        <Select id="movie" data={movies} value={selectedMovie} onChange={onSelectMovie} />
      </div>
      <Showcase />
      <MovieSeat selectedSeats={selectedSeats} onClick={onSeatClick} />
      <p className="text">You have selected <span>{selectedSeats.length}</span> seats for a price of $<span>{calculateTotalPrice()}</span></p>
    </div>
  );
}

export default App;

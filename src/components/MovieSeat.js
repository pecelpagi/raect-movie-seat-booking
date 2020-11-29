const occupiedSeats = [13, 16, 22, 23, 25, 26, 27, 32, 33, 44]; // total seats: 48

const isOccupied = (seatNumber) => {
    const found = occupiedSeats.find(x => (x === seatNumber));
    
    return !!found;
}

const isSelected = (selectedSeats, seatNumber) => {
    const found = selectedSeats.find(x => (x === seatNumber));

    return !!found;
}

const SeatRow = ({ row, onClick, selectedSeats }) => {
    const seats = [];

    for (let i = (row * 8); i < (8 * (row + 1)); i+=1) {
        const seatNumber = (i+1);
        let clickEvent = () => {};
        let cssClass = "";
        let isSeatOccupied = isOccupied(seatNumber);
        let isSeatSelected = isSelected(selectedSeats, seatNumber);

        if (!isSeatOccupied) {
            clickEvent = () => onClick(seatNumber)
        }

        if (isSeatOccupied) {
            cssClass = 'occupied';
        } else if (isSeatSelected) {
            cssClass = 'selected';
        }

        seats.push(<div key={i} className={`seat ${cssClass}`} onClick={clickEvent} />);
    }

    return (
        <div className="row">
            {seats}
        </div>
    )
}

const MovieSeat = ({ selectedSeats, onClick }) => {
    const seats = [];

    for (let i = 0; i < 6; i+=1) {
        seats.push(<SeatRow key={i} row={i} onClick={onClick} selectedSeats={selectedSeats}/>);
    }

    return (
        <div className="container">
            <div className="screen" />
            {seats}
        </div>
    );
}

export default MovieSeat;
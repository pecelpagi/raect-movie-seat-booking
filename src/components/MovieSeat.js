const SeatRow = () => {
    return (
        <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
        </div>
    )
}

const MovieSeat = () => {
    const seats = [];

    for (let i = 0; i < 6; i+=1) {
        seats.push(<SeatRow />);
    }

    return (
        <div class="container">
            <div class="screen" />
            {seats}
        </div>
    );
}

export default MovieSeat;
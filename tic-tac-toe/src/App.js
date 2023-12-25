import { useState } from "react";

function Kare({value, kareUzeriTiklama}){

  return(
    <button className="square" onClick={kareUzeriTiklama}>{value}</button>
  );
}

export default function Tahta() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // kare üzerine tıklanıldığında yeni değer atayan fonksiyon
  function handleClick(i){

    if ((squares[i]) || calculateWinner(squares)){
      return;
    }
    const sonrakiKareler = squares.slice();

    if (xIsNext) {
      sonrakiKareler[i] = "X";
    } else {
      sonrakiKareler[i] = "O";
    }
    setSquares(sonrakiKareler);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return(

    <>
    <div className="status">{status}</div>
    <div className="board-row">
        <Kare value={squares[0]} kareUzeriTiklama={() => {handleClick(0)}}/>
        <Kare value={squares[1]} kareUzeriTiklama={() => {handleClick(1)}}/>
        <Kare value={squares[2]} kareUzeriTiklama={() => {handleClick(2)}}/>
    </div>

    <div className="board-row">

        <Kare value={squares[3]} kareUzeriTiklama={() => {handleClick(3)}}/>
        <Kare value={squares[4]} kareUzeriTiklama={() => {handleClick(4)}}/>
        <Kare value={squares[5]} kareUzeriTiklama={() => {handleClick(5)}}/>

    </div>

    <div className="board-row">

        <Kare value={squares[6]} kareUzeriTiklama={() => {handleClick(6)}}/>
        <Kare value={squares[7]} kareUzeriTiklama={() => {handleClick(7)}}/>
        <Kare value={squares[8]} kareUzeriTiklama={() => {handleClick(8)}}/>

    </div>

    </>

  );

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
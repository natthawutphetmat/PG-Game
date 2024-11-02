// app/tictactoe/page.js
"use client";

import { useState, useEffect } from "react";
import "./tictactoe.css";
import "./game.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPNext, setIsPNext] = useState(true); // เปลี่ยนเป็น isPNext แทน isXNext
  const winner = calculateWinner(board);

  // ฟังก์ชันบอทเลือกตำแหน่งแบบสุ่ม
  const botMove = () => {
    const emptySquares = board
      .map((square, index) => (square === null ? index : null))
      .filter((index) => index !== null);

    if (emptySquares.length > 0) {
      const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      const newBoard = board.slice();
      newBoard[randomIndex] = "G";
      setBoard(newBoard);
      setIsPNext(true);
    }
  };

  // ฟังก์ชันเมื่อผู้เล่นคลิกที่บอร์ด
  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = isPNext ? "P" : "G";
    setBoard(newBoard);
    setIsPNext(!isPNext);

    if (!isPNext) {
      botMove();
    }
  };

  // คำนวณผู้ชนะ
  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (

      <>  
      
      <div className="container"> 
<div className="bar">
  <h1> PG </h1>
<h2>Page - Game</h2>
 

</div>






    <div className="game-container">
    <h1>PG Game เล่นกันแบบสนุกๆ   </h1>

    <h3> เล่นกันได้ตลอดเวลา24ชม  </h3>
    




     

    
         


      <div className="board">
        {board.map((square, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
      <div className="status">
        {winner
          ? `Winner: ${winner}`
          : `Next player: ${isPNext ? "P" : "G"}`}


      </div>

         






      
    </div>

    <div className="box">
    <h3> ยินดีต้อนรับสู่เกม Page - Game ออนไลน์ 🎉</h3>


    เกมกระดานสุดคลาสสิกที่คุณรู้จักดี พร้อมดีไซน์ใหม่ให้ทันสมัย! ไม่ว่าจะเป็นการเล่นกับบอทสุดฉลาด หรือท้าทายเพื่อนของคุณ เกมนี้จะทำให้คุณติดใจ เพลิดเพลินกับประสบการณ์ที่เข้าใจง่าย สนุกได้ทุกที่ ไม่ว่าจะเป็นบนคอมพิวเตอร์หรือมือถือ!
<br />
<br />
<strong>
วิธีเล่นเกม Page - Game
</strong>

<p>1.เริ่มเกม: คุณจะได้เล่นเป็นตัว P ส่วนบอทจะเล่นเป็นตัว G</p>

<p>2. กติกา: วางหมากของคุณลงบนตารางขนาด 3x3 โดยเรียงให้ได้ 3 ช่องติดกันในแนวตั้ง แนวนอน หรือแนวทแยงเพื่อเอาชนะ!
</p>

<p>3. ท้าทายบอท: หลังจากคุณเดิน บอทจะทำการเลือกเดินตามกลยุทธ์สุดอัจฉริยะทันที ใครจะชนะกันนะ? มาท้าทายกันได้เลย!
</p>
<br />
<h4>สนุกไปกับการเล่นแบบกลยุทธ์
</h4>
<p>แม้ Page - Game จะดูเหมือนเกมง่าย ๆ แต่การวางแผนและกลยุทธ์เป็นสิ่งที่สำคัญ มาลองดูว่าคุณจะสามารถเอาชนะบอทได้หรือไม่! เกมนี้เหมาะกับทุกวัย เล่นได้ฟรีทุกเวลา

</p>

    </div>


    </div>

    </>
  );
};

export default TicTacToe;

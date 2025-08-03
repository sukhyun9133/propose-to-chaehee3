import React, { useState } from 'react';
import Result from './Result';
import Retry from './Retry';
import './style.css';

const App = () => {
  const [page, setPage] = useState(0);
  const [rejected, setRejected] = useState(false);

  const questions = [
    "Q1 아침에 출근 전에 내가 삶은 계란이랑 바나나 챙겨줄게. 채희의 허기 내가 책임져도 될까? 🍌🥚",
    "Q2 주말엔 같이 장 보고 내가 요리할게! 혹시 맛이 망해도 맛있게 먹어줄 수 있어? 🍳😆",
    "Q3 리버풀 경기할 땐 가끔 닭강정 시켜서 같이 보면 안 될까? 나 혼자 보기엔 아쉬워서... 🍗⚽❤️❤️",
    "Q4 퇴근하고는 같이 밥 먹으면서 오늘 어땠는지 얘기 나눠줄래? 채희 이야기 듣는 게 제일 좋거든 😆🍚",
    "Q5 재밌는 드라마 나오면 우리 같이 정주행 하는 거 어때? 근데 나 중간에 졸아도 이해해줄 거지? 😴📺",
    "Q6 채희가 힘든 날엔 아무 말 없이 꼭 안아줘도 괜찮을까? 말보단 포옹으로 위로하고 싶어 🤗🫂",
    "Q7 채희 눈에 내가 답답해 보여도 너무 뭐라하지 말고 상냥하게 대해줄 수 있어...?.. 호호 😅💗",
    "Q8 앞으로 평생 ‘채희 편’만 들 건데 각오돼 있지? 물론 이미 나는 채희만의 편이긴 해 😎❤️"
  ];

  const handleYes = () => {
    if (page === questions.length) {
      setPage(page + 1); // go to result
    } else {
      setPage(page + 1);
    }
  };

  const handleNo = () => {
    if (page === questions.length) {
      setRejected(true);
    }
  };

  const handleRetry = () => {
    setRejected(false);
    setPage(questions.length); // go back to confession page
  };

  if (rejected) return <Retry onRetry={handleRetry} />;
  if (page > questions.length) return <Result />;
  if (page === 0) {
    return (
      <div className="page">
        <h1>To. 사랑하는 채희에게</h1>
        <p>오늘은 특별한 하루야.<br/>우리의 미래에 대해 한 번 상상해볼래? 🌸</p>
        <button onClick={handleYes}>다음</button>
      </div>
    );
  }

  if (page === questions.length) {
    return (
      <div className="page">
        <h2>Q9 마지막 질문!</h2>
        <p>그럼 앞으로도 내 옆에 있어줄래? 💍</p>
        <div className="button-group">
          <button onClick={handleYes}>예</button>
          <button onClick={handleNo}>아니오</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>{questions[page - 1]}</h2>
      <button onClick={handleYes}>다음</button>
    </div>
  );
};

export default App;

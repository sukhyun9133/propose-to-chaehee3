import React from 'react';

const Result = () => {
  return (
    <div className="page">
      <h2>💖 우리 이야기의 시작 💖</h2>
      <p>다시 보고 싶다면 아래 버튼을 눌러줘!</p>
      <button onClick={() => window.location.reload()}>다시 보기 🔁</button>
    </div>
  );
};

export default Result;

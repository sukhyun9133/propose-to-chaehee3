import React from 'react';

const Retry = ({ onRetry }) => {
  return (
    <div className="page">
      <h2>😢 다시 고민해봐줘</h2>
      <p>나는 진심이야... 다시 한 번 생각해볼래?</p>
      <button onClick={onRetry}>다시 하기</button>
    </div>
  );
};

export default Retry;

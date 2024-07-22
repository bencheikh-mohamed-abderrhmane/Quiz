import React from 'react';

const Results = ({ score, total }) => {
  return (
    <div className="results">
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
};

export default Results;

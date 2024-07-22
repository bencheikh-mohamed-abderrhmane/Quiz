import React from 'react';

const Question = ({ data, handleAnswer }) => {
  return (
    <div className="question">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

import React from 'react';

const QuizOpion = ({ op }) => {
    const { option, isCorrect } = op || {};
    return (
        <label >
            <input type="checkbox" value={isCorrect} />
            {option}
        </label>
    );
};

export default QuizOpion;
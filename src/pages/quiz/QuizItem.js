import React from 'react';
import QuizOpion from './QuizOpion';

const QuizItem = ({ quiz }) => {
    const { options, question } = quiz || {}



    return (
        <div className="quiz">
            <h4 className="question">{question}</h4>
            <form className="quizOptions">

                {
                    options?.map(option => <QuizOpion key={option.id} op={option} ></QuizOpion>)
                }
            </form>
        </div>
    );
};

export default QuizItem;
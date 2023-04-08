import React from 'react';
import { useGetQuizzesQuery } from '../../features/Quizzes/QuizzesApi';
import Loading from '../../components/ui/Loading';
import Error from '../../components/ui/Error';
import { useParams } from 'react-router-dom';
import QuizItem from './QuizItem';

const Quiz = () => {
    const { id } = useParams();
    const { data: quizzes, isLoading, isError, } = useGetQuizzesQuery(id);


    let content = null;

    if (isLoading) {

        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error" />;
    }

    if (!isLoading && !isError && quizzes?.length === 0) {
        content = <Error message="No Quiz found!" />;
    }
    if (!isLoading && !isError && quizzes?.length > 0) {
        content = quizzes?.map(quiz => <QuizItem key={quiz.id} quiz={quiz}></QuizItem>);
    }
    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-7xl px-5 lg:px-0">
                <div class="mb-8">
                    <h1 class="text-2xl font-bold">Quizzes for "Debounce Function in JavaScript - JavaScript Job Interview question"
                    </h1>
                    <p class="text-sm text-slate-200">Each question contains 5 Mark</p>
                </div>
                <div class="space-y-8 ">
                    <div class="quiz">
                        <h4 class="question">Quiz 1 - What is a Debounce function in JavaScript?</h4>
                        <form class="quizOptions">
                            {/* <!-- Option 1 --> */}
                            <label for="option1_q1">
                                <input type="checkbox" id="option1_q1" />
                                A function that is called after a certain time interval
                            </label>

                            {/* <!-- Option 2 --> */}
                            <label for="option2_q1">
                                <input type="checkbox" id="option2_q1" />
                                A function that is called after a certain time interval
                            </label>

                            {/* <!-- Option 3 --> */}
                            <label for="option3_q1">
                                <input type="checkbox" id="option3_q1" />
                                A function that is called after a certain time interval
                            </label>

                            {/* <!-- Option 4 --> */}
                            <label for="option4_q1">
                                <input type="checkbox" id="option4_q1" />
                                A function that is called after a certain time interval
                            </label>
                        </form>
                    </div>

                    <div class="quiz">
                        <h4 class="question">Quiz 2 - Which of the following is an example of a situation where you would use the
                            Debounce function?</h4>
                        <form class="quizOptions">
                            {/* <!-- Option 1 --> */}
                            <label for="option1_q2">
                                <input type="checkbox" id="option1_q2" />
                                A search bar where the results are displayed as you type.
                            </label>

                            {/* <!-- Option 2 --> */}
                            <label for="option2_q2">
                                <input type="checkbox" id="option2_q2" />
                                A button that performs an action when clicked.
                            </label>

                            {/* <!-- Option 3 --> */}
                            <label for="option3_q2">
                                <input type="checkbox" id="option3_q2" />
                                An animation that plays when a user hovers over an element.
                            </label>

                            {/* <!-- Option 4 --> */}
                            <label for="option4_q2">
                                <input type="checkbox" id="option4_q2" />
                                All of the above.
                            </label>
                        </form>
                    </div>
                </div>

                <button
                    class="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
            </div>
        </section>
    );
};

export default Quiz;
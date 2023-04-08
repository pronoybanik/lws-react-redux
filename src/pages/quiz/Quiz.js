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

                    {content}


                </div>

                <button
                    class="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
            </div>
        </section>
    );
};

export default Quiz;
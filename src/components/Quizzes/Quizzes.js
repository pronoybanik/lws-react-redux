import React from 'react';
import { Link } from 'react-router-dom';
import { useGetQuizzesMarksQuery } from '../../features/Quizzes/QuizzesApi';
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import QuizzesMarkItem from './QuizzesMarkItem';

const Quizzes = () => {
    const { data: quizzesMark, isLoading, isError, error } = useGetQuizzesMarksQuery();
    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <Error message={error}></Error>
    }
    if (!isLoading && !isError && quizzesMark.length === 0) {
        content = <Error message={"There are no Quizzes"}></Error>
    }
    if (!isLoading && !isError && quizzesMark.length > 0) {
        content = quizzesMark.map(assignment => <QuizzesMarkItem key={assignment.id} quizzesDetails={assignment}></QuizzesMarkItem>)
    }

    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-full px-5 lg:px-20">
                <div class="px-3 py-20 bg-opacity-10">
                    <Link to='/admin/addQuizzes'>
                        <div class="w-full flex">
                            <button class="btn ml-auto">Add Quiz</button>
                        </div>
                    </Link>
                    <div class="overflow-x-auto mt-4">
                        <table class="divide-y-1 text-base divide-gray-600 w-full">
                            <thead>
                                <tr>
                                    <th class="table-th">Question</th>
                                    <th class="table-th">Video</th>
                                    <th class="table-th justify-center">Action</th>
                                </tr>
                            </thead>

                            {content}
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quizzes;
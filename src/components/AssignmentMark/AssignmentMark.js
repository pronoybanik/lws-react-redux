import React from 'react';
import { useAssignmentMarkQuery } from '../../features/assignmentMark/AssignmentMarkApi';
import AssignmentMarksItem from './AssignmentMarksItem';
import Loading from '../ui/Loading';
import Error from '../ui/Error';

const AssignmentMark = () => {
    const { data: assignmentMarks, isLoading, isError, error } = useAssignmentMarkQuery();


    const pendingState = assignmentMarks?.filter(state => state.status === 'pending');
    const markSent = assignmentMarks?.filter(state => state.status === 'published');


    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <Error message={error}></Error>
    }
    if (!isLoading && !isError && assignmentMarks.length === 0) {
        content = <Error message={"There are no Video"}></Error>
    }
    if (!isLoading && !isError && assignmentMarks.length > 0) {
        content = assignmentMarks.map(assignment => <AssignmentMarksItem
            key={assignment.id} assignmentDetails={assignment}></AssignmentMarksItem>)
    }

    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-full px-5 lg:px-20">
                <div class="px-3 py-20 bg-opacity-10">
                    <ul class="assignment-status">
                        <li>Total <span>{assignmentMarks?.length}</span></li>
                        <li>Pending <span>{pendingState?.length}</span></li>
                        <li>Mark Sent <span>{markSent?.length}</span></li>
                    </ul>
                    <div class="overflow-x-auto mt-4">
                        <table class="divide-y-1 text-base divide-gray-600 w-full">
                            <thead>
                                <tr>
                                    <th class="table-th">Assignment</th>
                                    <th class="table-th">Date</th>
                                    <th class="table-th">Student Name</th>
                                    <th class="table-th">Repo Link</th>
                                    <th class="table-th">Mark</th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-slate-600/50">
                                {content}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssignmentMark;
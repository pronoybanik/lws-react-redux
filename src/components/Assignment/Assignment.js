import React from 'react';
import { useGetAssignmentQuery } from '../../features/Assignment/AssignmentApi';
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import AssignmentItem from './AssignmentItem';
import { Link } from 'react-router-dom';

const Assignment = () => {
    const { data: allAssignment, isLoading, isError, error } = useGetAssignmentQuery();
   
    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <Error message={error}></Error>
    }
    if (!isLoading && !isError && allAssignment.length === 0) {
        content = <Error message={"There are no Assignment"}></Error>
    }
    if (!isLoading && !isError && allAssignment.length > 0) {
        content = allAssignment.map(assignment => <AssignmentItem key={assignment.id} assignmentDetails={assignment}></AssignmentItem>)
    }
    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-full px-5 lg:px-20">
                <div class="px-3 py-20 bg-opacity-10">
                    <Link to='/admin/addAssignment'>
                        <div class="w-full flex">
                            <button class="btn ml-auto">Add Assignment</button>
                        </div>
                    </Link>
                    <div class="overflow-x-auto mt-4">
                        <table class="divide-y-1 text-base divide-gray-600 w-full">
                            <thead>
                                <tr>
                                    <th class="table-th">Title</th>
                                    <th class="table-th">Video Title</th>
                                    <th class="table-th">Mark</th>
                                    <th class="table-th">Action</th>
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

export default Assignment;
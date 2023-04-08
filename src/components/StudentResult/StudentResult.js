import React from 'react';
import { useAssignmentMarkQuery } from '../../features/assignmentMark/AssignmentMarkApi';
import Loading from '../ui/Loading';
import Error from '../ui/Error';

const StudentResult = () => {
    const { data: marks, isLoading, isError } = useAssignmentMarkQuery();

    let content = null;

    if (isLoading) {

        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error" />;
    }

    if (!isLoading && !isError && marks?.length === 0) {
        content = <Error message="No found data!" />;
    }

    if (!isLoading && !isError && marks?.length > 0) {
        content = marks
            .slice()
            .sort((a, b) => b.mark - a.mark)
            .map((mark, i) => {
                const { student_name, totalMark, mark: assignmentMark } = mark;
                return (
                    <tbody>
                        <tr class="border-b border-slate-600/50">
                            <td class="table-td text-center">{i + 1}</td>
                            <td class="table-td text-center">{student_name}</td>
                            <td class="table-td text-center">50</td>
                            <td class="table-td text-center">{assignmentMark}</td>
                            <td class="table-td text-center">{totalMark}</td>
                        </tr>

                    </tbody>
                )
            });
    }
    return (
        <table class="text-base w-full border border-slate-600/50 rounded-md my-4">
            <thead>
                <tr class="border-b border-slate-600/50">
                    <th class="table-th !text-center">Rank</th>
                    <th class="table-th !text-center">Name</th>
                    <th class="table-th !text-center">Quiz Mark</th>
                    <th class="table-th !text-center">Assignment Mark</th>
                    <th class="table-th !text-center">Total</th>
                </tr>
            </thead>
            {content}

        </table>
    );
};

export default StudentResult;
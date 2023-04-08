import React, { useState } from 'react';
import { useAddAssignmentMarkMutation } from '../../features/assignmentMark/AssignmentMarkApi';

const AssignmentMarksItem = ({ assignmentDetails }) => {
    const { id, title, mark, repo_link, createdAt, student_name } = assignmentDetails || {};
    const [addAssignmentMark] = useAddAssignmentMarkMutation();
    const [addMark, setAddMark] = useState(100);

    const handleSubmit = () => {
        addAssignmentMark({
            id,
            data: {
                mark: Number(addMark)
            }
        })
    }

    return (
        <tr>
            <td class="table-td">{title}</td>
            <td class="table-td">{createdAt}</td>
            <td class="table-td">{student_name}</td>
            <td class="table-td">{repo_link}</td>
            {
                mark === 0 ? <td class="table-td input-mark">
                    <input max="100" onChange={e => setAddMark(e.target.value)} value={addMark} />
                    <svg onClick={handleSubmit} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        class="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </td> : <td class="table-td">{mark}</td>
            }
        </tr>
    );
};

export default AssignmentMarksItem;
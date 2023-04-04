import React from 'react';
import StudentLeaderBoardPosition from '../../components/StudentLeaderBoardPosition/StudentLeaderBoardPosition';
import StudentResult from '../../components/StudentResult/StudentResult';

const LeaderBoard = () => {
   
    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-7xl px-5 lg:px-0">
                <div>
                    <h3 class="text-lg font-bold">Your Position in Leaderboard</h3>
                    <StudentLeaderBoardPosition></StudentLeaderBoardPosition>
                </div>

                <div class="my-8">
                    <h3 class="text-lg font-bold">Top 20 Result</h3>
                    <StudentResult></StudentResult>
                </div>
            </div>
        </section>
    );
};

export default LeaderBoard;
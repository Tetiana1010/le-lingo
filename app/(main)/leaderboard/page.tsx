"use client";

import { useState } from 'react';

type LeaderboardEntry = {
  id: number;
  username: string;
  score: number;
};

const Leaderboard = () => {
  // Simulate leaderboard data
  const leaderboardData: LeaderboardEntry[] = [
    { id: 1, username: 'Tetina', score: 1500 },
    { id: 2, username: 'Alex', score: 1300 },
    { id: 3, username: 'Maria', score: 1100 },
    { id: 4, username: 'John', score: 900 },
    { id: 5, username: 'Sophia', score: 850 },
  ];

  const [data] = useState(leaderboardData);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Leaderboard</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border-b">Rank</th>
              <th className="p-4 border-b">Username</th>
              <th className="p-4 border-b">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={entry.id} className="hover:bg-gray-100">
                <td className="p-4 border-b">{index + 1}</td>
                <td className="p-4 border-b">{entry.username}</td>
                <td className="p-4 border-b">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
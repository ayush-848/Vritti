import React, { useState, useEffect } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaMedal } from 'react-icons/fa';
import { MdDelete, MdAddCircleOutline, MdLeaderboard } from 'react-icons/md';

const initialLeaderboardData = [
    { id: 1, name: 'John Doe', scores: [85, 92, 78] },
    { id: 2, name: 'Jane Smith', scores: [95, 88, 91] },
    { id: 3, name: 'Michael Brown', scores: [79, 85, 82] },
    { id: 4, name: 'Emily Davis', scores: [92, 95, 89] },
];

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [isTeacher, setIsTeacher] = useState(false);
    const [newStudentName, setNewStudentName] = useState('');

    useEffect(() => {
        setLeaderboard(initialLeaderboardData);
    }, []);

    const addStudent = () => {
        if (newStudentName.trim()) {
            const newStudent = {
                id: Date.now(),
                name: newStudentName.trim(),
                scores: []
            };
            setLeaderboard(prev => [...prev, newStudent]);
            setNewStudentName('');
        }
    };

    const updateScore = (id, newScore) => {
        setLeaderboard(prev =>
            prev.map(student =>
                student.id === id
                    ? { ...student, scores: [...student.scores, Number(newScore)] }
                    : student
            )
        );
    };

    const deleteStudent = (id) => {
        setLeaderboard(prev => prev.filter(student => student.id !== id));
    };

    const toggleRole = () => {
        setIsTeacher(prev => !prev);
    };

    const calculateTotalScore = (scores) => scores.reduce((sum, score) => sum + score, 0);
    const getLatestScore = (scores) => scores.length > 0 ? scores[scores.length - 1] : 'N/A';

    const sortedLeaderboard = [...leaderboard].sort((a, b) => 
        calculateTotalScore(b.scores) - calculateTotalScore(a.scores)
    );

    return (
        <div className="min-h-screen font-montserrat py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)' }} >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <MdLeaderboard className="mx-auto text-6xl text-yellow-400 mb-4" />
                    <h1 className="text-5xl font-extrabold text-white mb-2">Student Leaderboard</h1>
                    <p className="text-xl text-blue-200">Celebrating Excellence and Progress</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
                    <div className="p-6 flex justify-between items-center border-b border-gray-700">
                        <div className="flex items-center space-x-4">
                            {isTeacher ? (
                                <FaChalkboardTeacher className="text-3xl text-yellow-400" />
                            ) : (
                                <FaUserGraduate className="text-3xl text-green-400" />
                            )}
                            <span className="text-2xl font-semibold text-white">
                                {isTeacher ? "Teacher's View" : "Student's View"}
                            </span>
                        </div>
                        <button
                            onClick={toggleRole}
                            className="px-6 py-2 rounded-full font-semibold text-white transition duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Switch to {isTeacher ? "Student" : "Teacher"} View
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-300 border-b border-gray-700">
                                    <th className="py-4 px-6">Rank</th>
                                    <th className="py-4 px-6">Name</th>
                                    <th className="py-4 px-6">Total Score</th>
                                    <th className="py-4 px-6">Latest Score</th>
                                    {isTeacher && <th className="py-4 px-6">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {sortedLeaderboard.map((student, index) => (
                                    <tr key={student.id} className="border-b border-gray-700 hover:bg-white hover:bg-opacity-5 transition duration-200">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                {index === 0 && <FaTrophy className="text-yellow-400 mr-2" />}
                                                {index === 1 && <FaMedal className="text-gray-400 mr-2" />}
                                                {index === 2 && <FaMedal className="text-yellow-600 mr-2" />}
                                                <span className="text-white font-semibold">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-blue-300 font-medium">{student.name}</td>
                                        <td className="py-4 px-6">
                                            <span className="text-yellow-400 font-bold">{calculateTotalScore(student.scores)}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-green-400 font-bold">{getLatestScore(student.scores)}</span>
                                        </td>
                                        {isTeacher && (
                                            <td className="py-4 px-6">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="number"
                                                        placeholder="New Score"
                                                        className="w-24 px-3 py-1 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        onKeyPress={(e) => {
                                                            if (e.key === 'Enter') {
                                                                updateScore(student.id, e.target.value);
                                                                e.target.value = '';
                                                            }
                                                        }}
                                                    />
                                                    <button
                                                        onClick={() => deleteStudent(student.id)}
                                                        className="text-red-500 hover:text-red-600 transition duration-200"
                                                    >
                                                        <MdDelete size={24} />
                                                    </button>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {isTeacher && (
                        <div className="p-6 border-t border-gray-700">
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    placeholder="New Student Name"
                                    value={newStudentName}
                                    onChange={(e) => setNewStudentName(e.target.value)}
                                    className="flex-grow px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={addStudent}
                                    className="px-6 py-2 rounded-full font-semibold text-white transition duration-300 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <MdAddCircleOutline size={24} className="inline mr-2" />
                                    Add Student
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
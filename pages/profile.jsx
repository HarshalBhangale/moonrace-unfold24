import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { walletAddressAtom } from "@/lib/state";

const Profile = () => {
    const router = useRouter();
    const [walletAddress] = useAtom(walletAddressAtom);

    const [userProfile] = useState({
        username: 'harshal.sui',
        walletAddress: "0xe0b8...fb7d0", 
        avatar: '/images/avatar.png',
        stats: {
            totalGames: 42,
            winRate: "58%", 
            totalEarnings: "2.5 SUI",
            highScore: "247"
        },
        recentActivity: [
            { 
                type: "Game Won",
                event: "Flappy Bird Tournament #127",
                amount: "+0.5 SUI",
                date: "2h ago",
                matchDetails: {
                    matchId: "#127",
                    score: 186,
                    participants: 50,
                    poolSize: "25 SUI"
                }
            },
            {
                type: "Game Played", 
                event: "Flappy Bird Tournament #126",
                amount: "-0.1 SUI",
                date: "5h ago",
                matchDetails: {
                    matchId: "#126",
                    score: 142,
                    participants: 75,
                    poolSize: "37.5 SUI"
                }
            },
            {
                type: "Game Won",
                event: "Flappy Bird Tournament #125",
                amount: "+0.8 SUI", 
                date: "1d ago",
                matchDetails: {
                    matchId: "#125",
                    score: 201,
                    participants: 100,
                    poolSize: "50 SUI"
                }
            },
            {
                type: "Game Played",
                event: "Flappy Bird Tournament #124",
                amount: "-0.1 SUI",
                date: "2d ago",
                matchDetails: {
                    matchId: "#124",
                    score: 167,
                    participants: 60,
                    poolSize: "30 SUI"
                }
            }
        ]
    });

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Profile Header */}
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <div className="flex items-center space-x-6">
                        <Image 
                            src={userProfile.avatar} 
                            alt="Profile" 
                            width={120} 
                            height={120} 
                            className="rounded-full ring-4 ring-indigo-500"
                        />
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold">{userProfile.username}</h1>
                            <p className="text-gray-400 mt-1">{userProfile.walletAddress}</p>
                            <div className="flex items-center mt-3">
                                <span className="bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
                                    High Score: {userProfile.stats.highScore}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button 
                                className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                                onClick={() => router.push('https://global-stg.transak.com/?apiKey=4aae77ea-df1a-4a88-9095-89625873c08e')}
                            >
                                Buy SUI
                            </button>
                            <button className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 transition">
                                Settings
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    {Object.entries(userProfile.stats).map(([key, value]) => (
                        <div key={key} className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                            <p className="text-2xl font-bold mt-2">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6">Recent Games History</h2>
                    <div className="space-y-4">
                        {userProfile.recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700">
                                <div>
                                    <p className="font-medium">{activity.type}</p>
                                    <p className="text-sm text-gray-400">{activity.event}</p>
                                    <div className="mt-1 text-xs text-gray-500">
                                        <p>Score: {activity.matchDetails.score} | Players: {activity.matchDetails.participants}</p>
                                        <p>Pool Size: {activity.matchDetails.poolSize}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`font-semibold ${activity.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                        {activity.amount}
                                    </p>
                                    <p className="text-sm text-gray-400">{activity.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
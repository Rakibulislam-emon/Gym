import { useState, useEffect } from 'react';

const schedules = {
    Monday: [
        { time: '09:00-10:00', class: 'Yoga', instructor: 'John' },
        { time: '10:00-11:00', class: 'Pilates', instructor: 'Jane' },
        { time: '11:00-12:00', class: 'Zumba', instructor: 'Bob' },
    ],
    Tuesday: [
        { time: '09:00-10:00', class: 'Strength Training', instructor: 'Alice' },
        { time: '10:00-11:00', class: 'Cardio', instructor: 'Mike' },
        { time: '11:00-12:00', class: 'Yoga', instructor: 'John' },
    ],
    Wednesday: [
        { time: '09:00-10:00', class: 'Pilates', instructor: 'Jane' },
        { time: '10:00-11:00', class: 'Zumba', instructor: 'Bob' },
        { time: '11:00-12:00', class: 'Strength Training', instructor: 'Alice' },
    ],
    Thursday: [
        { time: '09:00-10:00', class: 'Cardio', instructor: 'Mike' },
        { time: '10:00-11:00', class: 'Yoga', instructor: 'John' },
        { time: '11:00-12:00', class: 'Pilates', instructor: 'Jane' },
    ],
    Friday: [
        { time: '09:00-10:00', class: 'Zumba', instructor: 'Bob' },
        { time: '10:00-11:00', class: 'Strength Training', instructor: 'Alice' },
        { time: '11:00-12:00', class: 'Cardio', instructor: 'Mike' },
    ],
    Saturday: [
        { time: '09:00-10:00', class: 'Yoga', instructor: 'John' },
        { time: '10:00-11:00', class: 'Pilates', instructor: 'Jane' },
        { time: '11:00-12:00', class: 'Zumba', instructor: 'Bob' },
    ],
    Sunday: [
        { time: '09:00-10:00', class: 'Cardio', instructor: 'Mike' },
        { time: '10:00-11:00', class: 'Strength Training', instructor: 'Alice' },
        { time: '11:00-12:00', class: 'Yoga', instructor: 'John' },
    ],
};

const days = Object.keys(schedules);

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState('');

    // Set the default selected day to the current day when the component mounts
    useEffect(() => {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        setSelectedDay(today);
    }, []);

    return (
        <div className="p-6 my-8 mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className='text-5xl text-center my-10 font-bold'>CLASS TIMETABLE</h1>
            <div className="flex flex-wrap justify-around mb-4">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-4 py-2 m-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${selectedDay === day ? 'bg-gradient-to-r from-[#ec4554] to-[#f36a39] text-white shadow-lg' : 'bg-gray-200 text-gray-800'}`}
                    >
                        {day}
                    </button>
                ))}
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4 text-center py-8 text-[#f36a39]">{selectedDay} Schedule</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#ec4554] to-[#f36a39] text-white">
                                <th className="px-4 py-4 border border-gray-300">Time</th>
                                <th className="px-4 py-2 border border-gray-300">Class</th>
                                <th className="px-4 py-2 border border-gray-300">Instructor</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {schedules[selectedDay]?.map((session, index) => (
                                <tr key={index} className="hover:bg-gray-100 transition duration-300">
                                    <td className="border px-4 py-6">{session.time}</td>
                                    <td className="border px-4 py-2">{session.class}</td>
                                    <td className="border px-4 py-2">{session.instructor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Schedule;

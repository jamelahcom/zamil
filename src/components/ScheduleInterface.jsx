import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ScheduleInterface.css'; // Import the CSS file

const initialTasks = [
  { 
    id: 1, 
    name: 'Introduction to Artificial Intelligence', 
    duration: '2 hours', 
    subtasks: [
      { id: 'a', name: 'Read chapter 1', completed: false },
      { id: 'b', name: 'Watch intro video', completed: false },
      { id: 'c', name: 'Complete quiz', completed: false },
    ]
  },
  { 
    id: 2, 
    name: 'Machine Learning', 
    duration: '1 hour', 
    subtasks: [
      { id: 'a', name: 'Review algorithms', completed: false },
      { id: 'b', name: 'Practice with dataset', completed: false },
    ]
  },
  // ... Add more tasks as needed
];

const ScheduleInterface = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState(initialTasks);
  const [expandedTask, setExpandedTask] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' });
  };

  const toggleSubtask = (taskId, subtaskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            subtasks: task.subtasks.map(st => 
              st.id === subtaskId ? { ...st, completed: !st.completed } : st
            )
          } 
        : task
    ));
  };

  const calculateTaskProgress = (task) => {
    const completedSubtasks = task.subtasks.filter(st => st.completed).length;
    return Math.round((completedSubtasks / task.subtasks.length) * 100);
  };

  const calculateOverallProgress = () => {
    const totalSubtasks = tasks.reduce((sum, task) => sum + task.subtasks.length, 0);
    const completedSubtasks = tasks.reduce((sum, task) => sum + task.subtasks.filter(st => st.completed).length, 0);
    return Math.round((completedSubtasks / totalSubtasks) * 100);
  };

  const completedSubtasks = tasks.reduce((sum, task) => sum + task.subtasks.filter(st => st.completed).length, 0);
  const totalSubtasks = tasks.reduce((sum, task) => sum + task.subtasks.length, 0);
  const remainingSubtasks = totalSubtasks - completedSubtasks;

  useEffect(() => {
    if (completedSubtasks === totalSubtasks) {
      setShowCelebration(true);
    }
  }, [completedSubtasks, totalSubtasks]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Today's To-Do List</h1>
          <h2 className="text-xl text-purple-600">{formatDate(currentDate)}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Go Home</button>
=        </div>
      </div>

      <div className="mb-6">
        {tasks.map((task) => (
          <div key={task.id} className="mb-4 bg-purple-100 rounded-lg">
            <div className="p-4 flex items-center">
              <div className="flex-grow">
                <h4 className="font-semibold">{task.name}</h4>
              </div>
              <span className="text-sm mr-2">{task.duration}</span>
              <span className="text-sm mr-2">{calculateTaskProgress(task)}%</span>
              <button onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
                {expandedTask === task.id ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {expandedTask === task.id && (
              <div className="px-4 pb-4">
                {task.subtasks.map(subtask => (
                  <div key={subtask.id} className="flex items-center mt-2">
                    <input 
                      type="checkbox" 
                      checked={subtask.completed}
                      onChange={() => toggleSubtask(task.id, subtask.id)}
                      className="mr-2"
                    />
                    <span className={subtask.completed ? 'line-through text-gray-500' : ''}>{subtask.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold">{completedSubtasks}</div>
            <div className="text-sm text-gray-600">Tasks completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{remainingSubtasks}</div>
            <div className="text-sm text-gray-600">Tasks remained</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <h3 className="font-bold">Daily Progress</h3>
            <p className="text-sm text-gray-600">Keep going!</p>
          </div>
          <div className="w-16 h-16 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="3"
                strokeDasharray={`${calculateOverallProgress()}, 100`}
              />
              <text x="18" y="20.35" className="text-xs" textAnchor="middle" fill="#4CAF50">
                {calculateOverallProgress()}%
              </text>
            </svg>
          </div>
        </div>
      </div>

      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">You've completed all your tasks for today. Great job!</p>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
              onClick={() => setShowCelebration(false)}
            >
              Go Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleInterface;

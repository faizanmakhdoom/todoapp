import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, toggleTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css'; // Make sure this points to your CSS file

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetchTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (taskData) => {
    try {
      const res = await createTask(taskData);
      setTasks(prev => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
      alert('Failed to create task');
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await toggleTask(id);
      setTasks(prev => prev.map(task => 
        task._id === id ? res.data : task
      ));
    } catch (err) {
      console.error(err);
      alert('Failed to toggle task');
    }
  };

  // Calculate progress
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (loading) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p style={{ 
              marginTop: '1rem', 
              fontSize: '1.2rem', 
              color: 'rgba(255, 255, 255, 0.8)' 
            }}>
              Loading your tasks...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>TaskFlow</h1>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)', 
          fontSize: '1.2rem', 
          fontWeight: '300',
          marginBottom: '2rem' 
        }}>
          Organize your life, one task at a time
        </p>
        
        {/* Progress Bar */}
        {totalCount > 0 && (
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '0.5rem'
            }}>
              <span>Progress</span>
              <span>{completedCount}/{totalCount} completed</span>
            </div>
            <div style={{ 
              width: '100%', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '10px', 
              height: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                background: 'linear-gradient(90deg, #27ae60, #3498db)',
                height: '100%', 
                borderRadius: '10px',
                width: `${progressPercentage}%`,
                transition: 'width 0.7s ease'
              }}></div>
            </div>
            <div style={{ 
              textAlign: 'center', 
              marginTop: '0.5rem', 
              fontSize: '0.8rem', 
              color: 'rgba(255, 255, 255, 0.5)' 
            }}>
              {Math.round(progressPercentage)}% Complete
            </div>
          </div>
        )}
      </header>

      {/* Task Form */}
      <TaskForm onCreate={handleCreate} />

      {/* Task List */}
      <TaskList tasks={tasks} onToggle={handleToggle} />
    </div>
  );
}

export default App;
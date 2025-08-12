import React from 'react';

export default function TaskList({ tasks, onToggle }) {
  if (!tasks.length) {
    return (
      <div className="empty-state">
        <div className="empty-state-content">
          <div className="sparkle-icon">✨</div>
          <h3 className="empty-state-title">No tasks yet</h3>
          <p className="empty-state-text">Create your first task above to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list-modern">
      {tasks.map((task, index) => (
        <div 
          key={task._id} 
          className={`task-item-modern ${task.completed ? 'completed' : ''}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="task-content-modern">
            <div className="task-main-content">
              <h3 className={`task-title-modern ${task.completed ? 'completed' : ''}`}>
                {task.title}
              </h3>
              {task.description && (
                <p className={`task-description-modern ${task.completed ? 'completed' : ''}`}>
                  {task.description}
                </p>
              )}
              <div className="task-meta">
                <span className="calendar-icon">📅</span>
                <span className="task-date">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => onToggle(task._id)}
              className={`task-toggle-modern ${task.completed ? 'completed' : 'incomplete'}`}
            >
              <span className="toggle-icon">
                {task.completed ? '↶' : '✓'}
              </span>
              <span className="toggle-text">
                {task.completed ? 'Undo' : 'Done'}
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
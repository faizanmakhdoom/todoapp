import React, { useState } from 'react';

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const submit = () => {
    if (!title.trim()) return alert('Enter title');
    onCreate({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    setIsExpanded(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      submit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="task-form-modern">
        <div className="task-form-content">
          <div className="task-input-container">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              onKeyDown={handleKeyPress}
              placeholder="What needs to be done?"
              className="task-input-main"
            />
            <div className="task-input-underline"></div>
          </div>
          
          <div className={`task-description-container ${isExpanded ? 'expanded' : ''}`}>
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add a description (optional)"
              className="task-input-description"
            />
          </div>
          
          <div className="task-form-footer">
            <div className="task-form-dots">
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
            </div>
            
            <button 
              type="button"
              onClick={submit}
              className="task-add-button"
            >
              <span className="plus-icon">+</span>
              <span>Add Task</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
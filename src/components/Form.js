import React, { useState } from 'react';

const Form = React.memo(({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit({ title, completed });
      setTitle('');
      setCompleted(false);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <label htmlFor="completed">
        Completed:
        <input
          type="checkbox"
          id="completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
});

export default Form;

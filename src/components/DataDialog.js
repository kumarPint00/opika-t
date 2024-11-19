import React, { useEffect, useRef } from 'react';

const DataDialog = React.memo(({ item, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (item) {
      dialogRef.current.focus();
    }
  }, [item]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!item) return null;

  return (
    <div
      className="dialog-overlay"
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
      ref={dialogRef}
      onKeyDown={handleKeyDown}
    >
      <div className="dialog">
        <h2>{item.title}</h2>
        <p>ID: {item.id}</p>
        <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
});

export default DataDialog;

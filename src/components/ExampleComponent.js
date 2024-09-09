
import React, { useContext } from 'react';
import { ToastContext } from './ToastManager';

const ExampleComponent = () => {
  const addToast = useContext(ToastContext);

  const triggerToast = () => {
    addToast('This is a success toast!', 'success', 5000, 'top-right');
  };

  return (
    <div>
      <button onClick={triggerToast}>Show Toast</button>
    </div>
  );
};

export default ExampleComponent;


import React, { useState, useCallback, useEffect } from 'react';
import Toast from './Toast';

let toastId = 0;
const DEFAULT_DELAY = 3000;

export const ToastContext = React.createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', delay = DEFAULT_DELAY, position = 'top-right') => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, message, type, delay, position }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, delay);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {toasts.map(({ id, message, type, position }) => (
        <Toast key={id} message={message} type={type} position={position} />
      ))}
    </ToastContext.Provider>
  );
};

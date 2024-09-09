
import React from 'react';
import { ToastProvider } from './components/ToastManager';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <ToastProvider>
      <ExampleComponent />
    </ToastProvider>
  );
}

export default App;

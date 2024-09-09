
import { render, screen } from '@testing-library/react';
import { ToastProvider } from './ToastManager';

test('renders toast messages', () => {
  render(
    <ToastProvider>
      <button onClick={() => addToast('Test toast', 'info')}>Trigger Toast</button>
    </ToastProvider>
  );
  expect(screen.getByText('Test toast')).toBeInTheDocument();
});

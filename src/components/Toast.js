
import React from 'react';
import styled from 'styled-components';

// Toast Container
const ToastContainer = styled.div`
  position: fixed;
  ${(props) => props.position}: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

// Individual Toast
const ToastMessage = styled.div`
  background-color: ${({ type }) =>
    type === 'success' ? '#4BB543' : type === 'error' ? '#FF0000' : '#FFA500'};
  color: white;
  padding: 16px;
  margin-top: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  min-width: 200px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Toast Icon (optional)
const Icon = styled.div`
  margin-right: 10px;
`;

const Toast = ({ message, type, position }) => (
  <ToastContainer position={position}>
    <ToastMessage type={type}>
      <Icon>{/* Add icon logic based on type */}</Icon>
      {message}
    </ToastMessage>
  </ToastContainer>
);

export default Toast;

import React from 'react';

const updateProgressStyle = {
  width: '11.5rem',
  height: '2.063rem',
  padding: '0.438rem 1.188rem 0.5rem 1.375rem',
  borderRadius: ' 3px',
  backgroundColor: '#0290ff',
  color: 'white',
  boxShadow:"none",
  border:"none",
  cursor:"pointer"
};
const UpdateProgress = () => (
  <button
    type="button"
    style={updateProgressStyle}
  >
    Update Progress
  </button>
);
export default UpdateProgress;

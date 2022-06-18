import React from 'react';

const updateProgressStyle = {
  width: '70%',
  height: '2.063rem',
  borderRadius: ' 3px',
  backgroundColor: '#0290ff',
  color: 'white',
  boxShadow: 'none',
  border: 'none',
  cursor: 'pointer',
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

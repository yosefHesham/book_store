import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (

    <div style={{
      width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <button onClick={handleClick} type="button">Check Status</button>
    </div>
  );
};

export default Categories;

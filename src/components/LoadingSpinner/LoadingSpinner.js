import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <div className='d-flex align-items-center justify-content-center w-100'>
      <Spinner animation='border' role='status' variant='success'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
      <h4 className='text-success ms-2'>Loading...</h4>
    </div>
  );
};

export default LoadingSpinner;

import React from 'react';

const ResponseMsg = ({ response }) => {
  return (
    <div className='col-8'>
      <h3
        className={`${
          response?.status === 'success' ? 'text-success' : 'text-danger'
        } mt-2`}
      >
        {response?.status === 'success' ? 'Thank You!' : response?.status}
      </h3>
      <h3
        className={`${
          response?.status === 'success' ? 'text-success' : 'text-danger'
        } mt-5`}
      >
        {response?.message}
      </h3>
    </div>
  );
};

export default ResponseMsg;

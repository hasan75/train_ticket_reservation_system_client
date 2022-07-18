import React from 'react';

const ResponseMsg = ({ response }) => {
  console.log(response);
  return (
    <div className='col-8'>
      <h3
        className={`${
          typeof response.status !== 'object' && response?.status === 'success'
            ? 'text-success'
            : 'text-danger'
        } mt-2`}
      >
        {typeof response.status !== 'object' ? (
          response?.status === 'success' ? (
            <span>Thank You!!</span>
          ) : (
            <>
              <span class='material-icons-sharp ms-1'>error_outline</span>{' '}
              <span>{response?.status}</span>
            </>
          )
        ) : (
          <span>{response?.status?.status}</span>
        )}
      </h3>
      <h3
        className={`${
          typeof response.status !== 'object' && response?.status === 'success'
            ? 'text-success'
            : 'text-danger'
        } mt-5`}
      >
        {' '}
        {typeof response.status !== 'object' &&
          response?.status === 'success' && (
            <span class='material-icons-sharp'>task_alt</span>
          )}
        {typeof response?.status === 'object' ? (
          <span>{response?.status?.message}</span>
        ) : (
          <span className='ms-2'>{response?.message}</span>
        )}
      </h3>
    </div>
  );
};

export default ResponseMsg;

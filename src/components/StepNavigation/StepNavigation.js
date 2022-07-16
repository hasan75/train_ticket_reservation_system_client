import React from 'react';
import navigationStyles from './StepNavigation.module.css';

const StepNavigation = () => {
  const error = true;
  return (
    <div className={navigationStyles.stepNavigators}>
      {/* for showing the validation errors  */}
      {error ? (
        <h5 className='d-flex align-items-center justify-content-center text-danger py-3'>
          <span class='material-icons-sharp me-2'>error</span>{' '}
          <span>Error is to show here!</span>
        </h5>
      ) : (
        ''
      )}
      {/* back and next navigator buttons  */}
      <div className='d-flex justify-content-between'>
        <button className='btn btn-outline-secondary px-5'>Back</button>
        <button className='btn btn-outline-secondary px-5' type='submit'>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepNavigation;

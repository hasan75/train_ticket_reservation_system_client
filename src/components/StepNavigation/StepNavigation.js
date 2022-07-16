import React from 'react';
import navigationStyles from './StepNavigation.module.css';

const StepNavigation = ({ step, setStep }) => {
  const error = true;

  // for next button funtionality
  const nextStepFrom = (step, setStep) => {
    setStep((currentStep) => currentStep + 1);
  };
  //for back button functionality
  const previousStepFrom = (step, setStep) => {
    setStep((currentStep) => currentStep - 1);
  };

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
      <div
        className={
          step === 1
            ? `d-flex justify-content-end`
            : `d-flex justify-content-between`
        }
      >
        {step > 1 && (
          <button
            onClick={() => previousStepFrom(step, setStep)}
            className='btn btn-outline-secondary px-5'
          >
            Back
          </button>
        )}

        {step < 7 && (
          <button
            onClick={() => nextStepFrom(step, setStep)}
            className='btn btn-outline-success px-5'
            type='submit'
          >
            {step === 6 ? 'Submit' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default StepNavigation;

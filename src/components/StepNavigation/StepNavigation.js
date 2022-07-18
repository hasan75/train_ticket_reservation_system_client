import React from 'react';
import navigationStyles from './StepNavigation.module.css';

const StepNavigation = ({ step, setStep, error, response }) => {
  // for next button funtionality

  // const nextStepFrom = (step, setStep) => {
  //   setStep((currentStep) => currentStep + 1);
  // };

  //for back button functionality
  const previousStepFrom = (step, setStep) => {
    console.log(step, 'on last page');
    if (step === 7) {
      setStep(1);
    } else {
      setStep((currentStep) => currentStep - 1);
    }
  };

  return (
    <div className={navigationStyles.stepNavigators}>
      {/* for showing the validation errors  */}
      {error ? (
        <h5 className='d-flex align-items-center justify-content-center text-danger py-3'>
          <span className='material-icons-sharp me-2'>error</span>{' '}
          <span>{error}</span>
        </h5>
      ) : (
        ''
      )}

      {/* back and next navigator buttons  */}

      <div
        className={`${response?.status === 'success' ? 'd-none' : ' '} ${
          step === 1
            ? 'd-flex justify-content-end'
            : 'd-flex justify-content-between'
        }`}
      >
        {step > 1 && (
          <button
            type='button'
            onClick={() => previousStepFrom(step, setStep)}
            className='btn btn-outline-success px-5'
          >
            Back
          </button>
        )}

        {step < 7 && (
          <button type='submit' className='btn btn-outline-success px-5'>
            {step === 6 ? 'Submit' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default StepNavigation;

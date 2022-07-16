import React from 'react';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import StepNavigation from '../../StepNavigation/StepNavigation';
import ResponseMsg from './ResponseMsg';

const FormResponse = () => {
  const { formData } = useFormDataContext();

  return (
    <div className='d-flex flex-column justify-content-between w-100'>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-8'>
          <ResponseMsg />
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-7'>
          <StepNavigation />
        </div>
      </div>
    </div>
  );
};

export default FormResponse;

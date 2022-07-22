import React from 'react';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import StepNavigation from '../../StepNavigation/StepNavigation';
import ResponseMsg from './ResponseMsg';

const FormResponse = ({ step, setStep }) => {
  const { loading, res, setLoading } = useFormDataContext();

  const { saveResToLocal } = utils;

  if (res.status === 'Error!!') {
    saveResToLocal(res);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }

  return (
    <div className='d-flex flex-column justify-content-between w-100'>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-8'>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <ResponseMsg response={res ? res : {}} />
          )}
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <StepNavigation
            step={step}
            setStep={setStep}
            response={res ? res : {}}
          />
        </div>
      </div>
    </div>
  );
};

export default FormResponse;

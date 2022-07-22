import React, { useEffect, useRef, useState } from 'react';
import FormContent from '../../components/FormContent/FormContent';
import { useFormDataContext } from '../../hooks/useFormDataContext';
import utils from '../../utils/utils';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const MultiForm = () => {
  // context api
  const {
    formData,
    setFormValues,
    step,
    setStep,
    res,
    setResFun,
    firstRender,
    setFirstRender,
  } = useFormDataContext();

  // const [step, setStep] = useState(1);

  // for step change
  const [stepChange, setStepChange] = useState(false);

  const changeStepChange = () => {
    setStepChange(true);
  };

  useEffect(() => {
    changeStepChange();
  }, [step]);

  // render for date and time
  const dateTimeRenderRef = useRef(true);
  console.log(firstRender, 'firstRenderFromFrom');

  useEffect(() => {
    if (dateTimeRenderRef.current) {
      dateTimeRenderRef.current = false;
      setFirstRender(false);
    }
  }, []);

  // utilities
  const { formContentStep, decrypt } = utils;

  const currentFormContent = formContentStep(step, setStep);

  // console.log(step);
  // console.log(res);

  // from localStorage, save data
  useEffect(() => {
    if (localStorage.getItem('formData')) {
      // console.log(localStorage.getItem('formData'));

      const dataFromLocalStorage = JSON.parse(
        decrypt(localStorage.getItem('formData'))
      );

      if (dataFromLocalStorage) {
        // console.log(dataFromLocalStorage, 'decrypted');
        setFormValues(dataFromLocalStorage);
      }
    }

    //save step to  local storage
    if (localStorage.getItem('step')) {
      const stepFromLocal = JSON.parse(decrypt(localStorage.getItem('step')));

      if (stepFromLocal) {
        setStep(stepFromLocal);
      }
    }

    //save res to  local storage
    if (localStorage.getItem('res')) {
      const resFromLocal = JSON.parse(decrypt(localStorage.getItem('res')));

      if (resFromLocal) {
        setResFun(resFromLocal);
      }
    }
  }, []);

  // fow showing spinner while stepChange is true for 800ms
  setTimeout(() => {
    setStepChange(false);
  }, 800);

  return (
    <div className=''>
      <FormContent>
        {stepChange ? <LoadingSpinner /> : currentFormContent}
      </FormContent>
    </div>
  );
};

export default MultiForm;

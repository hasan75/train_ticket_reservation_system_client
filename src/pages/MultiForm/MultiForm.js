import React, { useEffect, useRef, useState } from 'react';
import FormContent from '../../components/FormContent/FormContent';
import { useFormDataContext } from '../../hooks/useFormDataContext';
import utils from '../../utils/utils';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const MultiForm = () => {
  // context api
  const { formData, setFormValues } = useFormDataContext();

  const [step, setStep] = useState(1);

  // for step change
  const [stepChange, setStepChange] = useState(false);

  const changeStepChange = () => {
    setStepChange(true);
  };

  // render on every step change

  //this useRef for preventing multi render
  //const renderOnStep = useRef(true);

  useEffect(() => {
    // if (renderOnStep.current) {
    //   renderOnStep.current = false;
    //   changeStepChange();
    // }
    changeStepChange();
  }, [step]);

  // utilities
  const { formContentStep } = utils;

  const currentFormContent = formContentStep(step, setStep);

  // from localStorage, save data
  useEffect(() => {
    if (localStorage.getItem('formData')) {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem('formData'));
      if (dataFromLocalStorage) {
        setFormValues(dataFromLocalStorage);
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

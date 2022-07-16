import React, { useEffect, useState } from 'react';
import FormContent from '../../components/FormContent/FormContent';
import { useFormDataContext } from '../../hooks/useFormDataContext';
import utils from '../../utils/utils';

const MultiForm = () => {
  // context api
  const { formData, setFormValues } = useFormDataContext();

  const [step, setStep] = useState(1);

  // for step change
  const [stepChange, setStepChange] = useState(false);

  const changeStepChange = () => {
    setStepChange(true);
  };

  useEffect(() => {
    changeStepChange();
  }, [step]);
  console.log(step);

  const { formContentStep } = utils;

  const currentFormContent = formContentStep(step, setStep);

  return (
    <div className=''>
      <FormContent>{currentFormContent}</FormContent>
    </div>
  );
};

export default MultiForm;

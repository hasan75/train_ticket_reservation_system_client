import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const TicketFareAmount = ({ step, setStep }) => {
  const { saveDataToLocal, saveStepToLocal } = utils;

  const { formData, setFormValues } = useFormDataContext();

  //fucntion for  random number generator of 8 digits with 2 digit of decimal values
  const randomNumber = () => {
    let fareAmount = Math.floor(Math.random() * 10000000000 + 100) / 100;
    // console.log(fareAmount.toString().split('.')[1]);

    if (fareAmount.toString().split('.')[1].length === 1) {
      fareAmount = fareAmount + '1';
    }
    // console.log(fareAmount, 'TicketPrice');
    return parseFloat(fareAmount);
  };

  // function for comma separation after thousands
  const fareAmountWithComma = (fareAmount) => {
    return fareAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  if (!formData.TicketFare) {
    let newFormData = formData;
    newFormData.TicketFare = randomNumber();
    setFormValues(newFormData);
  }

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: 'all',
    defaultValues: { TicketFare: formData.TicketFare },
  });

  const onSubmit = (values) => {
    setFormValues(values);

    //to local storage
    saveDataToLocal({ ...formData, ...values });

    setStep((currentStep) => currentStep + 1);
    saveStepToLocal((step = step + 1));
  };

  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-8'>
          <label className='mb-2 fw-bold' htmlFor='TicketFare'>
            Amount (BDT)
          </label>
          <div className='col-12 border border-1 d-flex align-items-center justify-content-between rounded-2 p-2'>
            <span>৳</span>
            <span>{fareAmountWithComma(formData.TicketFare)}</span>
            <input
              className='d-none'
              name='TicketFare'
              value={formData.TicketFare}
              {...register('TicketFare')}
            />
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <StepNavigation step={step} setStep={setStep}></StepNavigation>
        </div>
      </div>
    </form>
  );
};

export default TicketFareAmount;

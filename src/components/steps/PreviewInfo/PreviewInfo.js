import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import StepNavigation from '../../StepNavigation/StepNavigation';

const PreviewInfo = ({ step, setStep }) => {
  const { formData, setFormValues } = useFormDataContext();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const onSubmit = (values) => {
    setFormValues(values);

    setStep((currentStep) => currentStep + 1);
  };

  // function for comma separation after thousands
  const fareAmountWithComma = (fareAmount) => {
    return fareAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const fareJPY = Math.floor(parseInt(formData?.TicketFare) * 1.47);

  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-6'>
          <h5>Name: {formData?.Name}</h5>
          <h5>Gender: {formData?.Gender}</h5>
          <h5>From: {formData?.From}</h5>
          <h5>To: {formData?.To}</h5>
          <h5>Date: {formData?.Date}</h5>
          <h5>Time: {formData?.Time}</h5>
          <h5>
            Amount: <span>(JPY) ¥</span> {fareAmountWithComma(fareJPY)}
          </h5>
          <div className='col-12 mt-3'>
            <label className='h5 mb-2'>Note:</label>
            <textarea
              className='form-control position-relative'
              rows='10'
              value={formData?.Note}
            ></textarea>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-7 mt-4'>
          <StepNavigation step={step} setStep={setStep}></StepNavigation>
        </div>
      </div>
    </form>
  );
};

export default PreviewInfo;

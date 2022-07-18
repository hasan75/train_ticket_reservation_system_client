import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const PersonalInfo = ({ step, setStep }) => {
  //
  const { formData, setFormValues } = useFormDataContext();
  console.log(formData);

  const { saveDataToLocal } = utils;

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: 'all',
    defaultValues: { Name: formData?.Name, Gender: formData?.Gender },
  });

  const onSubmit = (values) => {
    setFormValues(values);

    // save values to localStorage
    saveDataToLocal({ ...formData, ...values });

    setStep((currentStep) => currentStep + 1);
  };

  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='row d-flex justify-content-center mt-5'>
        {/* for taking name input  */}
        <div className='col-8 form-group'>
          <label htmlFor='Name' className='fw-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            name='Name'
            {...register('Name', { required: 'Name is required' })}
          />
        </div>
        {/* for gender input  */}
        <div className='col-8 form-group mt-4'>
          <label htmlFor='Gender' className='mb-2 fw-bold'>
            Gender
          </label>
          <div className='form-check ms-5'>
            {formData?.Gender === 'Male' ? (
              <input
                className='form-check-input'
                type='radio'
                checked
                name='Gender'
                value='Male'
                {...register('Gender')}
              />
            ) : (
              <input
                className='form-check-input'
                type='radio'
                name='Gender'
                value='Male'
                {...register('Gender')}
              />
            )}
            <label className='form-check-label'>Male</label>
          </div>
          <div className='form-check ms-5'>
            {formData?.Gender === 'Female' ? (
              <input
                className='form-check-input'
                type='radio'
                checked
                name='Gender'
                value='Female'
                {...register('Gender')}
              />
            ) : (
              <input
                className='form-check-input'
                type='radio'
                name='Gender'
                value='Female'
                {...register('Gender')}
              />
            )}
            <label className='form-check-label'>Female</label>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <StepNavigation
            step={step}
            setStep={setStep}
            error={errors.Name ? 'Name field is required' : false}
          ></StepNavigation>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;

import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const StationsInfo = ({ step, setStep }) => {
  const { formData, setFormValues } = useFormDataContext();

  const { saveDataToLocal } = utils;

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: {
      From: formData?.From,
      To: formData?.To,
    },
  });

  const onSubmit = (values) => {
    setFormValues(values);

    //to local storage
    saveDataToLocal({ ...formData, ...values });

    setStep((currentStep) => currentStep + 1);
  };

  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='row d-flex justify-content-center mt-5'>
        {/* from which station  */}
        <div className='col-8 form-group'>
          <label htmlFor='Name' className='fw-bold mb-2'>
            From
          </label>
          <select
            name='From'
            className='form-select'
            {...register('From', { required: true })}
          >
            <option hidden></option>
            {formData.From === '東京' ? (
              <option selected value='東京'>
                東京
              </option>
            ) : (
              <option value='東京'>東京</option>
            )}
            {formData?.From === '横浜' ? (
              <option selected value='横浜'>
                横浜
              </option>
            ) : (
              <option value='横浜'>横浜</option>
            )}
            {formData?.From === '名古屋' ? (
              <option selected value='名古屋'>
                名古屋
              </option>
            ) : (
              <option value='名古屋'>名古屋</option>
            )}
            {formData?.From === '大阪' ? (
              <option selected value='大阪'>
                大阪
              </option>
            ) : (
              <option value='大阪'>大阪</option>
            )}
          </select>
        </div>
        {/* to which station */}
        <div className='col-8 form-group mt-4'>
          <label htmlFor='To' className='mb-2 fw-bold'>
            To
          </label>
          <select
            name='To'
            className='form-select'
            {...register('To', { required: true })}
          >
            <option hidden></option>
            {formData?.To === '東京' ? (
              <option selected value='東京'>
                東京
              </option>
            ) : (
              <option value='東京'>東京</option>
            )}
            {formData?.To === '横浜' ? (
              <option selected value='横浜'>
                横浜
              </option>
            ) : (
              <option value='横浜'>横浜</option>
            )}
            {formData?.To === '名古屋' ? (
              <option selected value='名古屋'>
                名古屋
              </option>
            ) : (
              <option value='名古屋'>名古屋</option>
            )}
            {formData?.To === '大阪' ? (
              <option selected value='大阪'>
                大阪
              </option>
            ) : (
              <option value='大阪'>大阪</option>
            )}
          </select>
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

export default StationsInfo;

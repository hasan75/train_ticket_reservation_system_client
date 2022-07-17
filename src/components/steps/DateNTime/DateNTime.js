// react-date-picker package is used to take date and time in required format.

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import './DateNTime.css';
// date picker imports
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import StepNavigation from '../../StepNavigation/StepNavigation';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';

const DateNTime = ({ step, setStep }) => {
  const { formData, setFormValues } = useFormDataContext();

  const { saveDataToLocal } = utils;

  //for default values
  const currentDate = new Date();
  const currentTime = new Date();

  // for default values
  // const [currentDate, setCurrentDate] = useState(new Date());
  // const [currentTime, setCurrentTime] = useState(new Date());

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: { Date: currentDate, Time: currentTime },
  });

  // const dateInput = new Date(currentDate).toLocaleDateString('en-CA');

  const onSubmit = (values) => {
    values.Date = new Date(values.Date).toLocaleDateString('en-CA');

    values.Time = values.Time.toLocaleTimeString([], {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
    });

    setFormValues(values);

    //to local storage
    saveDataToLocal(formData);

    setStep((currentStep) => currentStep + 1);
  };

  const [initailRendering, setInitialRendering] = useState(true);

  useEffect(() => {
    setInitialRendering(false);
  }, []);

  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='row d-flex justify-content-center mt-5'>
        {/* Date input in YYYY-mm-dd format  */}
        <div className='col-8 form-group'>
          <label htmlFor='Date' className='fw-bold mb-2'>
            Date
          </label>
          <Controller
            control={control}
            name='Date'
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                className='col-12 form-control'
                dateFormat='yyyy/MM/dd'
                onChange={(date) => field.onChange(date)}
                selected={initailRendering ? currentDate : field.value}
              />
            )}
          />
        </div>
        {/* time input in 24 hours HH:mm format */}
        <div className='col-8 form-group mt-4'>
          <label htmlFor='Time' className='mb-2 fw-bold'>
            Time
          </label>
          <Controller
            control={control}
            name='Time'
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                className='form-control'
                selected={initailRendering ? currentTime : field.value}
                onChange={(time) => field.onChange(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={1}
                timeCaption='Time'
                dateFormat='HH:mm'
                timeFormat='HH:mm'
              />
            )}
          />
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <StepNavigation
            step={step}
            setStep={setStep}
            error={
              errors.Date
                ? 'Date is required!'
                : errors.Time
                ? 'Time is required!'
                : watch('Date') === '' || watch('Time') === ''
                ? 'Date and Time both are Required!'
                : false
            }
          ></StepNavigation>
        </div>
      </div>
    </form>
  );
};

export default DateNTime;

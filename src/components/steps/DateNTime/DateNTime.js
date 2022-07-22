// react-date-picker package is used to take date and time in required format.

import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import './DateNTime.css';
// date picker imports
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import StepNavigation from '../../StepNavigation/StepNavigation';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';

const DateNTime = ({ step, setStep }) => {
  const { formData, setFormValues, firstRender } = useFormDataContext();

  const { saveDataToLocal, saveStepToLocal } = utils;

  //for default values
  const currentDate = new Date();
  const currentTime = new Date();

  //date and time from the LocalStorage

  // console.log(formData.Date);
  // console.log(formData.TimeToShow, 'TImeFromLocalStorage');

  const dateFromLocal = new Date(Date.parse(formData.Date));
  const timeFromLocal = new Date(Date.parse(formData.TimeToShow));
  // console.log(dateFromLocal);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: {
      Date: formData.Date ? dateFromLocal : currentDate,
      Time: formData.Time ? timeFromLocal : currentTime,
    },
  });

  // const dateInput = new Date(currentDate).toLocaleDateString('en-CA');

  const onSubmit = (values) => {
    values.Date = new Date(values.Date).toLocaleDateString('en-CA');
    values.TimeToShow = values.Time;

    values.Time = values.Time.toLocaleTimeString([], {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
    });

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
                selected={firstRender ? currentDate : field.value}
                // selected={formData.Date ? field.value : currentDate}
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
                selected={firstRender ? currentTime : field.value}
                // selected={formData.TimeToShow ? field.value : currentTime}
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

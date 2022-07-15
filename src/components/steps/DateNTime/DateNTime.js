// react-date-picker package is used to take date and time in required format.

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './DateNTime.css';
// date picker imports
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateNTime = () => {
  // for default values
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  const { handleSubmit, register, watch } = useForm({
    mode: 'all',
    defaultValues: {},
  });

  const dateInput = new Date(currentDate).toLocaleDateString('en-CA');

  const onSubmit = (values) => {
    values.date = dateInput;
    values.time = currentTime.toLocaleTimeString([], {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row d-flex justify-content-center mt-5'>
        {/* Date input in YYYY-mm-dd format  */}
        <div className='col-8 form-group'>
          <label htmlFor='Date' className='fw-bold mb-2'>
            Date
          </label>
          <DatePicker
            className='col-12'
            dateFormat='yyyy/MM/dd'
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
          />
        </div>
        {/* time input in 24 hours HH:mm format */}
        <div className='col-8 form-group mt-4'>
          <label htmlFor='Time' className='mb-2 fw-bold'>
            Time
          </label>
          <DatePicker
            className='col-12'
            selected={currentTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption='Time'
            dateFormat='HH:mm'
            timeFormat='HH:mm'
            onChange={(time) => setCurrentTime(time)}
          />
        </div>
      </div>
      <button type='submit' className='btn btn-outline-primary'>
        Submit
      </button>
    </form>
  );
};

export default DateNTime;

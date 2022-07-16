import React from 'react';
import { useForm } from 'react-hook-form';
import StepNavigation from '../../StepNavigation/StepNavigation';

const TicketFareAmount = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: {},
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  //fucntion for  random number generator of 8 digits with 2 digit of decimal values
  const randomNumber = () => {
    let fareAmount = Math.floor(Math.random() * 10000000000 + 100) / 100;
    // console.log(fareAmount.toString().split('.')[1]);
    if (fareAmount.toString().split('.')[1].length === 1) {
      fareAmount = fareAmount + '1';
    }
    return fareAmount;
    // console.log(fareAmount);
  };

  const fareAmount = randomNumber();

  // function for comma separation after thousands
  const fareAmountWithComma = (fareAmount) => {
    return fareAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // ticket fare with comma separation in a variable
  const farewithComma = fareAmountWithComma(fareAmount);

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
            <span>{fareAmountWithComma(fareAmount)}</span>
            <input
              className='d-none'
              name='TicketFare'
              value={farewithComma}
              {...register('TicketFare')}
            />
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <StepNavigation></StepNavigation>
        </div>
      </div>
    </form>
  );
};

export default TicketFareAmount;

import React from 'react';
import { useForm } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <label className='mb-2 fw-bold' htmlFor='TicketFare'>
            Amount (BDT)
          </label>
          <div className='col-12 border border-1 d-flex align-items-center justify-content-between rounded-2 px-2 py-2'>
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
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default TicketFareAmount;

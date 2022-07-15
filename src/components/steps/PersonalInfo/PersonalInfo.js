import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all', defaultValues: {} });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className='form-check ms-3'>
            <input
              className='form-check-input'
              type='radio'
              name='Gender'
              value='Male'
              {...register('Gender')}
            />
            <label className='form-check-label'>Male</label>
          </div>
          <div className='form-check ms-3'>
            <input
              className='form-check-input'
              type='radio'
              name='Gender'
              value='Female'
              {...register('Gender')}
            />
            <label className='form-check-label'>Female</label>
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-outline-success ms-5 mt-3'>
        Submit
      </button>
    </form>
  );
};

export default PersonalInfo;

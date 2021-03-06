import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const PreviewInfo = ({ step, setStep }) => {
  //res ,setRes, loading, setLoading fixed to the context
  const { formData, setFormValues, setLoading, res, setResFun } =
    useFormDataContext();

  const { saveStepToLocal } = utils;

  // function for comma separation after thousands
  const fareAmountWithComma = (fareAmount) => {
    return fareAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  //covert taka to JPY
  const fareJPY = Math.floor(parseInt(formData?.TicketFare) * 1.47);
  console.log(fareJPY, 'fairJPY');

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    // console.log(formData, 'formPreview');

    setFormValues(values);

    const previewFormData = formData;
    previewFormData.TicketFare = fareJPY;
    console.log(previewFormData, 'formData in preview page');

    // fetch is called here
    fetch('https://whispering-falls-17144.herokuapp.com/formSubmit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(previewFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, 'res from backend');
        if (data.status === 'success') {
          // console.log(data.status);
          localStorage.removeItem('formData');
          localStorage.removeItem('step');
          localStorage.removeItem('res');
          setResFun(data);
          setLoading(false);
        } else {
          setResFun(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    setStep((currentStep) => currentStep + 1);
    saveStepToLocal((step = step + 1));
  };

  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-6'>
          <h5>Name: {formData?.Name}</h5>
          <h5>Gender: {formData?.Gender}</h5>
          <h5>
            From:{' '}
            {/* {formData?.From === '??????'
              ? 'Tokyo'
              : formData?.From === '??????'
              ? 'Yokohama'
              : formData?.From === '?????????'
              ? 'Nagoya'
              : 'Osaka'} */}
            {formData?.From}
          </h5>
          <h5>
            To:{' '}
            {/* {formData?.To === '??????'
              ? 'Tokyo'
              : formData?.To === '??????'
              ? 'Yokohama'
              : formData?.To === '?????????'
              ? 'Nagoya'
              : 'Osaka'} */}
            {formData?.To}
          </h5>
          <h5>Date: {formData?.Date}</h5>
          <h5>Time: {formData?.Time}</h5>
          <h5>
            Amount: <span>(JPY) ??</span> {fareAmountWithComma(fareJPY)}
          </h5>
          <div className='col-12 mt-3'>
            <label className='h5 mb-2'>Note:</label>
            <textarea
              className='form-control position-relative'
              rows='10'
              defaultValue={formData?.Note}
              disabled
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

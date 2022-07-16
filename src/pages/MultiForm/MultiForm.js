import React, { useState } from 'react';
import FormContent from '../../components/FormContent/FormContent';
import { useFormDataContext } from '../../hooks/useFormDataContext';

const MultiForm = () => {
  // context api
  const { formData, setFormValues } = useFormDataContext();

  return (
    <div className=''>
      <FormContent />
    </div>
  );
};

export default MultiForm;

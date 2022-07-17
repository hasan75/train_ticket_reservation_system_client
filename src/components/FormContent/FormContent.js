import React from 'react';
import formContentStyles from './FormContent.module.css';

const FormContent = ({ children }) => {
  return (
    <div
      className={`${formContentStyles.formContainer} d-flex align-items-center justify-content-center`}
    >
      <div className={formContentStyles.formContents}>
        <div className={`${formContentStyles.formInputs} form-inputs d-flex`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContent;

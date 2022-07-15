import React from 'react';
import formContentStyles from './FormContent.module.css';
const FormContent = () => {
  return (
    <div
      className={`${formContentStyles.formContainer} d-flex align-items-center justify-content-center`}
    >
      <div className={formContentStyles.formContents}>
        <div className={`${formContentStyles.formInputs} form-inputs`}>
          <h2>This is one input</h2>
        </div>
      </div>
    </div>
  );
};

export default FormContent;

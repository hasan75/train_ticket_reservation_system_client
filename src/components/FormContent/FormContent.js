import React from 'react';
import PersonalInfo from '../steps/PersonalInfo/PersonalInfo';
import formContentStyles from './FormContent.module.css';
const FormContent = () => {
  return (
    <div
      className={`${formContentStyles.formContainer} d-flex align-items-center justify-content-center`}
    >
      <div className={formContentStyles.formContents}>
        <div className={`${formContentStyles.formInputs} form-inputs`}>
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default FormContent;
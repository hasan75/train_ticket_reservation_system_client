import React from 'react';
import DateNTime from '../steps/DateNTime/DateNTime';
import PersonalInfo from '../steps/PersonalInfo/PersonalInfo';
import StationsInfo from '../steps/StationsInfo/StationsInfo';
import formContentStyles from './FormContent.module.css';
const FormContent = () => {
  return (
    <div
      className={`${formContentStyles.formContainer} d-flex align-items-center justify-content-center`}
    >
      <div className={formContentStyles.formContents}>
        <div className={`${formContentStyles.formInputs} form-inputs`}>
          <PersonalInfo />
          <StationsInfo></StationsInfo>
          <DateNTime></DateNTime>
        </div>
      </div>
    </div>
  );
};

export default FormContent;

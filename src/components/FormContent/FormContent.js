import React from 'react';
import DateNTime from '../steps/DateNTime/DateNTime';
import Note from '../steps/Note/Note';
import PersonalInfo from '../steps/PersonalInfo/PersonalInfo';
import PreviewInfo from '../steps/PreviewInfo/PreviewInfo';
import StationsInfo from '../steps/StationsInfo/StationsInfo';
import TicketFareAmount from '../steps/TicketFareAmount/TicketFareAmount';
import formContentStyles from './FormContent.module.css';
import FormResponse from '../steps/FormResponse/FormResponse';
import { useFormDataContext } from '../../hooks/useFormDataContext';

const FormContent = ({ children }) => {
  return (
    <div
      className={`${formContentStyles.formContainer} d-flex align-items-center justify-content-center`}
    >
      <div className={formContentStyles.formContents}>
        <div className={`${formContentStyles.formInputs} form-inputs d-flex`}>
          {/* <TicketFareAmount /> */}
          {/* <StationsInfo /> */}
          {/* <DateNTime /> */}
          {/* <Note />  */}
          {/* <PersonalInfo /> */}
          {/* <PreviewInfo /> */}
          {/* <FormResponse /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContent;

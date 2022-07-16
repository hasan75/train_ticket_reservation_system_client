import DateNTime from '../components/steps/DateNTime/DateNTime';
import FormResponse from '../components/steps/FormResponse/FormResponse';
import Note from '../components/steps/Note/Note';
import PersonalInfo from '../components/steps/PersonalInfo/PersonalInfo';
import PreviewInfo from '../components/steps/PreviewInfo/PreviewInfo';
import StationsInfo from '../components/steps/StationsInfo/StationsInfo';
import TicketFareAmount from '../components/steps/TicketFareAmount/TicketFareAmount';

//incryption & discryption
import CryptoJS from 'crypto-js';

const utils = {};

//content of the form as step
utils.formContentStep = (step, setStep) => {
  let currentStep;

  switch (step) {
    case 1:
      currentStep = <PersonalInfo step={step} setStep={setStep} />;
      break;
    case 2:
      currentStep = <StationsInfo step={step} setStep={setStep} />;
      break;
    case 3:
      currentStep = <DateNTime step={step} setStep={setStep} />;
      break;
    case 4:
      currentStep = <TicketFareAmount step={step} setStep={setStep} />;
      break;
    case 5:
      currentStep = <Note step={step} setStep={setStep} />;
      break;
    case 6:
      currentStep = <PreviewInfo step={step} setStep={setStep} />;
      break;
    case 7:
      currentStep = <FormResponse step={step} setStep={setStep} />;
      break;
    default:
      break;
  }

  return currentStep;
};

//encryption function
utils.encrypt = (string) => {
  return CryptoJS.AES.encrypt(string, 'secret key 123').toString();
};

// decrypt string
utils.decrypt = (string) => {
  const decryptedMsg = CryptoJS.AES.decrypt(string, 'secret key 123');

  return decryptedMsg.toString(CryptoJS.enc.Utf8);
};

// local storage fuctions for get and set data

utils.saveDataToLocal = (formData) => {
  localStorage.setItem('formData', utils.encrypt(JSON.stringify(formData)));
  console.log(formData);
};

utils.getData = () => {
  const formData = JSON.parse(utils.decrypt(localStorage.getItem('formData')));
  console.log(formData);
  return typeof formData === 'object' ? formData : null;
};

export default utils;

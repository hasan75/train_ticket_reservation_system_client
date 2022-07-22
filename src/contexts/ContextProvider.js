import { useState, createContext, useContext } from 'react';

export const FormContext = createContext();

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  console.log('from Context Provider', formData);

  const [step, setStep] = useState(1);

  const setFormValues = (values) => {
    setFormData((previousValues) => ({
      ...previousValues,
      ...values,
    }));
  };

  //for the res and loading component
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState({});
  // console.log(res, loading);

  const setResFun = (data) => {
    setRes(data);
  };

  // first render for Date and Time Show
  const [firstRender, setFirstRender] = useState(true);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormValues,
        setLoading,
        setResFun,
        loading,
        res,
        step,
        setStep,
        firstRender,
        setFirstRender,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default ContextProvider;

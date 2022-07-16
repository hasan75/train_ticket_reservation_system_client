import { useState, createContext, useContext } from 'react';

export const FormContext = createContext();

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  console.log(formData);

  const setFormValues = (values) => {
    setFormData((previousValues) => ({
      ...previousValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default ContextProvider;

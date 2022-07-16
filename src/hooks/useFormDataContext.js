import { useContext } from 'react';
import { FormContext } from '../contexts/ContextProvider';

export const useFormDataContext = () => useContext(FormContext);

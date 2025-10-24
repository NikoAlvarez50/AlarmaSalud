import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = (initialForm = {} as any) => {
  const [formState, setFormState] = useState(initialForm);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInputChange = ({ target }: any) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,       
    onInputChange,   
    onResetForm,     
  };
};

import { InputHTMLAttributes } from 'react';
import FormField from '../FormField';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string | null;
  required?: boolean;
}

function Input({
  id,
  label,
  error,
  required = false,
  ...rest
}: Readonly<InputProps>) {
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <input
        id={id}
        className={`font-notoSans flex items-center self-stretch px-[10px] py-3.5 outline-none rounded-lg border border-solid ${
          error
            ? 'border-vermellion focus:border-vermellion'
            : 'border-mistGray'
        } shadow-xs focus:border-primary placeholder-steelGray w-full`}
        {...rest}
      />
    </FormField>
  );
}

export default Input;

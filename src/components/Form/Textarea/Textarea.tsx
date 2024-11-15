import { TextareaHTMLAttributes } from 'react';
import FormField from '../FormField';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string | null;
  required?: boolean;
}

function Textarea({
  id,
  label,
  error,
  required,
  ...rest
}: Readonly<TextareaProps>) {
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <textarea
        id={id}
        className={`font-notoSans flex items-center self-stretch h-[110px] px-3 py-3.5 outline-none rounded-lg border border-solid ${
          error
            ? 'border-vermellion focus:border-vermellion'
            : 'border-mistGray'
        } shadow-xs focus:border-primary placeholder-steelGray w-full`}
        {...rest}
      />
    </FormField>
  );
}

export default Textarea;

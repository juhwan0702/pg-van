import { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string | null;
  required?: boolean;
  children: ReactNode;
}

function FormField({
  id,
  label,
  error,
  required = false,
  children,
}: Readonly<FormFieldProps>) {
  return (
    <div className="flex flex-col items-start gap-1.5 w-full">
      <label
        htmlFor={id}
        className="font-notoSans text-[14px] font-medium leading-[20px] text-blueGray"
      >
        {label} {required && <span className="text-vermellion">*</span>}
      </label>
      {children}
      {error && (
        <span className="font-notoSans text-[14px] font-medium leading-[20px] text-vermellion">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormField;

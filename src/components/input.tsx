import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";

type InputProps<T, U = undefined> = {
  name: string;
  label: string;
  register?: UseFormRegister<any>;
  error?: string;
} & T &
  (U extends undefined ? {} : U);

interface OptionProps {
  options: string[];
}

function Input(props: InputProps<InputHTMLAttributes<HTMLInputElement>>) {
  const { label, id, error, register, name, type } = props;

  return (
    <div className="flex flex-col mb-4">
      <label
        className="text-black dark:text-white tracking-wider mb-3"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={clsx(
          "border rounded-lg bg-slate-200 dark:bg-neutral-600 border-red-500 text-black dark:text-white p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        type={type}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function TextArea(props: InputProps<InputHTMLAttributes<HTMLTextAreaElement>>) {
  const { label, id, error, register, name } = props;

  return (
    <div className="flex flex-col mb-4">
      <label
        className="text-black dark:text-white tracking-wider mb-3"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className={clsx(
          "border rounded-lg bg-slate-200 dark:bg-neutral-600 border-red-500 text-black dark:text-white p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function Select(
  props: InputProps<InputHTMLAttributes<HTMLSelectElement>, OptionProps>
) {
  const { label, placeholder, id, error, options, register, name } = props;

  return (
    <div className="flex flex-col mb-4">
      <label
        className="text-black dark:text-white tracking-wider mb-3"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className={clsx(
          "border rounded-lg bg-slate-200 dark:bg-neutral-600 border-red-500 text-black dark:text-white p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        defaultValue=""
        {...(register ? register(name) : {})}
        {...props}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function RadioGroup(
  props: InputProps<InputHTMLAttributes<HTMLInputElement>, OptionProps>
) {
  const { label, error, options, register, name } = props;

  return (
    <div className="flex flex-col mb-4" aria-label={props["aria-label"]}>
      <label className="text-black dark:text-white tracking-wider mb-3">
        {label}
      </label>
      {options.map((option) => (
        <label
          className="text-black dark:text-white tracking-wider"
          htmlFor={option}
          key={option}
        >
          <input
            className="mr-4"
            type="radio"
            value={option}
            id={option}
            {...(register ? register(name) : {})}
          />
          {option}
        </label>
      ))}
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export { Input, TextArea, Select, RadioGroup };

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button(props: Props) {
  const { label } = props;
  return (
    <button
      className="p-3 bg-neutral-500 rounded-xl px-6 text-white font-bold"
      {...props}
    >
      {label}
    </button>
  );
}

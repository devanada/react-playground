import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button(props: Props) {
  const { label } = props;
  return (
    <button className="btn btn-neutral btn-wide" {...props}>
      {label}
    </button>
  );
}

import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white overflow-auto">
      <Navbar />
      <div className="w-full grow py-4 px-8">{children}</div>
    </div>
  );
}

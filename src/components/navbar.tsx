import { useTheme } from "@/utils/contexts/theme";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();

  return (
    <header className="w-full sticky top-0 bg-white dark:bg-neutral-800">
      <nav className="mx-auto flex container items-center justify-between p-6 lg:px-8 [&>*]:text-sm [&>*]:font-semibold [&>*]:leading-6 [&>*]:text-gray-900 [&>*]:dark:text-white">
        <Link to="/">Home</Link>
        <div className="flex gap-4 items-center justify-end">
          <Link to="/products">Products</Link>
          <Link to="/posts">Posts</Link>
          {theme === "light" ? (
            <FaMoon size={25} onClick={() => changeTheme()} />
          ) : (
            <FaSun size={25} onClick={() => changeTheme()} />
          )}
        </div>
      </nav>
    </header>
  );
}

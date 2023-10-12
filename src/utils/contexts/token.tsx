import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useContext,
  useCallback,
} from "react";

interface Context {
  token: string;
  changeToken: (data?: string) => void;
}

interface Props {
  children: ReactNode;
}

const contextValue = {
  token: "",
  changeToken: () => {},
};

const ThemeContext = createContext<Context>(contextValue);

function TokenProvider({ children }: Props) {
  const initialValue = localStorage.getItem("user") ?? "";
  const [token, setToken] = useState(initialValue);

  const changeToken = useCallback(
    (data?: string) => {
      const newData = data ?? "";
      if (data) {
        localStorage.setItem("user", newData);
      } else {
        localStorage.removeItem("user");
      }
      setToken(newData);
    },
    [token]
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token, changeToken]
  );

  return (
    <ThemeContext.Provider value={tokenContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function useToken() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.log("ERROR, useToken must be used within TokenContext");
  }

  return context;
}

export { TokenProvider, useToken };

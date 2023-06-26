import { Dispatch, ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "src/hooks/useLocalStorage";

interface WaiterProviderProps {
  children: ReactNode;
}
interface WaiterContextType {
  waiter: Waiter;
  setWaiter: (waiter: Waiter) => void;
}

type StoragedWaiter = [Waiter, Dispatch<Waiter>];

const WaiterContext = createContext<WaiterContextType | null>(null);

export const useWaiter = () => {
  const context = useContext(WaiterContext);
  if (!context) throw new Error("useWaiter must used within a provider");
  return context;
};

export const WaiterProvider = ({ children }: WaiterProviderProps) => {
  const [waiter, setWaiter]: StoragedWaiter = useLocalStorage(
    "waiter",
    {}
  ) as StoragedWaiter;
  return (
    <WaiterContext.Provider value={{ waiter, setWaiter }}>
      {children}
    </WaiterContext.Provider>
  );
};

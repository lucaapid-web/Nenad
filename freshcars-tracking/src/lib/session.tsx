import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface Session {
  orderId: string | null;
  signIn: (orderId: string) => void;
  signOut: () => void;
}

const SessionContext = createContext<Session | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [orderId, setOrderId] = useState<string | null>(null);
  const value = useMemo(
    () => ({ orderId, signIn: setOrderId, signOut: () => setOrderId(null) }),
    [orderId],
  );
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession must be used within SessionProvider');
  return ctx;
}

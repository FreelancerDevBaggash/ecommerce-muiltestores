// hooks/useCustomerSession.js
import { useState, useEffect } from "react";

export default function useCustomerSession() {
  const [session, setSession] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/customerAuth/session")
      .then((res) => {
        if (!res.ok) throw new Error("no session");
        return res.json();
      })
      .then(({ session }) => setSession(session))
      .catch(() => setSession(null))
      .finally(() => setLoading(false));
  }, []);

  return { session, loading };
}

"use client";

import * as React from "react";

type AuthState = {
  isAuthenticated: boolean;
  user?: { name: string };
};

type AuthContextValue = {
  state: AuthState;
  login: (provider: "google" | "linkedin") => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AuthState>({
    isAuthenticated: false,
  });

  const login = React.useCallback((provider: "google" | "linkedin") => {
    // MVP stub: replace with NextAuth/Clerk later.
    setState({
      isAuthenticated: true,
      user: { name: provider === "google" ? "مستخدم Google" : "مستخدم LinkedIn" },
    });
  }, []);

  const logout = React.useCallback(() => {
    setState({ isAuthenticated: false });
  }, []);

  const value = React.useMemo<AuthContextValue>(
    () => ({ state, login, logout }),
    [state, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


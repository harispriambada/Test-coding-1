"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

type User = {
  id?: number;
  username?: string;
  password?: string;
};

type UserContextType = {
  user: User[] | [];
  setUser: React.Dispatch<React.SetStateAction<User[] | []>>;
};

const UserLoginContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User[] | []>([]);

  return (
    <UserLoginContext.Provider value={{ user, setUser }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserLoginContext);
  if (context === undefined) {
    throw new Error(
      "context harus digunakan dalam lingkup context provider..."
    );
  }
  return context;
};

'use client'

import { useState } from "react";
import { User } from '@repo/types/user'
import { useRouter } from "next/navigation";
import { CLIENT_ROUTES } from "@repo/constants/routes";
import { Button } from "./button";
import { Input } from "./input";
import { setCookie } from "cookies-next";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      })
      const data = await res.json();
      console.log(data);
      
      if(!res.ok) {
        setError(data.error || "Login failed");
      } else {
        setCookie('token', data?.token)
        setCookie('user', JSON.stringify(data.user))
    const user = data?.user as User
    router.push(`/${user.country}/${CLIENT_ROUTES.CASINO}`);
      }
    } catch (error) {
      console.log(error, "error");
    }
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-400">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <Input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <Input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button text="Login" />
      </form>
    </div>
  );
};

'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (!!response?.error) {
        console.log("error");
      } else {
        router.push("/ca/market/casino");
      }
    } catch (error) {
      console.log(error, "error");
    }
  }
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 bg-gray-700 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 bg-gray-700 rounded"
          required
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import { Input } from "./input";

export default function Profile({ params }: { params: Promise<{ locale: string }> }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");
  const { locale } = use(params)

  // Check authentication and load user profile
  useEffect(() => {
    const token = getCookie("token");
    const userCookie = getCookie("user");

    if (!token || !userCookie) {
      router.push(`/${locale}/market/login`);
      return;
    }

    const user = JSON.parse(userCookie as string);
    setName(user.name || "");
    setSurname(user.surname || "");
  }, [router, locale]);

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !surname) {
      setError("Both fields are required.");
      return;
    }

    // Update user info in cookies
    const userCookie = getCookie("user");
    if (userCookie) {
      const user = JSON.parse(userCookie as string);
      user.name = name;
      user.surname = surname;
      setCookie("user", JSON.stringify(user), { path: "/" });
    }

    setError("");
    alert("Profile updated successfully!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>

        {error && <p className="text-red-400">{error}</p>}

        <form onSubmit={handleSaveProfile} className="flex flex-col space-y-4">
          <label className="block">
            <Input 
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
          </label>
          <label className="block">
            <Input
              type="text"
              value={surname}
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="p-3 bg-blue-500 rounded hover:bg-blue-600">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

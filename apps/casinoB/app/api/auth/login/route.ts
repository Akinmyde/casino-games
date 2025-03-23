import { NextRequest, NextResponse } from "next/server";
import users from 'app/api/db/users.json'

// Handle login
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate a session token (simple for now)
  const token = btoa(`${user.username}:${Date.now()}`);

  return NextResponse.json({ message: "Login successful", token, user });
}

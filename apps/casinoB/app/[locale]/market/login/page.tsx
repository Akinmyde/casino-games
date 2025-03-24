import { LoginForm } from '@repo/ui/loginForm'
import { redirect } from 'next/navigation';
import { CLIENT_ROUTES } from "@repo/constants/routes";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <LoginForm />
    </div>
  );
}

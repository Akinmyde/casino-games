import { LoginForm } from '@repo/ui/loginForm'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { CLIENT_ROUTES } from "@repo/constants/routes";

export default async function LoginPage({ params }: { params: { locale: string } }) {
    const session = await getServerSession()
    if(session) {
        redirect(`/${params.locale}/${CLIENT_ROUTES.CASINO}`)
    }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <LoginForm />
    </div>
  );
}

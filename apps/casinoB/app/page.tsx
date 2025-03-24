import { CLIENT_ROUTES } from "@repo/constants/routes";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6 text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
        🎰 Welcome to CasinoB Portal
      </h1>
      <p className="mb-6 text-lg sm:text-xl text-center">
        Select your market to continue:
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link
          href={`/en${CLIENT_ROUTES.MARKET}`}
          className="w-full sm:w-auto px-6 py-3 text-lg font-bold text-center rounded-lg bg-blue-500 hover:bg-blue-600 transition focus:ring-4 focus:ring-blue-300"
        >
          English Market 🇬🇧
        </Link> 
        <Link
          href={`/ca${CLIENT_ROUTES.MARKET}`}
          className="w-full sm:w-auto px-6 py-3 text-lg font-bold text-center rounded-lg bg-red-500 hover:bg-red-600 transition focus:ring-4 focus:ring-red-300"
        >
          Canadian Market 🇬🇧
        </Link> 
      </div>
    </div>
  );
}

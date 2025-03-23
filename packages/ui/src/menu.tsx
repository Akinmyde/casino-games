"use client";

import { usePathname } from "next/navigation";
import { BRAND_CONFIGS } from "@repo/config/brands";
import Link from "next/link";
import Image from "next/image";

export default function Menu({ locale }: { locale: string }) {
const config = BRAND_CONFIGS['CasinoB']
  const pathname = usePathname();

  return (
    <nav className={`w-full bg-gray-900 text-white shadow-lg ${config.menuPosition === "top" ? "fixed top-0" : "fixed left-0 h-full w-56"} z-50`}>
      <div className="flex items-center justify-center p-4 border-b border-gray-700">
        <Image src={config.logo} alt="Casino Logo" width={50} height={50} className="ui-rounded-full" />
      </div>

      <ul className={`flex ${config.menuPosition === "top" ? "flex-row justify-center space-x-6 p-4" : "flex-col p-4 space-y-4"}`}>
        {config.menu.map((item) => {
          const href = `/${locale}/${item.path}`;
          const isActive = pathname === href;

          return (
            <li key={item.path}>
              <Link
                href={href}
                className={`block px-6 py-3 text-lg font-bold transition-all rounded-md
                ${isActive ? "bg-yellow-500 text-gray-900" : "hover:bg-gray-700 hover:text-yellow-400"}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

    </nav>
  );
}

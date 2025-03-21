import { BRAND_CONFIGS } from "@repo/config/brands"
import { API_ROUTES } from "@repo/constants/api"

export default function Page() {
  const casino = "CasinoA"
  const config = BRAND_CONFIGS[casino]
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <div>{config.name}</div>
        <div>{API_ROUTES.GAMES}</div>
    </main>
  );
}

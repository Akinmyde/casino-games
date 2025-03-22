import { BRAND_CONFIGS } from "@repo/config/brands";
import { SUPPORTED_MARKETS } from "@repo/constants/market";
import Image from "next/image";

const CasinoLanding = async ({ locale }: { locale: string }) => {
    const casino = "CasinoB";
    const config = BRAND_CONFIGS[casino];

    const t = locale === "ca"
      ? config.translation[SUPPORTED_MARKETS[1]]
      : config.translation[SUPPORTED_MARKETS[0]];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: config.colors.primary }}>
      {/* <Image width={200} height={200} src={config.logo} alt={`${config.name} Logo`} className="w-40 h-40 mb-6" /> */}

      <h1 className="text-4xl font-extrabold text-white mb-4">{t.common.welcome}</h1>
      <p className="text-lg text-white mb-6">{t.common.casino_intro}</p>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <a href={`/${locale}/market/login`} className="px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-700">
          {t.common.login}
        </a>
      </div>
    </div>
  );
};

export default CasinoLanding;

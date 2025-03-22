import CasinoLanding from "@repo/ui/home";
import { notFound } from "next/navigation";
import { checkIfMarketIsSupported } from "@repo/helpers/checkMarket"


export default async function MarketPage({ params }: { params: { locale: string }}) {
  const { locale } = await params;

  if(!checkIfMarketIsSupported(locale)) {
    notFound()
  }

  return (
    <CasinoLanding locale={locale} />
  );
}

// import { getGames } from "@/lib/getGames";
import { notFound } from "next/navigation";
import GameDetails from '@repo/ui/gameDetails'

export default async function GameDetailPage({ params }: { params: { locale: string; slug: string } }) {
    const {slug} = await params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/games/${slug}`)
    const game = await response.json()

    if (!game) {
        notFound(); // Show 404 page if game does not exist
    }

  return (
   <GameDetails game={game} />
  );
}

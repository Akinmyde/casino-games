'use client'
import { Game } from "@repo/types/game";
import GameCard from "@repo/ui/gameCard";
import { useGetGames } from "app/providers/query/queries/casinos";

const Casino = () => { 
  const { data: games, isLoading } = useGetGames()

  if(isLoading) {
    return (
      <div>Loading....</div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid m-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {games?.data.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Casino;

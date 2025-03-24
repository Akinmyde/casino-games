'use client'

import { Game } from "@repo/types/game";
import GameCard from "@repo/ui/gameCard";
import { useGetGames } from "@repo/providers/query/queries/casinos";

const Casino = () => { 
  // Todo: Implement pagination
  const { data: games, isLoading } = useGetGames(1, 1000)

  
  if(isLoading) {
    return (
      <div>Loading....</div>
    )
  }
  
  return (
    <div className="min-h-screen mt-32 bg-gray-900 text-white p-6">
      <div className="grid m-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {games?.data.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {/* Implement Pagination */}
    </div>
  );
};

export default Casino;

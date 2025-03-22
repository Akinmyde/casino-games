import { Game } from "@repo/types/game";
import GameCard from "@repo/ui/gameCard";
import Image from "next/image";
import Link from "next/link";

const Casino = async () => {
  const data = await fetch(
    `http://localhost:3000/api/games?page=${2}&limit=${20}`
  );
  const games = await data.json();
  const gameList = games.data;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid m-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {gameList.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Casino;

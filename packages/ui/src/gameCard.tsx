import Image from "next/image";
import Link from "next/link";
import { Game } from "@repo/types/game"
import { Button } from "./button";

const GameCard = ({ game }: { game: Game }) => (
  <Link href={`casino/${game.slug}`} className="group">
    <div className="border rounded-lg p-3 bg-gray-800 hover:scale-105 transition">
      <Image
        height={200}
        width={200}
        src={game.meta.thumbnail.src}
        alt={game.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div>
        <h2 className="text-lg font-bold mt-2">{game.name}</h2>
        <p className="text-sm text-gray-400">{game.provider.name}</p>
        <Button text="Play" />
      </div>
    </div>
  </Link>
);

export default GameCard;

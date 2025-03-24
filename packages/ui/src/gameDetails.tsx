import Image from "next/image";
import { Game } from "@repo/types/game"
import { Button } from "./button";

const GameDetails = ({ game }: { game: Game }) => (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
    <h1 className="text-4xl font-bold">{game.name}</h1>
    <Image width={384} height={224} src={game.meta.thumbnail.src} alt={game.name} className="w-96 h-56 object-cover rounded-lg mt-4" />
    <div className="mt-6">
     <div className="mr-2">
     <Button text="Play for Free" />
     </div>
     <Button text="Play for Real" />
    </div>
 </div>
);

export default GameDetails;

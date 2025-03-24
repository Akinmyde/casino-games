import { NextResponse, NextRequest } from "next/server";
import games from '../../db/games.json'
import { Game } from "@repo/types/game";

// API handler to return game data
export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    try {
        // Fetch all games
        const gameList = games as Game[]
        const game = gameList.find(g => g.slug === params.slug)
        if (!game) {
            return NextResponse.json({ error: "Game not found" }, { status: 404 });
        }

        return NextResponse.json(game);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch games" }, { status: 500 });
    }
}

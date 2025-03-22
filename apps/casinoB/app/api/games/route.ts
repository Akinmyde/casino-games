import { NextResponse, NextRequest } from "next/server";
import games from '../db/games.json'
import { Game } from "@repo/types/game";

// API handler to return game data
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get("page") || "1", 10)
        const limit = parseInt(searchParams.get("limit") || "10", 10)

        // Fetch all games
        const gameList = games as Game[]
        const start = (page - 1) * limit
        const end = start + limit
        const paginatedGames = gameList.slice(start, end)

        return NextResponse.json({
            page,
            limit,
            total: gameList.length,
            data: paginatedGames
        });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch games" }, { status: 500 });
    }
}

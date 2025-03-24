import { useQuery } from "@tanstack/react-query";

export const useGetGames = (page: number = 1, limit: number = 1000) =>
    useQuery({
        queryKey: ["games-list"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/games?page=${page}&limit=${limit}`)
            const data = await response.json()
            return data
        },
    });

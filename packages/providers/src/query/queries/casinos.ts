import { useQuery } from "@tanstack/react-query";

export const useGetGames = () =>
    useQuery({
        queryKey: ["games-list"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/games`)
            const data = await response.json()
            return data
        },
    });
    
export interface User {
    id: number;
    username: string;
    country: "en" | "ca";
    name?: string;
    surname?: string;
}

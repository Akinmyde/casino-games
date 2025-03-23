import { CLIENT_ROUTES } from '@repo/constants/routes'
export const CasinoBConfig = {
    name: "Casino B",
    menuPosition: "top",
    theme: "light",
    logo: "https://casinodays2.imgix.net/games/bonanza-relax.jpg",
    translation: {
        en: {
            common: {
                "welcome": "Welcome to the English Market!",
                "casino_intro": "Enjoy the best casino games with exclusive offers!",
                "login": "Login"
            }
        },
        ca: {
            common: {
                "welcome": "Bienvenue sur le marché canadien!",
                "casino_intro": "Profitez des meilleurs jeux de casino avec des offres exclusives!",
                "login": "se connecter"
            }
        },
    },
    colors: {
        primary: "#4CAF50",
        secondary: "#FF9800",
    },
    menu: [
        { label: "Market", path: `${CLIENT_ROUTES.MARKET}` },
        { label: "Games", path: `${CLIENT_ROUTES.CASINO}` },
        { label: "Account", path: `${CLIENT_ROUTES.PROFILE}` },
    ],
};

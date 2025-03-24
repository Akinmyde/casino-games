import { NextRequest, NextResponse } from "next/server";
import { User } from "@repo/types/user";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Check if a user is authenticated
    const token = req.cookies.get('token');
    const userCookie = req.cookies.get('user')

    // If no token, redirect user to the correct login page
    if (!token && pathname.match('/market/casino')) {
        return NextResponse.redirect(new URL(`/${'en'}/market/login`, req.url));
    }

    // Prevent authenticated users from accessing `/login`
    if (token && pathname.match(/^\/(en|ca)\/market\/login$/)) {
        // const user = JSON.parse(userCookie as string);
        return NextResponse.redirect(new URL(`/${'en'}/market/casino`, req.url));
    }

    // Extract locale from pathname (e.g., "/en/casino" → "en")
    const localeMatch = pathname.match(/^\/(en|ca)(\/.*)?$/);
    if (!localeMatch) return NextResponse.next(); // Skip if not a localized route

    const requestedLocale = localeMatch[1]; // "en" or "ca"

    if (token && userCookie) {
        const user = JSON.parse(userCookie.value) as User
        const userMarket = user.country; // e.g., "ca"

        // If user tries to switch markets, redirect them back to their correct one
        if (requestedLocale !== userMarket) {
            const correctedUrl = new URL(`/${userMarket}${pathname.substring(3)}`, req.url);
            return NextResponse.redirect(correctedUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/en/market/login", "/ca/market/login", "/en/:path*", "/ca/:path*"], // Apply to login & market pages
};

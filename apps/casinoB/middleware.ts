import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const session = await getServerSession();
  console.log({ session }, 'sdhhs');
  // const { pathname } = req.nextUrl;
  // const token = await getToken({ req });
  console.log('tokenghjklkjhgfghj sd');
  

  // Only apply middleware to localized routes ("/en/**", "/ca/**", etc.)
  // const localeMatch = pathname.match(/^\/(en|ca)(\/.*)?$/);
  // if (!localeMatch) return NextResponse.next(); // Skip if not a localized route

  // const requestedLocale = localeMatch[1]; // Extract the locale (e.g., "en" or "ca")

  // // If user is not logged in, let them visit any market (e.g., landing page, login)
  // if (!token) return NextResponse.next();

  // // Get the user's actual country from the session
  // const userCountry = token?.user?.country; // Should be "en" or "ca"

  // // If user tries to access a different market, redirect them back to their assigned one
  // if (requestedLocale !== userCountry) {
  //   const correctedUrl = new URL(`/${userCountry}${pathname.substring(3)}`, req.url);
  //   return NextResponse.redirect(correctedUrl);
  // }

  return NextResponse.redirect(new URL('/login'));
}

export const config = {
  matcher: '/'
  // matcher: ["/en/:path*", "/ca/:path*"], // Apply middleware only to market-specific routes
};

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Define public routes using an array instead of a function
  publicRoutes: [
    "/",
    "/contact-us",
    "/about",
    // Add all your public routes here
  ],
  
  // Add beforeAuth to handle Googlebot
  beforeAuth: (req) => {
    const userAgent = req.headers.get('user-agent') || '';
    if (userAgent.includes('google')) {
      return true;
    }
    return false;
  },
});

export const config = {
  matcher: [
    "/((?!.*\\.[\\w]+$|_next).*)", // exclude static files
    "/",
    "/(api|trpc)(.*)",
    "/volunteer",
    "/admin",
  ],
};

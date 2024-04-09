import {authMiddleware} from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/api/clerk-webhook", "/api/drive-activity/notification"],
    ignoredRoutes: [
        "/api/auth/callback/discord",
        "/api/auth/callback/slack",
        "/api/auth/callback/notion",
        "/api/flow",
        "/api/cron/wait",
    ],
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

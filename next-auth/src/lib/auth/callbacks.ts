import type { JWT } from "next-auth/jwt";
import type { Profile } from "next-auth";
import type { Session } from "next-auth";

export const callbacks = {
  async jwt({
    token,
    account,
    profile,
  }: {
    token: JWT;
    account?: Record<string, unknown> | null;
    profile?: Profile;
  }) {
    if (account && profile && typeof profile.sub === "string") {
      token.id = profile.sub;
      const roles = profile["https://example.com/roles"] ?? [];
      token.role =
        Array.isArray(roles) && roles.includes("admin") ? "admin" : "user";
    }
    return token;
  },

  async session({ session, token }: { session: Session; token: JWT }) {
    if (token.role && session.user) {
      session.user.role = token.role as string;
    }
    return session;
  },
};

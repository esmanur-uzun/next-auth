import Auth0Provider from "next-auth/providers/auth0";

export const providers = [
  Auth0Provider({
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    issuer: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
  }),
];

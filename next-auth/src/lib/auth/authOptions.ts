import { providers } from "./providers";
import { callbacks } from "./callbacks";

export const authOptions = {
  providers,
  session: { strategy: "jwt" as const },
  callbacks,
};
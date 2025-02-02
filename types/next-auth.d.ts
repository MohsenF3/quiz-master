import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

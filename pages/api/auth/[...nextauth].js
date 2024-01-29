import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.c4572cffc87ec6f1bf43,
      clientSecret: process.env.d26dcc19b978dff1db68714825db1af5b591941a,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "newWorm",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "newWormPassword",
        },
      },
      async authorize() {
        return {
          id: 1,
          name: "WoodWormGuest",
          email: "new@WoodWorm.com",
          image: "/wurm.png",
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);

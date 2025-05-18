import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";
import Credentials from "@auth/core/providers/credentials";


export const { handlers, signIn, signOut, auth} = NextAuth({
    providers: [Google, Yandex, Credentials({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Username" },
            password: { label: "Password", type: "password", placeholder: "Password" },
        },
        async authorize(credentials, req){
            console.log(credentials.username);
            console.log(credentials.password);
            const user = { id: "1", name: "MC Kisynya", email: "mcisynya@mail.com"}
            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        }
    })],
    pages: {
        signOut: "/signOut",
    },
    debug: process.env.NODE_ENV === "development",
});


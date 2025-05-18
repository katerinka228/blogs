import NextAuth from 'next-auth'
import Yandex from 'next-auth/providers/yandex'

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/login',
        signOut: '/logout',
    },
    providers: [
        Yandex({
            clientId: process.env.AUTH_YANDEX_ID,
            clientSecret: process.env.AUTH_YANDEX_SECRET,
        }),
    ],
    trustHost: true,

})

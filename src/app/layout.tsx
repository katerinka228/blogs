import type { Metadata } from "next";
import "./globals.css";
import {SessionProvider} from "next-auth/react";

import { Inter } from "next/font/google"
import Navbar from "@/components/NavBar/NavBar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Мой блог",
    description: "Блог с комментариями и авторизацией",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <SessionProvider>
            <Navbar />
            <main className="container">{children}</main>
        </SessionProvider>
        </body>
        </html>
    )
}
'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./NavBar.module.css"

export default function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Мой блог
                </Link>

                <div className={styles.links}>
                    {session?.user ? (
                        <>
                            <Link href="/account">Личный кабинет</Link>
                        </>
                    ) : (
                        <Link href="/login">Войти</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}
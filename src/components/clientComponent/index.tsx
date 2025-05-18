'use client'

import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {signIn, signOut} from "next-auth/react";

export default function ClientComponent() {
    const session = useSession();
    useEffect(() => {
        console.log(session.status);
        console.log(session.data);
    }, [session]);
    return (<div>
            <button onClick={() => signIn()}>Войти Yandex</button>
            <button onClick={() => signOut()}>Выйти</button>
        </div>
    )
}
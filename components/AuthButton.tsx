"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session.user?.email} <br />
                <button
                    onClick={() => {
                        signOut();
                        redirect('/')
                    }}
                >
                    Sign out
                </button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <Link href="/api/auth/signin">
                <button onClick={() => signIn()}>Sign in</button>
            </Link>
        </>
    );
}
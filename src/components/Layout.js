import { Container } from "@mui/material";
import Header from "./Header"
import Link from "next/link";

export default function Layout({children})
{
    return (
        <>
            <Header title="My Title">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </Header>
            <Container fixed>
                <main>{children}</main>
            </Container>
        </>

    );
}
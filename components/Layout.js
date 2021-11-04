import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "LittleFox";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
    return (
        <div className="container mx-auto">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>


            {!home && (
                    <Link href="/">Go Home</Link>
            )}


            <main>{children}</main>
        </div>
    );
}

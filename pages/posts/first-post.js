import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../../components/Layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Image
                src="/images/profile.jpg"
                width={200}
                height={200}
                alt="Your Name"
            />
        </Layout>
    );
}

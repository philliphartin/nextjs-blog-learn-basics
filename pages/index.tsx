import Head from "next/head";
import Layout, { siteTitle } from "../components/test-layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="text-4xl font-extrabold" >Next.js Basics</h1>
      </section>

      <section className="mt-4">
        <h2 className="text-lg font-medium mb-4">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item mb-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 cursor-pointer text-lg">{title}</a>
              </Link>
              <br />
              <small className="text-sm text-gray-500 mt-2">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

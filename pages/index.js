import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <p>Littlefox Studio</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a
            className="cursor-pointer text-blue-500"
            href="https://nextjs.org/learn"
          >
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className="p-1">
        <h2 className="text-lg font-medium mb-4">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item mb-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 cursor-pointer text-lg">{title}</a>
              </Link>
              <br/>
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

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

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
        <h2 className="text-lg font-medium">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

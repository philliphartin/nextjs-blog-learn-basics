import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import client from "../apolloClient";
import gql from "graphql-tag";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const {
    data: { exampleItems },
  } = await client.query({
    query: gql`
      query ExampleItems {
        exampleItems {
          title
          slug
          createdAt
        }
      }
    `,
  });
  return {
    props: {
      allPostsData,
      exampleItems,
    },
  };
};

export default function Home({
  allPostsData,
  exampleItems,
}: {
  allPostsData: any[];
  exampleItems: any[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="text-4xl font-extrabold">Next.js Basics</h1>
      </section>

      <section className="mt-4">
        <h2 className="text-lg font-medium mb-4">Blog from Markdown Files</h2>
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

      <section className="mt-4">
        <h2 className="text-lg font-medium mb-4">Example Items from GraphCMS</h2>
        <ul>
          {exampleItems.map(({ slug, title, createdAt }) => (
            <li className="list-item mb-4" key={slug}>
              <Link href={`/example-items/${slug}`}>
                <a className="text-blue-500 cursor-pointer text-lg">{title}</a>
              </Link>
              <br />
              <small className="text-sm text-gray-500 mt-2">
              <Date dateString={createdAt} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

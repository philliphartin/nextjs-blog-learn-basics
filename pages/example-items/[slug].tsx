import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Layout from "../../components/layout";
import Head from "next/head";

export default function ExampleItemPage({ item }) {
  return (
    <Layout>
      <Head>
        <title>{item.title}</title>
      </Head>
      <div>
        {item.title}
        <br />
        {item.content && (
          <div dangerouslySetInnerHTML={{ __html: item.content.html }}></div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { exampleItems },
  } = await client.query({
    query: gql`
      query AllExampleItems {
        exampleItems {
          slug
        }
      }
    `,
  });

  const paths = exampleItems.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const {
    data: { exampleItems },
  } = await client.query({
    query: gql`
      query ExampleItem($slug: String!) {
        exampleItems(where: { slug: $slug }) {
          id
          title
          content {
            html
          }
        }
      }
    `,
    variables: { slug },
  });

  console.log("Single examples", exampleItems);

  const item = exampleItems[0];

  return {
    props: {
      item,
    },
  };
};

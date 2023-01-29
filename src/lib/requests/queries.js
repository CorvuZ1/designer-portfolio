import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

export async function getAllWorks() {
  const GET_ALL_WORKS = gql`
    query getAllWorks {
      portfolio(first: 1000) {
        nodes {
          title
          id
          slug
          featuredImage {
            node {
              caption
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_ALL_WORKS
  });

  return response.data.portfolio.nodes;
}

export async function getWorkData(slug) {
  const GET_WORK_DATA = gql`
    query getWorkData($slug: String!) {
      workBy(slug: $slug) {
        content
        title
      }
    }
  `;

  const response = await client.query({
    query: GET_WORK_DATA,
    variables: {
      slug
    }
  });

  return response.data.workBy;
}

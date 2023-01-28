import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

export async function getAllWorks() {
  const GET_ALL_WORKS = gql`
    query getAllWorks {
      portfolio(first: 1000) {
        nodes {
          content
          title
          id
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

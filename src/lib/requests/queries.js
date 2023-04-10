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
            sourceUrl
            altText
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
        title
        editor {
          content
        }
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

export async function getAboutData() {
  const GET_ABOUT_DATA = gql`
    query getWorkData {
      aboutBy(slug: "about") {
        title
        editor {
          content
        }
        image {
          altText
          sourceUrl
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_ABOUT_DATA
  });

  return response.data.aboutBy;
}

export async function getAllSocialMedia() {
  const GET_ALL_SOCIAL_MEDIA = gql`
    query getAllSocialMedia {
      allSocialMedia(first: 100) {
        nodes {
          title
          linkTo
          img {
            altText
            sourceUrl
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_ALL_SOCIAL_MEDIA
  });

  return response.data.allSocialMedia.nodes;
}

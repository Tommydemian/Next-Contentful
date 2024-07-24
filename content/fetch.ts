/*
 * This function performs a GraphQL query to the Contentful API.
 * It supports both published content and preview content.
 *
 * @param {string} query - The GraphQL query to be executed.
 * @param {object} variables - Variables for the GraphQL query (default: {}).
 * @param {boolean} preview - Whether to use preview mode (default: false).
 * @returns {Promise} - The response from the Contentful API.
 */

export const contentGQLFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string;
  variables?: Object;
  preview?: boolean;
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        // Set the Authorization header based on whether preview mode is enabled
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  const { data, errors } = await res.json();

  if (errors) {
    console.log(errors);
    throw new Error("could not get content");
  }

  return data as T;
};

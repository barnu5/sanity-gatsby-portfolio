// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `4y59whtt`,
        dataset: `blog`,
        // a token with read permissions is required
        // if you have a private dataset
        token:
          "skebpihTHSkvwIFB8Zr9m1uEJkBoifpEAEh5A4N5iJjKfqQakcu6WIzTk87kT8FwHc8azxSQi9k8KBDYOXHbUYgYYQ1fFErlNY6dTbngrOO7Wb77UqI4P51WBaYvvS5TUA2AVzZbogRGUYjqYvwf7TG5UHlJhoRpNrqNQwTJ7OCl8ajPvHba",

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};

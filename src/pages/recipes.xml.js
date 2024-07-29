import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const allRecipes = await getCollection("recipes");

  const recipes = allRecipes.sort(
    (a, b) => +new Date(b.data.date) - +new Date(a.data.date)
  );

  return rss({
    title: "processwire.recipes",
    description:
      "A collection of ProcessWire API snippets to solve common tasks, provide full solutions, and some little helpers that make work with the API easier.",

    site: context.site,
    items: recipes.map((recipe) => ({
      title: recipe.data.title,
      pubDate: recipe.data.date,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/recipes/${recipe.slug}/`,
    })),
  });
}

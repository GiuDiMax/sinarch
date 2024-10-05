import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("news"))
  .filter(post => !post.data.draft);

  const projects = (await getCollection("progetti"))
    .filter(project => !project.data.draft);

  // const items = [...blog, ...projects]
  //   .sort((a, b) => new Date(b.data.year).valueOf() - new Date(a.data.year).valueOf());

    const items = [...projects]
        .sort((a, b) => new Date(b.data.year).valueOf() - new Date(a.data.year).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      //yearDate: item.data.year,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}

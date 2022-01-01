import { prismicClient } from "../services/prismic";

export const getRegularPageById = async (slug: string) => {
  return await prismicClient.getByUID('regular_pages', String(slug))
}
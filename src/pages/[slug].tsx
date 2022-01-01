import { GetStaticPaths, GetStaticProps } from "next";
import { prismicClient } from '../services/prismic';
import { RichText } from "prismic-dom";
import { ParsedUrlQuery } from "querystring";
import { Box } from "@chakra-ui/react";
import { getRegularPageById } from "../utils/prismicQueries";
import { NextSeo } from "next-seo";
import { RegularPagesLayout } from "../layouts/RegularPagesLayout";

interface RegularPageProps {
    page: {
        slug: string;
        title: string;
        featured_image: {
            url: string;
            alt: string;
        };
        content: string;
    };
}

interface CustomParsedUrlQuery extends ParsedUrlQuery {
    slug: string
}

export default function Post({ page }: RegularPageProps) {
    const { slug, title, featured_image, content } = page;
    return (
        <>
            <NextSeo
                title={title}
                description={title}
                openGraph={{
                    url: `https://www.mallmann.dev/${slug}`,
                    title: title,
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: featured_image.url,
                            alt: featured_image.alt,
                        },
                    ],
                    site_name: 'Mallmann.dev',
                }}
            />
            <RegularPagesLayout heading={title} featuredImage={featured_image.url}>
                <Box py={8} px={16} dangerouslySetInnerHTML={{ __html: content }} />
            </RegularPagesLayout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const response = await prismicClient.getAllByType('regular_pages')

    const paths = response.map(page => ({ params: { 'slug': page.uid } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as CustomParsedUrlQuery;
    const { data } = await getRegularPageById(slug);

    const page = {
        slug,
        title: data.title,
        featured_image: data.featured_image,
        content: RichText.asHtml(data.content),
    }

    return {
        props: {
            page
        }
    }
}
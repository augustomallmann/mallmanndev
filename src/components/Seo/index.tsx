import Head from "next/head"
import { useGlobalContext } from "../../contexts/GlobalContext"

interface SeoProps {
    title: string;
    description?: string;
    shareImage?: string;
}

export const Seo = ({ title, description, shareImage }: SeoProps) => {

    const { global } = useGlobalContext()

    const seoData = {
        pageTitle: title ? `${title} | ${global.websiteName}` : `${global.defaultSeo.title} | ${global.websiteName}`,
        pageDescription: description ? description : global.defaultSeo.description,
        ogImage: shareImage ? shareImage : global.defaultSeo.shareImage
    }

    return (
        <Head>
            {seoData.pageTitle && (
                <>
                    <title>{seoData.pageTitle}</title>
                    <meta property="og:title" content={seoData.pageTitle} />
                    <meta name="twitter:title" content={seoData.pageTitle} />
                </>
            )}
            {seoData.pageDescription && (
                <>
                    <meta name="description" content={seoData.pageDescription} />
                    <meta property="og:description" content={seoData.pageDescription} />
                    <meta name="twitter:description" content={seoData.pageDescription} />
                </>
            )}
            {seoData.ogImage && (
                <>
                    <meta property="og:image" content={seoData.ogImage} />
                    <meta name="twitter:image" content={seoData.ogImage} />
                    <meta name="image" content={seoData.ogImage} />
                </>
            )}
        </Head>
    )
}
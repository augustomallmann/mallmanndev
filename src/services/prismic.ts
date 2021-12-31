import * as prismic from '@prismicio/client';

const apiUrl: string = process.env.PRISMIC_ENDPOINT ?? '';
const accessToken: string = process.env.PRISMIC_ACCESS_TOKEN ?? '';

export const prismicClient = prismic.createClient(apiUrl, {
    accessToken
})


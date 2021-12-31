import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors: {
        black: {
            "900": "#040404",
            "800": "#070707",
            "700": "#0b0b0b",
            "600": "#0f0f0f",
            "500": "#131313",
            "400": "#161616",
            "300": "#1a1a1a",
            "200": "#1e1e1e",
            "100": "#212121",
            "50": "#252525",
        },
        red: {
            "900": "#7a292d",
            "800": "#923135",
            "700": "#ab393e",
            "600": "#c34147",
            "500": "#dc4950",
            "400": "#f45159",
            "300": "#f5626a",
            "200": "#f6747a",
            "100": "#f7858b",
            "50": "#f8979b"
        }
    },


    styles: {
        global: (props: Dict<unknown>) => ({
            body: {
                color: mode('black.900', 'white')(props),
                bg: mode('white', 'black.100')(props),
            },
        }),
    },
})
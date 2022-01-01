import { Box, Heading, Text } from "@chakra-ui/react"

import { ReactNode } from "react"

interface RegularPagesLayoutProps {
    heading: string
    subtitle?: string
    featuredImage: string
    children: ReactNode
}
export const RegularPagesLayout = ({
    heading,
    subtitle,
    featuredImage,
    children,
}: RegularPagesLayoutProps) => {
    return (
        <Box
            as="main"
            px={4}
            minH="100vh"
            w={{ base: "full", lg: 8 / 12, xl: "60em" }}
            mx="auto"
        >
            <Box
                as="header"
                position={"relative"}
                minH={"24rem"}
                px={16}
                background={[
                    `linear-gradient(rgba(43, 43, 43, 0) 26.56%, rgb(43, 43, 43) 100%), url(${featuredImage})`,
                ]}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
            >
                <Box position={"absolute"} bottom={"2rem"}>
                    <Heading as={"h1"}>{heading}</Heading>
                    {subtitle && <Text as={"p"}>{subtitle}</Text>}
                </Box>
            </Box>
            {children}
        </Box>
    )
}

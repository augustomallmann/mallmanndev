import { HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react"

import { BsCode } from "react-icons/bs"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" passHref>
            <HStack align="center" w="64" _hover={{ cursor: "pointer" }}>
                <Icon
                    as={BsCode}
                    fontSize="2xl"
                    color={useColorModeValue("black.200", "red.400")}
                />
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    letterSpacing="tight"
                    color="white"
                >
                    Mallmann.dev
                </Text>
            </HStack>
        </Link>
    )
}

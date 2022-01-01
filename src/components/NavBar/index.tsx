import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import {
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react"
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si"

import { DarkModeToggle } from "../DarkModeToggle"
import { Logo } from "./Logo"
import { NavLinks } from "./NavLinks"

export function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            position="sticky"
            zIndex="9999"
            top="0"
            w="100%"
            align="center"
            justify="space-between"
            bg={useColorModeValue("red.400", "black.300")}
            px={4}
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={"center"}>
                    <Logo />
                    <NavLinks />
                </HStack>
            </Flex>
            {/* {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null} */}
            <HStack spacing="2">
                <IconButton
                    bg={useColorModeValue("gray.100", "black.50")}
                    fontSize="20px"
                    aria-label="Medium link"
                    icon={<SiMedium />}
                    isRound={true}
                />
                <IconButton
                    bg={useColorModeValue("gray.100", "black.50")}
                    fontSize="20px"
                    aria-label="Linkedin link"
                    icon={<SiLinkedin />}
                    isRound={true}
                />
                <IconButton
                    bg={useColorModeValue("gray.100", "black.50")}
                    fontSize="20px"
                    aria-label="Github link"
                    icon={<SiGithub />}
                    isRound={true}
                />
                <DarkModeToggle />
            </HStack>
        </Flex>
    )
}

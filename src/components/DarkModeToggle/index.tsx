import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MdDarkMode, MdWbSunny } from "react-icons/md"

export const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            onClick={toggleColorMode}
            bg={useColorModeValue("black.200", "gray.200")}
            color={useColorModeValue("gray.100", "black.200")}
            fontSize="20px"
            aria-label="Dark Mode Toggle"
            icon={colorMode === "light" ? <MdDarkMode /> : <MdWbSunny />}
            isRound={true}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("blue.900", "yellow.400"),
            }}
        />
    )
}

import { HStack, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import data from './NavLinksData.json'

interface LinkItemProps {
    url: string;
    text: string;
}

const LinkItem = ({ url, text }: LinkItemProps) => (
    <Link href={url} passHref>
        <ChakraLink
            px={4}
            py={3}
            rounded={'md'}
            fontWeight={'medium'}
            color="white"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('red.600', 'black.50'),
            }}
            href={'#'}>
            {text}
        </ChakraLink>
    </Link>
);

export const NavLinks = () => {
    const { navLinks } = data;

    return (
        <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link, index) => (
                <LinkItem key={index} url={link.url} text={link.text} />
            ))}
        </HStack>
    )

}
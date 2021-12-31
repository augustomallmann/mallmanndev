import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link as ChakraLink,
    useDisclosure,
    useColorModeValue,
    Stack,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';
import { SiLinkedin, SiGithub, SiMedium } from 'react-icons/si';
import { DarkModeToggle } from '../DarkModeToggle';
import Link from 'next/link';

const Links = ['About', 'Publications', 'Projects', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link href='/blog' passHref>
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
            {children}
        </ChakraLink>
    </Link>
);

export function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex position="sticky" zIndex="9999" top="0" w="100%" align="center" justify="space-between" bg={useColorModeValue('red.400', 'black.300')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Logo />
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link} >{link}</NavLink>
                        ))}
                    </HStack>
                </HStack>

            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
            <HStack spacing="2">
                <IconButton bg={useColorModeValue('gray.100', 'black.50')} fontSize='20px' aria-label="Medium link" icon={<SiMedium />} isRound={true} />
                <IconButton bg={useColorModeValue('gray.100', 'black.50')} fontSize='20px' aria-label="Linkedin link" icon={<SiLinkedin />} isRound={true} />
                <IconButton bg={useColorModeValue('gray.100', 'black.50')} fontSize='20px' aria-label="Github link" icon={<SiGithub />} isRound={true} />
                <DarkModeToggle />
            </HStack>
        </Flex>
    );
}
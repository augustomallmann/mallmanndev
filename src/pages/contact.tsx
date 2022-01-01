import { Box, Button, Flex, Text, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import { Input } from '../components/Form/Input';
import { Textarea } from '../components/Form/Textarea';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "../services/axios";
import { useToast } from '@chakra-ui/react'
import { useEffect } from "react";
import { RegularPagesLayout } from "../layouts/RegularPagesLayout";
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si";

type SendMessageFormData = {
    name: string
    email: string;
    subject: string;
    message: string;
}

const createUSerFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    subject: yup.string().required('Assunto obrigatório').min(5, 'Assunto muito curto, escreva no mínimo 5 caracteres'),
    message: yup.string().required('Mensagem obrigatória').min(10, 'Mensagem muito curta, escreva no mínimo 10 caracteres')
})

export default function CreateUser() {
    const toast = useToast()

    const { reset, register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
        resolver: yupResolver(createUSerFormSchema)
    })

    const handleCreateUser: SubmitHandler<SendMessageFormData> = async (mailData) => {
        await api.post('/contact', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            data: mailData,
        })
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            toast({
                title: 'Message sent!',
                description: "I will get back to you as soon as possible.",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        }
    }, [isSubmitSuccessful, reset, toast]);


    return (
        <RegularPagesLayout heading={"Contato"} featuredImage={"https://images.pexels.com/photos/6038206/pexels-photo-6038206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=928"}>
            <Box flex="1" px={16} py={10}>
                <Text as="p" mb="4">
                    You can either contact me using the form below or sending me a message in one of the following channels:
                </Text>
                <HStack spacing={2}>
                    <Button as="a" leftIcon={<SiMedium />} size={"sm"} aria-label="Medium link" >
                        Medium
                    </Button>
                    <Button as="a" leftIcon={<SiLinkedin />} size={"sm"} aria-label="Linkedin link" >
                        Linkedin
                    </Button>
                    <Button as="a" leftIcon={<SiGithub />} size={"sm"} aria-label="Github link" >
                        Github
                    </Button>
                </HStack>
                <Box as="form" mt={10} onSubmit={handleSubmit(handleCreateUser)}>
                    <VStack spacing={["6", "8"]}>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input error={errors.name} label="Your name" {...register('name')} />
                            <Input error={errors.email} label="E-mail"{...register('email')} />
                        </SimpleGrid>
                        <Input error={errors.subject} label="Subject" {...register('subject')} />
                        <Textarea error={errors.message} label="Message" {...register('message')} />
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <Button type="submit" isLoading={isSubmitting} bg="red.400">Submit</Button>
                    </Flex>
                </Box>
            </Box>

        </RegularPagesLayout>
    )
}
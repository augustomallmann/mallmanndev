import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                focusBorderColor="red.400"
                bgColor="black.200"
                borderColor="black.300"
                variant="filled"
                _hover={{
                    bgColor: 'black.300'
                }}
                ref={ref}
                size='lg'
                {...rest}
            />
            <FormErrorMessage>
                {error?.message}
            </FormErrorMessage>
        </FormControl >
    )
}

export const Input = forwardRef(InputBase);
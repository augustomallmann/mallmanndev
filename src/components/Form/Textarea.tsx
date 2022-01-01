import {
    Textarea as ChakraTextarea,
    TextareaProps as ChakraTextareaProps,
    FormControl,
    FormErrorMessage,
    FormLabel,
} from "@chakra-ui/react"
import { ForwardRefRenderFunction, forwardRef } from "react"

import { FieldError } from "react-hook-form"

interface TextareaProps extends ChakraTextareaProps {
    name: string
    label?: string
    error?: FieldError
}

const TextareaBase: ForwardRefRenderFunction<
    HTMLTextAreaElement,
    TextareaProps
> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraTextarea
                id={name}
                name={name}
                focusBorderColor="red.400"
                bgColor="black.200"
                borderColor="black.300"
                variant="filled"
                _hover={{
                    bgColor: "black.300",
                }}
                ref={ref}
                size="lg"
                {...rest}
            />
            <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
    )
}

export const Textarea = forwardRef(TextareaBase)

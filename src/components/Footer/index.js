import { Flex, Text, useColorModeValue } from "@chakra-ui/react"

const Footer = () => {
    const footerColor = useColorModeValue('#1A202C', 'tomato');
    const footerBackgroundColor = useColorModeValue('white', '#1A202C');
    return (
        <Flex
            justify='center'
            align='center'
            color={footerColor}
            p={2}
            pos="fixed"
            zIndex={2}
            bottom={0}
            right={0}
            left={0}
            as='footer'
            bg={footerBackgroundColor}
        >
            <Text fontWeight='medium'>made with ❤️ by <a href="https://github.com/duruyoungcr" target="_blank" rel="noreferrer">ray</a></Text>
        </Flex>
    )
}

export default Footer

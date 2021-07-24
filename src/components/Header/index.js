import { Flex, Heading, useColorModeValue } from "@chakra-ui/react"




const Header = () => {
    const headingColor = useColorModeValue('#1A202C', 'tomato');
    return (
        <Flex as='header' justify="center" align='center' color={headingColor} p={4}>
            <Heading as='h1' size='4xl'>Pokemon Hub</Heading>
        </Flex>
    )
}

export default Header

import { Badge, Box, Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";

const SearchInput = ({ getPokemon }) => {
    const [query, setQuery] = useState('')
    const inputFocusColor = useColorModeValue('#515251', '#E2E8F0');
    const headingColor = useColorModeValue('#1A202C', 'tomato');
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    const popularPokemons = ['ivysaur', 'butterfree', 'charmander']
    return (
        <Box mb={[6, 8, 10]}>
            <Box display={'flex'} flexDirection={['column', 'row']} mb={[2]}>
                <Input
                    focusBorderColor={inputFocusColor}
                    size="lg"
                    type="text"
                    placeholder="Enter a pokemon name..."
                    onChange={handleInputChange}
                    value={query}
                />
                <Button
                    onClick={() => getPokemon(query)}
                    mt={[4, 0]} size="md"
                    minW={[120, 120, 150]}
                    colorScheme="teal"
                    variant="solid"
                    fontSize={["12px", '14px']}
                    minH={'48px'}
                    ml={[0, 2]}
                >
                    Search
                </Button>
            </Box>
            <Box>
                <Text mb={[1, 2]} fontSize={['12px', '16px']} fontWeight="medium" color={headingColor}>
                    Popular Searches:
                </Text>
                <Flex as='div' align='center'>
                    {popularPokemons.map((pokemon, i) => (
                        <Box as='button' key={i} onClick={() => setQuery(pokemon)}>
                            <Badge mx={1} display='flex' justify="center" alignItems="center" borderRadius={["full", '3xl']} px={["2", '4']} fontSize={['10px', '14px']} colorScheme="teal" variant="outline" >
                                {pokemon}
                            </Badge>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default SearchInput

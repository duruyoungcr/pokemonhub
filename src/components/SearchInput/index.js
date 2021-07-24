import { Box, Button, Input, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";

const SearchInput = ({ getPokemon }) => {
    const [query, setQuery] = useState('')
    const inputFocusColor = useColorModeValue('#515251', '#E2E8F0');
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <Box display={'flex'} flexDirection={['column', 'row']} mb={[2, 4, 8]}>
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
    )
}

export default SearchInput

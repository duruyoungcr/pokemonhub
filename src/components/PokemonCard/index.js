import { Badge, Box, Button, Center, Divider, Flex, Image, Spacer, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import SeeMoreModal from "../SeeMoreModal"

const PokemonCard = ({ pokemon, addToTeam, processing, team, removeFromTeam }) => {
    const nameColor = useColorModeValue('teal', 'tomato')
    const { isOpen, onOpen, onClose } = useDisclosure()
    let inTeam = team?.filter(teamMember => teamMember.id === pokemon.id).length > 0
    useEffect(() => {
        inTeam = team?.filter(teamMember => teamMember.id === pokemon.id).length > 0
    }, [team])
    return (
        <>
            {pokemon &&
                <Box
                    pt={2}
                    pb={[0, 0, 2]}
                    borderWidth="1px"
                    display={['flex']}
                    flexDirection={['column', 'column', 'row']}
                    borderRadius="lg"
                    overflow="hidden"
                >
                    <Image mx={'auto'} src={pokemon?.sprites.other['dream_world'].front_default} alt={pokemon?.name} boxSize={["200px", '300px']}
                        objectFit="contain" />
                    <Divider mt={[2, 2, 0]} colorScheme="teal" orientation='horizontal' display={['block', 'block', 'none']} />
                    <Center height="300px" display={['none', 'none', 'block']}>
                        <Divider orientation="vertical" />
                    </Center>
                    <Box px="6" py="4" minW={['100%', '100%', '50%']}>
                        <Flex mb={[2, 4, 6]} justify="between">
                            <Box
                                fontWeight="bold"
                                as="h4"
                                textTransform='capitalize'
                                color={nameColor}
                                fontSize={['16px', '24px']}
                                mr={[0, 0, 2]}
                            >
                                {pokemon.name}
                            </Box>
                            <Spacer />
                            <Box d="flex" align='center'>
                                {pokemon?.types?.map(({ type }) => (
                                    <Badge mx={1} key={type.slot} display='flex' justify="center" alignItems="center" borderRadius={["full", '3xl']} px={["2", '4']} fontSize={['10px', '14px']} colorScheme="teal" variant="subtle" >
                                        {type.name}
                                    </Badge>
                                ))}
                            </Box>
                        </Flex>
                        <Box mb={[1, 3]}>
                            <Text mb={[1, 2]} fontSize={['12px', '16px']} fontWeight="medium" color='teal'>Abilities</Text>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                fontSize={["xs", "md"]}
                                d="flex" align='center'
                                textTransform='capitalize'
                            >
                                {pokemon?.abilities?.map(({ ability }) => (
                                    <Text mr={2} key={ability.slot}>
                                        {ability.name}
                                    </Text>
                                ))}
                            </Box>
                        </Box>
                        <Box >
                            <Text mb={[1, 2]} fontSize={['12px', '16px']} fontWeight="medium" color='teal'>Body</Text>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                fontSize={["xs", "md"]}
                                d="flex" align='center'
                                textTransform='capitalize'
                            >
                                <Text mr={2}>
                                    height - {pokemon.height}m
                                </Text>
                                <Text >
                                    weight - {pokemon.weight}g
                                </Text>
                            </Box>
                        </Box>
                        {inTeam &&
                            <Box>
                                <Text mt={[1, 2]} onClick={onOpen} cursor={'pointer'} fontSize={['12px', '16px']} fontWeight="medium" color='blue.500'>
                                    See more details
                                </Text>
                            </Box>
                        }
                        {inTeam ?
                            <Button
                                onClick={() => removeFromTeam(pokemon)}
                                mt={[4, 8]} size="md"
                                isFullWidth
                                variant="solid"
                                fontSize={["12px", '14px']}
                                isLoading={processing === pokemon.id ? true : false}
                                bg={'tomato'}
                            >
                                Remove from team
                            </Button> :
                            <Button
                                onClick={() => addToTeam(pokemon)}
                                mt={[4, 8]} size="md"
                                isFullWidth
                                colorScheme="teal"
                                variant="solid"
                                fontSize={["12px", '14px']}
                                isLoading={processing === pokemon.id ? true : false}
                            >
                                Add to team
                            </Button>
                        }
                    </Box>
                </Box>
            }
            <SeeMoreModal pokemon={pokemon} isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default PokemonCard

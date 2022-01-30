import { useState, useEffect } from 'react'
import { Box, Button, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react"
import ResultList from "../ResultList";
import SearchInput from '../SearchInput';
import { fetchPokemon } from "../../request";
import UserTeamList from '../UserTeamList';
import TeamNameModal from '../TeamNameModal';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [showUserTeam, setShowUserTeam] = useState(false)
    const [team, setTeam] = useState(JSON.parse(localStorage.getItem('team')))
    const [processing, setProcessing] = useState('')
    const [pokemon, setPokemon] = useState('')
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const footerBackgroundColor = useColorModeValue('white', '#1A202C');
    useEffect(() => {
        team?.length < 1 && setShowUserTeam(false);
    }, [team])
    const getPokemon = async (query) => {
        if (query) {
            setLoading(true)
            try {
                const pokemon = await fetchPokemon(query)
                setPokemon(pokemon);
                pokemon && setTimeout(() => {
                    setLoading(false)
                }, 1000);
            } catch (error) {
                setTimeout(() => {
                    setLoading(false)
                    toast({
                        title: 'An error occurred',
                        description: "Couldn't find a Pokemon with that name",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    })
                }, 2000);
            }
        }
        else {
            toast({
                title: "Not allowed!",
                description: "Please enter a name",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }

    }

    const addToTeam = (pokemon) => {
        if (!localStorage.getItem('teamName')) {
            onOpen()
        }
        else {
            setProcessing(pokemon.id)
            let team = []
            if (localStorage.getItem('team')) {
                const team = JSON.parse(localStorage.getItem('team'))
                team.length < 6 ? team.push(pokemon) : toast({
                    title: "An error occurred.",
                    description: "Maximum number of 6 team members",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
                localStorage.setItem('team', JSON.stringify(team))
                setTimeout(() => {
                    setTeam(team)
                }, 2000);
            }
            else {
                team.push(pokemon)
                localStorage.setItem('team', JSON.stringify(team))
                setTimeout(() => {
                    setTeam(team)
                }, 2000);
            }
            setTimeout(() => {
                setProcessing('')
            }, 2000);
        }
    }
    const removeFromTeam = (pokemon) => {
        setProcessing(pokemon.id)
        const team = JSON.parse(localStorage.getItem('team')).filter(teamMember => teamMember.id !== pokemon.id)
        localStorage.setItem('team', JSON.stringify(team));
        team.length < 1 && localStorage.removeItem('teamName')
        setTimeout(() => {
            setTeam(team)
            setProcessing('')
        }, 2000);
    }

    const createTeam = (name) => {
        if (!name) {
            toast({
                title: "Not allowed!",
                description: "Please enter a team name to search",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        else {
            localStorage.setItem('teamName', JSON.stringify(name));
            addToTeam(pokemon);
            onClose()
        }
    }
    return (
        <Box as='main' mx='auto' maxW='4xl' px={[4, 8]} py={4} mb={24}>
            {!showUserTeam ?
                <>
                    <SearchInput getPokemon={getPokemon} />
                    <ResultList
                        team={team}
                        processing={processing}
                        loading={loading}
                        pokemon={pokemon}
                        addToTeam={addToTeam}
                        removeFromTeam={removeFromTeam}
                    />
                    <TeamNameModal isOpen={isOpen} onClose={onClose} createTeam={createTeam} />
                    {team?.length > 0 &&
                        <Box
                            my={[4]}
                            fontSize={["12px", '14px']}
                            pos="fixed"
                            zIndex={2}
                            bottom={6}
                            right={[4, 8, 16]}
                            left={[4, 8, 16]}
                            variant="outline"
                            bg={footerBackgroundColor}
                            py={2}
                            display={'flex'}
                            justify="center"
                        >
                            <Button
                                onClick={() => setShowUserTeam(true)}
                                colorScheme="teal"
                                variant="outline"
                                mx={'auto'}
                                width={'100%'}
                                maxW={'4xl'}
                            >
                                View your team
                            </Button>
                        </Box>
                    }
                </> :
                <>
                    <UserTeamList
                        team={team}
                        addToTeam={addToTeam}
                        removeFromTeam={removeFromTeam}
                        processing={processing}
                    />
                    <Box
                        my={[4]}
                        fontSize={["12px", '14px']}
                        pos="fixed"
                        zIndex={2}
                        bottom={6}
                        right={[4, 8]}
                        left={[4, 8]}
                        py={2}
                        bg={footerBackgroundColor}
                        display={'flex'}
                        justify="center"
                    >
                        <Button
                            onClick={() => setShowUserTeam(false)}
                            colorScheme="teal"
                            variant="outline"
                            mx={'auto'}
                            width={'100%'}
                            maxW={'4xl'}
                        >
                            Return to search
                        </Button>
                    </Box>
                </>
            }
        </Box>
    )
}

export default Main

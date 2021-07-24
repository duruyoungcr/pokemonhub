import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react"
import { useEffect } from "react"
import PokemonCard from "../PokemonCard"

const UserTeamList = ({ addToTeam, processing, team, removeFromTeam }) => {
    const teamName = JSON.parse(localStorage.getItem('teamName'))
    const teamNameColor = useColorModeValue('teal', '#718096')
    useEffect(() => {

    }, [team])
    return (
        <Box my={4}>
            {teamName && <Text mb={[4, 6]} fontWeight='medium' color={teamNameColor} fontSize={['2xl', '3xl']}>{teamName}</Text>}
            <Grid gap={4}>
                {team?.map(pokemon => (
                    <PokemonCard
                        pokemon={pokemon}
                        key={pokemon.id}
                        addToTeam={addToTeam}
                        processing={processing}
                        team={team}
                        removeFromTeam={removeFromTeam}
                    />
                ))}
            </Grid>
        </Box>
    )
}

export default UserTeamList

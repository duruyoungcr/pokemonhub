import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import Loader from "../Loader"
import PokemonCard from "../PokemonCard"

const ResultList = ({ loading, pokemon, addToTeam, processing, team, removeFromTeam }) => {
    useEffect(() => {

    }, [pokemon, loading, team])
    return (
        <>
            {loading ?
                <Box my={4} display='flex' justifyContent='center' alignItems='center' minH={['200px', '400px']} minW={'inherit'}>
                    <Loader size={'xl'} />
                </Box>
                :
                <Box my={4}>
                    <PokemonCard
                        pokemon={pokemon}
                        addToTeam={addToTeam}
                        processing={processing}
                        team={team}
                        removeFromTeam={removeFromTeam}
                        key={team}
                    />
                </Box>
            }
        </>

    )
}

export default ResultList

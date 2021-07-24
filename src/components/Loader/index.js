import { Spinner, useColorModeValue } from "@chakra-ui/react";

const Loader = ({ size }) => {
    const spinnerColor = useColorModeValue('teal', 'tomato');
    return (
        <Spinner color={spinnerColor} size={size} />
    )
}

export default Loader

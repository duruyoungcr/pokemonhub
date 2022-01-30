import { Badge, Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Progress, Stack, Text, useColorModeValue } from "@chakra-ui/react"

const SeeMoreModal = ({ isOpen, onClose, pokemon }) => {
    const nameColor = useColorModeValue('teal', 'tomato')
    return (
        <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent mx={4}>
                <ModalHeader
                    fontWeight="bold"
                    textTransform='capitalize'
                    color={nameColor}
                    fontSize={['24px', '32px']}
                >
                    {pokemon?.name}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Box
                        display={['flex']}
                        flexDirection={['column']}
                        overflow="hidden"
                    >
                        <Box minW={['100%']}>
                            <Box mb={[3]}>
                                <Text mb={[3]} fontSize={['16px']} fontWeight="medium" color='teal'>Type(s)</Text>
                                <Box d="flex" align='center'>
                                    {pokemon?.types?.map(({ type }) => (
                                        <Badge mx={1} key={type.slot} display='flex' justify="center" alignItems="center" borderRadius={["full", '3xl']} px={['4']} fontSize={['12px', '14px']} colorScheme="teal" variant="subtle" >
                                            {type.name}
                                        </Badge>
                                    ))}
                                </Box>
                            </Box>
                            <Box mb={[4]}>
                                <Text mb={[1, 2]} fontSize={['16px']} fontWeight="medium" color='teal'>Stats</Text>
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    fontSize={["xs", "md"]}
                                    textTransform='capitalize'
                                >
                                    <Stack spacing={[3]}>
                                        {pokemon?.stats?.map((stat, i) => (
                                            <Box key={i}>
                                                <Text mb={[1, 2]} fontSize={['12px', '16px']} fontWeight="medium">{stat.stat.name}</Text>
                                                <Progress
                                                    colorScheme={'teal'}
                                                    value={stat.base_stat}
                                                    max={100}
                                                    min={0}
                                                    key={stat.stat.name}
                                                    size="lg"
                                                    borderRadius='lg'
                                                    width={[240, 400]}
                                                />
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                            <Flex justifyContent="between">
                                <Box mr={8} color="gray.500">
                                    <Text mb={[1, 3]} fontSize={['16px']} fontWeight="medium" color='teal'>Moves</Text>
                                    <Text fontSize={['12px', '16px']} fontWeight="medium" color=''>{pokemon?.moves?.length} moves</Text>
                                </Box>
                                <Box color="gray.500">
                                    <Text mb={[1, 3]} fontSize={['16px']} fontWeight="medium" color='teal'>Game Indices</Text>
                                    <Text fontSize={['12px', '16px']} fontWeight="medium" color=''>{pokemon?.game_indices?.length} indices</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SeeMoreModal

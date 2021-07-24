import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useRef, useState } from "react"

const TeamNameModal = ({ isOpen, onClose, createTeam }) => {
    const initialRef = useRef()
    const [name, setName] = useState('')
    const handleInputChange = (e) => {
        setName(e.target.value)
    }
    return (
        <Modal
            isCentered
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent mx={4}>
                <ModalHeader>Create your Team</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Team name</FormLabel>
                        <Input maxLength={20} ref={initialRef} placeholder="Enter team name" value={name} onChange={handleInputChange} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => createTeam(name)} colorScheme="teal" mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default TeamNameModal

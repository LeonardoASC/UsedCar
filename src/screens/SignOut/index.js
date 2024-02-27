import React, { useContext } from 'react';
import { Modal } from 'react-native';
import {ModalContainer, ContentContainer, ConfirmButton, ConfirmButtonText, CancelButton, CancelButtonText } from "./styles.js"
import { CGT } from '../../components/TextGradient/index.js';
import { AuthContext } from '../../context/AuthContext.js';

export function SignOut({ isVisible, onClose, navigation }) {
    const { logout } = useContext(AuthContext);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ModalContainer>
                <ContentContainer>
                    <CGT>Would you like to exit the application?</CGT>
                    <ConfirmButton
                        onPress={() => {
                            logout();
                            onClose();
                        }}
                    >
                        <CGT>Confirm</CGT>
                    </ConfirmButton>

                    <CancelButton
                        onPress={() => {
                            onClose();
                            navigation.navigate('More');
                        }}
                    >
                        <CGT>Cancel</CGT>
                    </CancelButton>
                </ContentContainer>
            </ModalContainer>
        </Modal>
    )
}


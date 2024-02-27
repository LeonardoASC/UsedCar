import React from 'react';
import { Modal } from 'react-native';
import {ModalContainer, ContentContainer, ConfirmButton, CancelButton, CancelButtonText } from "./styles.js"
import { CGT } from '../../components/TextGradient/index.js';

export function Review({ isVisible, onClose, navigation }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ModalContainer>
                <ContentContainer>
                    <CGT>Would you like to review our app?</CGT>
                    <ConfirmButton
                        onPress={() => {
                            onClose();
                            navigation.navigate('More');
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


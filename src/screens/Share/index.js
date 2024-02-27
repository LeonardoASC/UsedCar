import React, { useEffect } from 'react';
import { Share } from 'react-native';

export function ShareButton({ navigation }) {

    const shareMessage = async () => {
        try {
            const result = await Share.share({
                message: 'Venha conhecer nosso aplicativo.',
            });

            if (result.action === Share.sharedAction || result.action === Share.dismissedAction) {
                navigation.navigate('More');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        shareMessage();
    }, []);

    return; // Seu JSX ou null, se não houver nada para renderizar
}

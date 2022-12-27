import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from 'react';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Tabs1Screen() {
    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);

    return (
        <View
            style={{
                ...styles.globalMargin,
                marginTop: top + 20,
            }}>
            <Text style={styles.title}>Iconos</Text>

            <Text>
                <Icon
                    name="airplane-outline"
                    size={80}
                    color={colores.primary}
                />
                <Icon
                    name="arrow-forward-circle-outline"
                    size={80}
                    color={colores.primary}
                />
                <Icon
                    name="archive-outline"
                    size={80}
                    color={colores.primary}
                />
                <Icon
                    name="chevron-down-circle-outline"
                    size={80}
                    color={colores.primary}
                />
                <Icon
                    name="color-filter-outline"
                    size={80}
                    color={colores.primary}
                />
            </Text>
        </View>
    );
}

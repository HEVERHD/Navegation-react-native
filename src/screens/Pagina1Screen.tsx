import { View, Text, Button } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles, colores } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export default function Pagina1Screen({ navigation }: Props) {
    return (
        <View style={styles.globalMargin}>
            <Button
                title="Ir página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={styles.title}>Pagina1Screen</Text>

            <Text
                style={{
                    fontSize: 20,
                    marginVertical: 20,
                    marginLeft: 5,
                }}>
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={() =>
                        navigation.navigate('PersonaScreen', {
                            id: 1,
                            nombre: 'Pedro',
                        })
                    }>
                    <Icon
                        name="globe-outline"
                        size={30}
                        color={colores.secondary}
                    />
                    <Text style={styles.botonGrandeTexto}> Pedro </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={() =>
                        navigation.navigate('PersonaScreen', {
                            id: 2,
                            nombre: 'Hevert',
                        })
                    }>
                    <Icon
                        name="woman-outline"
                        size={30}
                        color="white"
                    />
                    <Text style={styles.botonGrandeTexto}> Hevert </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

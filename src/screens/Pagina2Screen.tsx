import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../theme/appTheme';

export default function Pagina2Screen() {
    const navigator = useNavigation();

    useEffect(() => {
      navigator.setOptions({
        title:"hola mundo",
        headerBackTitle:"Atras"
      })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button
                title="Ir pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    );
}

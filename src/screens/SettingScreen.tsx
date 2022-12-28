import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export default function SettingScreen() {

  const insets = useSafeAreaInsets();

  const { authState } = useContext( AuthContext );

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
      }}>
      <Text style={styles.title}>SettingScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  )
}
import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export default function ContactScreen() {

  const { signIn } = useContext(AuthContext)


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>


      <Button
        title='SignIn'
        onPress={() => signIn() }
      />
    </View>
  )
}
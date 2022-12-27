import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Tabs2Screen() {

  useEffect(() => {
    console.log("Tab2Screen effect")
  }, [])


  return (
    <View>
      <Text>Tabs2</Text>
    </View>
  )
}
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Tabs3Screen() {


  useEffect(() => {
    console.log("Tab3Screen effect")
  }, [])

  return (
    <View>
      <Text>Tabs3Screen</Text>
    </View>
  )
}
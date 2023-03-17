import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from "../util/Colors"

function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
   title: {
    fontSize: 26,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
  }
})

import React from 'react'
import Colors from "../util/Colors.js"
import { View, Text, Pressable, StyleSheet } from 'react-native'


const PrimaryButton = ({ children, onButtonPress}) => {
  


  return (
    <View style={styles.buttonOutContainer}>
      <Pressable
        style={({pressed})=> pressed ? [styles.buttonInContainer, styles.pressed] : styles.buttonInContainer}
        onPress={onButtonPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOutContainer: {
      overflow: "hidden",
      margin: 4,
      borderRadius: 28,
    },
    
    buttonInContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: Colors.primary500,
    
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: .55,

  },

})
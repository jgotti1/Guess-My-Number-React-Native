import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Alert } from "react-native"
import PrimaryButton from '../components/PrimaryButton.js'
import Colors from "../util/Colors"


function StarGameScreen({setUserNumber}) {

  const [numberToGuess, setNumberToGuess] = useState('')
  
  const handleNumberInput = (input) => {
    setNumberToGuess(input)
  }
 

  const handleConfirm = () => {
    console.log("confirm")
    const chosenNumber = parseInt(numberToGuess)

    if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
      Alert.alert("Invalid Number !",
        "Number must be between 1-99",
      [{text: "Okay", style: "destructive", onPress: handleReset}])
      return;
    } else {
      setUserNumber(chosenNumber)
    }

  }
  
  const handleReset = () => {
    setNumberToGuess('')
    setUserNumber()

  }



  return (    
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={handleNumberInput}
        value={numberToGuess}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton onButtonPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}


export default StarGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 16,
    shadowOpacity: .4,
    
  },
  
  numberInput: {
    height: 50,
    width: 60,
    textAlign: "center",
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    backgroundColor: "#630433",
    borderRadius: 8,
  
  },

  buttonsContainer: {
    flexDirection: "row", 

  },
  buttonContainer: {
    flex: 1, 

  },
});
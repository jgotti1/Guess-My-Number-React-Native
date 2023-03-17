import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert } from "react-native"
import Title from "../components/Title"
import PrimaryButton from '../components/PrimaryButton'
import NumberContainer from '../components/NumberContainer'

let minValue = 1
let maxValue = 100

function generateRandomBetween(min, max, exclude) {
const rndNum = Math.floor(Math.random() * (max - min)) + min;

if (rndNum === exclude) {
  return generateRandomBetween(min, max, exclude);
} else {
  return rndNum
}
}
const GameScreen = ({ setUserNumber, userNumber }) => {
  const initialGuess = generateRandomBetween(minValue, maxValue, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const nextGuess = (direction) => {
    if (direction === "lower" && currentGuess < userNumber ||
      direction === "higher" && currentGuess > userNumber) {
      Alert.alert("Don't cheat !!!", "You know that was wrong...", [{ text: "Try Again Wise Guy", style: "cancel" }])
      return;
   }
    

     if (direction === "lower") {
      maxValue = currentGuess
     } else {
       minValue = currentGuess + 1   
      }
     const newRandomNumber = generateRandomBetween(minValue, maxValue, currentGuess)
     setCurrentGuess(newRandomNumber)
    
  }

  const reset = () => {
    setUserNumber()
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
          <Text>Higher or Lower ?</Text>
   <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonPress={nextGuess.bind(this, "higher")}>+</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onButtonPress={nextGuess.bind(this, "lower")}>-</PrimaryButton>
        </View>
    </View>
      </View>
      {/* <View>Log Rounds</View> */}
      <PrimaryButton onButtonPress={reset}>Reset</PrimaryButton>
    </View>
  )
}

export default GameScreen


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    
  },
  buttonsContainer: {
    flexDirection: "row", 

  },
  buttonContainer: {
    flex: 1, 

  },
 
})


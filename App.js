import React from "react"
import { useState, useEffect, useCallback } from "react"
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from 'expo-linear-gradient';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber]=useState()
  const [appIsReady, setAppIsReady]=useState(false)  

  
  // *****FONT HANDLING*****       
  useEffect(() => {
    async function prepare() {
      try {

// Pre-load fonts, make any API calls you need to do here
    await Font.loadAsync({
        
  
     })
          } catch (e) {
                console.warn(e);
          } finally {
  // Tell the application to render
                setAppIsReady(true);
          }
     }
       prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  
  }
//*****END FONT HANDLING*****



  return (
    <LinearGradient colors={["#630636", "#ddb52f"]} style={styles.rootScreen} onLayout={onLayoutRootView}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.imageBackground}>
        <StatusBar style="auto" />
          <SafeAreaView style={styles.rootScreen}>
          {userNumber ? <GameScreen
            setUserNumber={setUserNumber}
            userNumber={userNumber} /> :
            <StartGameScreen setUserNumber={setUserNumber} />}
         </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  
  },
  imageBackground: {
  opacity: .15,
}
});
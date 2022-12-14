import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  console.log('statusBarHeight: ', StatusBar.currentHeight);
  return (
    <SafeAreaView className='bg-[#00CCBB] pt-5 flex-1 justify-center items-center'>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <Animatable.Image
        resizeMode='contain'
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="pulse"
        iterationCount="infinite"
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to accept your order
      </Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
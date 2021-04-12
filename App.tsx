import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { Flex } from './src/screens/Flex';
import { TareaScreen } from './src/screens/TareaScreen';

/*
** Punto inicial de la aplicacion
*/
export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <Flex /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}


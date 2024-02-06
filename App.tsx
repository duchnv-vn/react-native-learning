import React from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/layout/Header/Header';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header title="App Header" />
      <View>
        <Text>Main contents container</Text>
      </View>
      <View>
        <Text>Footer contents container</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

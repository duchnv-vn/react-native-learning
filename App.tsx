import React, {useRef} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/layout/Header/Header';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const scrollViewRef = useRef(null);

  const array = Array(200).fill(0);

  const handleScrollTop = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0});
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header title="App Header" />
      <ScrollView ref={scrollViewRef}>
        {array.map((item, index) => {
          return (
            <Text onPress={() => alert(`The text ${index} has been pressed!`)}>
              Main contents container {index}
            </Text>
          );
        })}
        <Button onPress={handleScrollTop} title="TOP" />
      </ScrollView>
      <View>
        <Text>Footer contents container</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' title="Blog">
        <Stack.Screen title="Blog" name='Index' component={IndexScreen} options={{ headerTitle: 'Blog'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {


  return <BlogProvider>
          <App />
        </BlogProvider>
}
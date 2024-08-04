import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
//import createDataContext from './src/context/createDataContext';
//import { BlogProvider } from './src/context/BlogContext';
//import {Provider as BlogProvider} from './src/context/BlogContext';

import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' title="Blog">
        <Stack.Screen name='Index' component={IndexScreen} options={{ headerTitle: 'Blog'}} />
        <Stack.Screen name='Show' component={ShowScreen} options={{ headerTitle: 'Blog'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
          <App />
        </Provider>
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
//import createDataContext from './src/context/createDataContext';
//import { BlogProvider } from './src/context/BlogContext';
//import {Provider as BlogProvider} from './src/context/BlogContext';

import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Text } from 'react-native';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' title="Blog">
        <Stack.Screen name='Index' component={IndexScreen} options={{ headerRight: () => <Text>+++</Text> }} />
        {/* <Stack.Screen name='Show' component={ShowScreen} options={({route}) => { return {title: route.params.id}}}  /> */}
        <Stack.Screen name='Show' component={ShowScreen} options={({ route }) => ({
          title: `${route.params.id}`,
        })} />
        {/* <Stack.Screen name='Show' component={ShowScreen} options={{title: 'asdf'}}  /> */}
        <Stack.Screen name='Create' component={CreateScreen} options={{ headerTitle: 'Blog'}} />

        <Stack.Screen name='Edit' component={EditScreen} options={{ headerTitle: 'Blog'}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
          <App />
        </Provider>
}
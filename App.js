import 'react-native-gesture-handler';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import EventList from './src/components/EventList';
import EventForm from './src/components/EventForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="list"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="list"
          component={EventList}
          options={{title: 'Your Events'}}
        />
        <Stack.Screen
          name="form"
          component={EventForm}
          options={{title: 'Add event'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

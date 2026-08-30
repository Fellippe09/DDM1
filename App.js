import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Perfil from './components/Perfil';
import Contato from './components/Contato';
import Servico from './components/Servico';
import Galeria from './components/Galeria';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ focused, color }) => {
            let iconName;
            const size = focused ? 28 : 22;

            if (route.name === 'Ínicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cardápio') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Redes') {
              iconName = 'logo-instagram';
            } else if (route.name === 'História') {
              iconName = focused ? 'book' : 'book-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },

          tabBarActiveTintColor: '#e74c3c',
          tabBarInactiveTintColor: '#aaa',

          tabBarStyle: {
            position: 'absolute',
            bottom: 15,
            left: 15,
            right: 15,

            height: 65,
            backgroundColor: '#111',
            borderRadius: 15,

            elevation: 10,

            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 5,
            },
          },

          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        })}
      >
        <Tab.Screen
          name="Ínicio"
          component={Servico}
        />

        <Tab.Screen
          name="Cardápio"
          component={Galeria}
        />

        <Tab.Screen
          name="Redes"
          component={Contato}
        />

        <Tab.Screen
          name="História"
          component={Perfil}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

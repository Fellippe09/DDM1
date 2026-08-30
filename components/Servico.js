import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';

import { useRef } from 'react';

export default function Servico({ navigation }) {
  const scaleAnim = useRef(
    new Animated.Value(1)
  ).current;

  const opacityAnim = useRef(
    new Animated.Value(1)
  ).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.92,
        duration: 100,
        useNativeDriver: true,
      }),

      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(opacityAnim, {
      toValue: 0.7,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Cardápio');

      opacityAnim.setValue(1);
    });
  };

  return (
    <Animated.View
      style={[
        styles.screen,
        {
          opacity: opacityAnim,
        },
      ]}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
          }}
          style={styles.image}
        />

        <View style={styles.content}>

          <Text style={styles.title}>
            Restaurante Madero
          </Text>

          <Text style={styles.text}>
            Bem-vindo ao Madero, um dos restaurantes
            mais reconhecidos do Brasil. Aqui valorizamos
            comida de verdade, feita com ingredientes
            frescos e preparo artesanal.
          </Text>

          <Text style={styles.text}>
            Do clássico cheeseburger às carnes nobres,
            cada prato é preparado com excelência.
          </Text>

          <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
          >
            <Animated.View
              style={[
                styles.button,
                {
                  transform: [
                    {
                      scale: scaleAnim,
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.buttonText}>
                Ver Cardápio
              </Text>
            </Animated.View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  contentContainer: {
    paddingBottom: 100,
  },

  image: {
    width: '100%',
    height: 250,
  },

  content: {
    padding: 20,
  },

  title: {
    color: '#C9A44C',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 23,
  },

  button: {
    marginTop: 20,

    backgroundColor: '#C9A44C',

    padding: 12,

    borderRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },

});

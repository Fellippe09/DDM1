import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function Contato() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >

      <Image
        source={require('../assets/Grupo-Madero-white.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Siga a gente nas redes sociais!
      </Text>

      <Text style={styles.text}>
        📸 Instagram: @MaderoRestaurante
      </Text>

      <Text style={styles.text}>
        👍 Facebook: @MaderoRestaurante
      </Text>

      <Text style={styles.text}>
        🌐 Site: RestauranteMadero.com.br
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
    paddingBottom: 100,
  },

  image: {
    width: 200,
    height: 120,
    marginBottom: 20,
  },

  title: {
    color: '#C9A44C',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },

});

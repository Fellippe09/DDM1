import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function Perfil() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >

      <Image
        source={{
          uri: 'https://master.restaurantemadero.com.br/upload/galeria-foto/162/1.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Nossa História
        </Text>

        <Text style={styles.text}>
          O Madero foi criado pelo chef Junior Durski,
          que começou sua jornada na cozinha por paixão.
        </Text>

        <Text style={styles.text}>
          O primeiro restaurante surgiu em Curitiba,
          em 2005, com a proposta de oferecer comida
          de verdade e de alta qualidade.
        </Text>

        <Text style={styles.text}>
          Com o sucesso do público, o Madero cresceu
          rapidamente e se expandiu para várias cidades
          do país, sempre mantendo o cuidado com o sabor
          e o atendimento.
        </Text>

        <Text style={styles.text}>
          Hoje, o Madero está presente em todo o Brasil,
          mantendo o mesmo padrão de excelência.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  contentContainer: {
    paddingBottom: 100,
  },

  image: {
    width: '100%',
    height: 220,
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

});

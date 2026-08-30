import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';

import { useState, useRef } from 'react';

const items = [
  {
    name: 'Classic Burger',
    price: 19.9,
    image: require('../assets/burger.jpg'),
  },
  {
    name: 'Chicken Burger',
    price: 19.9,
    image: require('../assets/frango.png'),
  },
  {
    name: 'Duplo Burger',
    price: 24.9,
    image: require('../assets/duplo.png'),
  },
  {
    name: 'Batata com Cheddar',
    price: 14.9,
    image: require('../assets/batatacheddar.png'),
  },
  {
    name: 'Batata Frita',
    price: 12.9,
    image: require('../assets/fritas.jpg'),
  },
  {
    name: 'Batata Rústica',
    price: 13.9,
    image: require('../assets/rustica.jpg'),
  },
  {
    name: 'Pepsi',
    price: 8.9,
    image: require('../assets/pepsi.png'),
  },
  {
    name: 'Coca Cola',
    price: 8.9,
    image: require('../assets/cocacola.png'),
  },
  {
    name: 'Guaraná',
    price: 7.9,
    image: require('../assets/guarana.png'),
  },
  {
    name: 'Água',
    price: 5.9,
    image: require('../assets/agua.jpg'),
  },
];

export default function Galeria() {
  const [selecionados, setSelecionados] = useState([]);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  const toggleItem = (index) => {
    const jaTem = selecionados.includes(index);

    if (jaTem) {
      setSelecionados(
        selecionados.filter((i) => i !== index)
      );
    } else {
      if (selecionados.length >= 5) return;

      setSelecionados([
        ...selecionados,
        index,
      ]);
    }
  };

  const total = selecionados.reduce((soma, index) => {
    return soma + items[index].price;
  }, 0);

  const fazerPedido = () => {
    if (selecionados.length === 0) return;

    setMostrarMensagem(true);
    setSelecionados([]);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),

        Animated.timing(scaleAnim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setMostrarMensagem(false);
      });
    }, 2000);
  };

  return (
    <View style={styles.screen}>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Cardápio
        </Text>

        <View style={styles.grid}>
          {items.map((item, index) => {
            const ativo = selecionados.includes(index);

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.card,
                  ativo && styles.cardSelecionado,
                ]}
                onPress={() => toggleItem(index)}
                activeOpacity={0.8}
              >
                <Image
                  source={item.image}
                  style={styles.image}
                />

                <View style={styles.info}>
                  <Text style={styles.name}>
                    {item.name}
                  </Text>

                  <Text style={styles.price}>
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* BOTÃO FAZER PEDIDO */}

      <TouchableOpacity
        style={styles.botao}
        onPress={fazerPedido}
        activeOpacity={0.8}
      >
        <Text style={styles.botaoTexto}>
          Fazer Pedido • R$ {total.toFixed(2).replace('.', ',')}
        </Text>
      </TouchableOpacity>

      {/* TOAST */}

      {mostrarMensagem && (
        <View style={styles.toastContainer}>
          <Animated.View
            style={[
              styles.toast,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    scale: scaleAnim,
                  },
                ],
              },
            ]}
          >
            <Text style={styles.toastTexto}>
              Pedido Feito! 🍔
            </Text>
          </Animated.View>
        </View>
      )}

    </View>
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

  scrollContent: {
    padding: 10,

    // espaço para o botão e para a Bottom Tab
    paddingBottom: 180,
  },

  title: {
    color: '#C9A44C',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },

  cardSelecionado: {
    borderWidth: 2,
    borderColor: '#C9A44C',
  },

  image: {
    width: '100%',
    height: 120,
  },

  info: {
    padding: 10,
  },

  name: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },

  price: {
    color: '#C9A44C',
    fontWeight: 'bold',
  },

  botao: {
    position: 'absolute',

    // Bottom Tab começa aproximadamente em 80px
    // do final da tela. Deixamos o botão acima dela.
    bottom: 95,

    left: 20,
    right: 20,

    height: 55,

    backgroundColor: '#C9A44C',
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 100,
    elevation: 100,
  },

  botaoTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
  },

  toastContainer: {
    position: 'absolute',

    top: '40%',
    left: 0,
    right: 0,

    alignItems: 'center',

    zIndex: 200,
    elevation: 200,
  },

  toast: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#C9A44C',
  },

  toastTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },

});

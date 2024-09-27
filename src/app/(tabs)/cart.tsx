import { Platform, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useCart } from '@/src/providers/CartProvider';

const CartScreen = () => {
    const {items} =useCart();
  return (
    <View>
      <Text>cart</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({})
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import Button from '@/src/components/Button';

const sizes=['S','M','L','XL'];

const ProductDetailScreen = () => {

  const [selectedSize,setSelectedSize]= useState('M');

  const addToCart=()=>{
    console.warn('Adding to cart, size: ', selectedSize);
  }

  const { id } = useLocalSearchParams();
  
  const product =products.find((p) => p.id.toString()===id);
  if (!product){
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title : product?.name}}/>
      <Image source={{uri: product.image || defaultPizzaImage }} style={styles.img}/>
      <Text>Select Size</Text>
      <View style={styles.sizes}>
      {sizes.map((size) => (
        <Pressable 
          onPress={()=> {setSelectedSize(size)}} 
          style={[
            styles.size, 
            {backgroundColor: selectedSize===size? 'gainsboro' : 'white'}
          ]}
        >
        <Text 
          style={[
            styles.sizeText,
            {color:selectedSize===size?'black':'grey'} ,
            {fontWeight: selectedSize===size? 'bold' : 500}
          ]} 
          key={size}
        >{size}
        </Text>
        </Pressable>
      ))}
      </View>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  img:{
    width: '100%',
    aspectRatio: 1,
  },
  sizes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical: 10,
  },
  size:{
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText:{
    fontSize: 20,
    
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:'auto'
  },
})
export default ProductDetailScreen
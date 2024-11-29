import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

// Array of products

const PRODUCTS = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 15000,
    description: "Premium noise-cancelling wireless headphones",
    image: require("../assets/headphones.jpg"),
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 25000,
    description: "Advanced fitness tracking smartwatch",
    image: require("../assets/smartwatch.jpg"),
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    price: 10000,
    description: "Portable high-quality bluetooth speaker",
    image: require("../assets/speaker.jpg"),
  },
];

export default function ProductListScreen({ navigation }) {
  const handlePayment = (product) => {
    navigation.navigate("Payment", { product });
  };

  const renderProduct = ({ item }) => (
    // View
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>
          ZAR{item.price.toLocaleString()}
        </Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => handlePayment(item)}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={PRODUCTS}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#9ec7c4",
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    color: "#0d965e",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#237558",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  payButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

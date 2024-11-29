import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Paystack } from "react-native-paystack-webview";

export default function PaymentScreen({ route, navigation }) {
  const { product } = route.params;

  // Popup for canceled payments
  const handlePaymentCancel = (e) => {
    Alert.alert("Payment Cancelled", "Your payment was not completed", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  // popup for success payments
  const handlePaymentSuccess = (response) => {
    Alert.alert(
      "Payment Successful",
      `You have successfully purchased ${product.name}`,
      [
        {
          text: "OK",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productPrice}>
          R {product.price.toLocaleString()}
        </Text>
      </View>

      {/*payStack payment with key */}
      <Paystack
        paystackKey="pk_test_a4c59c870f0e611d085140ac2fce8afd1e97acaf"
        amount={product.price.toString() + ".00"}
        billingEmail="paystackwebview@something.com"
        currency="ZAR"
        billingName={product.name}
        activityIndicatorColor="#007bff"
        onCancel={handlePaymentCancel}
        onSuccess={handlePaymentSuccess}
        autoStart={true}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  productInfo: {
    padding: 16,
    backgroundColor: "white",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: "#007bff",
    fontWeight: "bold",
  },
});

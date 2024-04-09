import { StyleSheet, Text, View } from 'react-native';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Checkout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    color: 'yellow',
  },
});

export default Checkout;

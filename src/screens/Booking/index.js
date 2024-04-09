import { StyleSheet, Text, View } from 'react-native';

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Booking</Text>
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

export default Booking;

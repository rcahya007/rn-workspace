import { StyleSheet, Text, View } from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Details</Text>
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

export default Details;

import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

export default HeaderPage = ({ title, subTitle, onDetail }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require('../../../assets/icons/arrow_left_black.png')}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'poppinsBold', fontSize: 22 }}>{title}</Text>
        <Text style={{ fontFamily: 'poppinsRegular', fontSize: 14 }}>
          {subTitle}
        </Text>
      </View>
      {onDetail && (
        <Image
          source={require('../../../assets/icons/menu.png')}
          style={{ width: 24, height: 24 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  },
});

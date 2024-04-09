import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../assets/styles/Colors';
import { Gs } from '../../../assets/styles/GlobalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageProfile from '../../../assets/images/profile_1.png';

const Home = () => {
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}
        >
          <Image source={imageProfile} style={{ width: 50, height: 50 }} />
          <View>
            <Text>Hi, Shayna</Text>
            <Text>@shaynawork</Text>
          </View>
        </View>
        <View></View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        {renderHeader()}
        {/* {renderSearch()} */}
        {/* <ScrollView>
        {renderPopularSection()}
        {renderNewsworthy()}
      </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },
});

export default Home;

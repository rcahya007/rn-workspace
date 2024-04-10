import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageProfile from '../../../assets/images/profile_1.png';
import gift from '../../../assets/icons/gift.png';
import notification from '../../../assets/icons/notification.png';
import { Gs } from '../../../assets/styles/GlobalStyle';
import { colors } from '../../../assets/styles/Colors';

const Home = () => {
  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}
        >
          <Image source={imageProfile} style={{ width: 50, height: 50 }} />
          <View style={{ flexDirection: 'column', rowGap: 2 }}>
            <Text style={[Gs.poppinsRegular, { fontSize: 14 }]}>
              Hi, Shayna
            </Text>
            <Text style={[Gs.poppinsBold, { fontSize: 14 }]}>@shaynawork</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 10 }}>
          <Image source={gift} style={{ width: 24, height: 24 }} />
          <Image source={notification} style={{ width: 24, height: 24 }} />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bgColor }}>
      <View>
        {renderHeader()}
        {/* {renderSearch()} */}
        {/* <ScrollView>
        {renderPopularSection()}
        {renderNewsworthy()}
      </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;

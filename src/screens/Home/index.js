import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageProfile from '../../../assets/images/profile_1.png';
import gift from '../../../assets/icons/gift.png';
import notification from '../../../assets/icons/notification.png';
import { Gs } from '../../../assets/styles/GlobalStyle';
import { colors } from '../../../assets/styles/Colors';
import InputText from '../../components/InputText';
import iconLocation from '../../../assets/icons/location.png';
import item1_a from '../../../assets/images/item_1_a.png';
import item1_b from '../../../assets/images/item_1_b.png';
import item1_c from '../../../assets/images/item_1_c.png';

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

  const renderSearch = () => {
    return (
      <View>
        <InputText
          icon={iconLocation}
          placeholder={'Find work spaces in Jakarta'}
        />
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={styles.containerPopularSection}>
        <Text style={styles.titlePopular}>Popular</Text>
        <View style={styles.popularContainerImage}>
          <Image
            source={item1_a}
            style={{
              height: null,
              width: 205,
              borderBottomLeftRadius: 24,
              borderTopLeftRadius: 24,
              borderBottomRightRadius: 24,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              rowGap: 10,
            }}
          >
            <Image
              source={item1_b}
              style={{
                flex: 1,
                width: null,
                borderBottomLeftRadius: 24,
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 24,
              }}
            />
            <Image
              source={item1_c}
              style={{
                flex: 1,
                width: null,
                borderBottomLeftRadius: 24,
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 24,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: 10,
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ ...Gs.poppinsBold, fontSize: 18, marginBottom: 2 }}>
              IndoorWork
            </Text>
            <Text
              style={{ ...Gs.poppinsRegular, fontSize: 14, color: colors.grey }}
            >
              Jalan Angga Bekerja No. 10
            </Text>
          </View>
          <Text
            style={{
              ...Gs.poppinsSemiBold,
              fontSize: 14,
              color: colors.primary,
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderBottomLeftRadius: 12,
              borderTopLeftRadius: 12,
              borderBottomRightRadius: 12,
              backgroundColor: colors.secondary,
              height: 37,
            }}
          >
            $599/day
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {renderHeader()}
        {renderSearch()}
        <ScrollView>
          {renderPopularSection()}
          {/* {renderNewsworthy()} */}
        </ScrollView>
      </View>
    </SafeAreaView>
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
  containerPopularSection: {
    padding: 24,
  },
  titlePopular: {
    ...Gs.poppinsBold,
    fontSize: 22,
    marginBottom: 24,
  },
  popularContainerImage: {
    flexDirection: 'row',
    height: 200,
    flex: 1,
    columnGap: 10,
    marginBottom: 10,
  },
});

export default Home;

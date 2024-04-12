import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageProfile from '../../../assets/images/profile_1.png';
import gift from '../../../assets/icons/gift.png';
import notification from '../../../assets/icons/notification.png';
import { Gs } from '../../../assets/styles/GlobalStyle';
import InputText from '../../components/InputText';
import iconLocation from '../../../assets/icons/location.png';
import item1_a from '../../../assets/images/item_1_a.png';
import item1_b from '../../../assets/images/item_1_b.png';
import item1_c from '../../../assets/images/item_1_c.png';
import CardPlacePopular from '../../components/CardPlacePopular';
import item2_a from '../../../assets/images/item_2_a.png';
import item2_b from '../../../assets/images/item_2_b.png';
import item2_c from '../../../assets/images/item_2_c.png';
import CardNewsworthy from '../../components/CardNewsworthy';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../../components/BottomNav';

const dataPopular = [
  {
    placeName: 'IndoorWork',
    address: 'Jalan Angga Bekerja No. 10',
    priceTag: '$599/day',
    images: [item1_a, item1_b, item1_c],
  },
  {
    placeName: 'Malang Batu',
    address: 'Jalan Malang No. 10',
    priceTag: '$299/day',
    images: [item1_a, item1_b, item1_c],
  },
  {
    placeName: 'Surabaya Zoo',
    address: 'Jalan Surabaya No. 10',
    priceTag: '$999/day',
    images: [item1_a, item1_b, item1_c],
  },
];

const dataNewsworthy = [
  {
    title: 'Surabaya',
    address: 'Tanjung Perak',
    price: '$299/day',
    image: item2_a,
  },
  {
    title: 'Malang',
    address: 'Jalan Malang No. 10',
    price: '$399/day',
    image: item2_b,
  },
  {
    title: 'Jakarta',
    address: 'Jakarta Ancol',
    price: '$599/day',
    image: item2_c,
  },
];

const Home = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    // navigation.navigate('Details');
    console.log('press');
  };
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
        <ScrollView horizontal={true} contentContainerStyle={{ columnGap: 20 }}>
          {dataPopular.map((item, index) => (
            <CardPlacePopular
              key={index}
              placeName={item.placeName}
              address={item.address}
              priceTag={item.priceTag}
              images={item.images}
            />
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderNewsworthy = () => {
    return (
      <View>
        <Text
          style={{
            ...Gs.poppinsBold,
            fontSize: 22,
            paddingHorizontal: 24,
            marginBottom: 12,
          }}
        >
          renderNewsworthy
        </Text>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 24,
            columnGap: 20,
            marginBottom: 30,
          }}
          data={dataNewsworthy}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <CardNewsworthy
              onPress={handlePress}
              title={item.title}
              address={item.address}
              price={item.price}
              image={item.image}
            />
          )}
        ></FlatList>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          {renderHeader()}
          {renderSearch()}
          {renderPopularSection()}
          {renderNewsworthy()}
        </View>
      </ScrollView>
      <View style={{ paddingVertical: 30 }}>
        <BottomNav />
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
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  titlePopular: {
    ...Gs.poppinsBold,
    fontSize: 22,
    marginBottom: 24,
  },
});

export default Home;

import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderPage from '../../components/HeaderPage';
import img1 from '../../../assets/images/item_2_a.png';
import img2 from '../../../assets/images/item_2_b.png';
import img3 from '../../../assets/images/item_2_c.png';
import ContainerAction from '../../components/ContainerAction';
import { useNavigation } from '@react-navigation/native';

const dataImageDetails = [
  { alt: 'img1', image: img1 },
  { alt: 'img2', image: img2 },
  { alt: 'img3', image: img3 },
];
const renderHeader = () => {
  return (
    <View>
      <HeaderPage
        title={'Office Details'}
        subTitle={'Space available for today'}
        onDetail={true}
      />
    </View>
  );
};
const Details = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View>{renderHeader()}</View>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 24,
            columnGap: 20,
            marginBottom: 24,
          }}
          data={dataImageDetails}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.alt}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{
                width: 205,
                height: 260,
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 24,
              }}
            />
          )}
        />
        {/* Name Place */}
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 24,
          }}
        >
          <View>
            <Text style={{ fontFamily: 'poppinsBold', fontSize: 22 }}>
              Homemade Office
            </Text>
            <Text
              style={{
                fontFamily: 'poppinsRegular',
                fontSize: 14,
                color: '#878787',
              }}
            >
              Jalan Angga Bekerja No. 10
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 6,
              height: 24,
            }}
          >
            <Image
              source={require('../../../assets/icons/star_yellow.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={{ fontFamily: 'poppinsBold', fontSize: 16 }}>
              4.5/5
            </Text>
          </View>
        </View>
        {/* About Place */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 24,
          }}
        >
          <Text
            style={{
              fontFamily: 'poppinsBold',
              fontSize: 16,
            }}
          >
            About
          </Text>
          <Text
            style={{
              fontFamily: 'poppinsRegular',
              fontSize: 14,
              color: '#878787',
              lineHeight: 28,
            }}
          >
            Lorem space curated dolor si amet deep work without distraction from
            any edge si solor. Fiesto si fast charging club and go-getter
            Internet zonn absurb prixomoti anneheil available today.
          </Text>
        </View>
        {/* Owner */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 44,
            rowGap: 12,
          }}
        >
          <Text
            style={{
              fontFamily: 'poppinsBold',
              fontSize: 16,
            }}
          >
            Space Owner
          </Text>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../../assets/images/profile_2.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 2,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'poppinsRegular',
                    fontSize: 14,
                  }}
                >
                  Junebug
                </Text>
                <Image
                  source={require('../../../assets/icons/verified_orange.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'poppinsBold',
                  fontSize: 14,
                }}
              >
                @junebug
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* PriceButton */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            rowGap: 2,
          }}
        >
          <Text
            style={{
              fontFamily: 'poppinsBold',
              fontSize: 22,
              color: '#E65605',
            }}
          >
            $5,899
          </Text>
          <Text
            style={{
              fontFamily: 'poppinsRegular',
              fontSize: 14,
              color: '#878787',
            }}
          >
            /day
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
          <ContainerAction
            style={{
              backgroundColor: '#E65605',
              paddingHorizontal: 22,
              paddingVertical: 14,
              height: 52,
              width: 169,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 3,
              }}
            >
              <Text
                style={{
                  fontFamily: 'poppinsBold',
                  fontSize: 14,
                  color: 'white',
                }}
              >
                Start Booking
              </Text>
              <Image
                source={require('../../../assets/icons/arrow_right_white.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </ContainerAction>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default Details;

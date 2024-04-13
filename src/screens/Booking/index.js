import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderPage from '../../components/HeaderPage';
import img1 from '../../../assets/images/item_2_b.png';
import { useNavigation } from '@react-navigation/native';
import InputText from '../../components/InputText';
import ContainerAction from '../../components/ContainerAction';

const forms = [
  {
    label: '',
    placeholder: 'Total days',
    icon: require('../../../assets/icons/days.png'),
  },
  {
    label: 'Date start at',
    placeholder: 'Date start at',
    icon: require('../../../assets/icons/calendar.png'),
  },
  {
    label: 'Complete name',
    placeholder: 'Complete name',
    icon: require('../../../assets/icons/user.png'),
  },
  {
    label: 'Phone number',
    placeholder: 'Phone number',
    icon: require('../../../assets/icons/phone.png'),
  },
];
const Booking = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View>
        <HeaderPage
          onDetail={false}
          title={'Booking'}
          subTitle={'Space available for today'}
        />
        <ScrollView>
          <View>
            <Text
              style={{
                fontFamily: 'poppinsBold',
                fontSize: 16,
                marginHorizontal: 24,
              }}
            >
              Your Space
            </Text>
            {/* CardPlace */}
            <View
              style={{
                paddingVertical: 10,
                paddingLeft: 10,
                paddingRight: 24,
                borderColor: '#E9E9E9',
                borderWidth: 1,
                borderTopLeftRadius: 24,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                marginHorizontal: 24,
                marginTop: 12,
                marginBottom: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 12,
                }}
              >
                <Image
                  source={img1}
                  style={{
                    width: 70,
                    height: 70,
                    borderTopLeftRadius: 24,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    rowGap: 2,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'poppinsBold',
                      fontSize: 18,
                    }}
                  >
                    IndoorWork
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      columnGap: 2,
                    }}
                  >
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                      }}
                      source={require('../../../assets/icons/star_yellow.png')}
                    />
                    <Text
                      style={{
                        fontFamily: 'poppinsSemiBold',
                        fontSize: 12,
                      }}
                    >
                      4.5/5
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details');
                }}
              >
                <Text
                  style={{
                    fontFamily: 'poppinsSemiBold',
                    fontSize: 14,
                    color: '#E65605',
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Booking Information */}
          <View
            style={{
              paddingHorizontal: 24,
            }}
          >
            <View
              style={{
                paddingBottom: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: 'poppinsBold',
                  fontSize: 16,
                }}
              >
                Booking Informations
              </Text>
              <Text
                style={{
                  fontFamily: 'poppinsRegular',
                  fontSize: 14,
                  color: '#878787',
                }}
              >
                Lorem ensure data valid cant change
              </Text>
            </View>
            {/* Forms */}
            <View
              style={{
                flexDirection: 'column',
                rowGap: 16,
                paddingBottom: 68,
              }}
            >
              {forms.map((item, index) => (
                <InputText
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  placeholder={item.placeholder}
                />
              ))}
            </View>
            {/* Footer */}
            <View
              style={{
                flexDirection: 'column',
                rowGap: 16,
                alignItems: 'center',
                paddingBottom: 28,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('Checkout')}
                style={{
                  width: '100%',
                }}
              >
                <ContainerAction
                  style={{
                    backgroundColor: '#E65605',
                    paddingHorizontal: 22,
                    paddingVertical: 14,
                    height: 52,
                    width: '100%',
                    flexDirection: 'row',
                    columnGap: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'poppinsBold',
                      fontSize: 14,
                      color: 'white',
                    }}
                  >
                    Proceed to Payment
                  </Text>
                  <Image
                    source={require('../../../assets/icons/arrow_right_white.png')}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </ContainerAction>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'poppinsRegular',
                  fontSize: 12,
                  color: '#878787',
                }}
              >
                Read Terms & All Conditions
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Booking;

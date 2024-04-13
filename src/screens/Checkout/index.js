import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderPage from '../../components/HeaderPage';
import img1 from '../../../assets/images/item_2_b.png';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContainerAction from '../../components/ContainerAction';

const dataCheckout = [
  {
    label: 'Price per day',
    value: '$500',
  },
  {
    label: 'Total days',
    value: '18 days',
  },
  {
    label: 'Date',
    value: '22 Januari 2023',
  },
  {
    label: 'End',
    value: '2 February 2023',
  },
  {
    label: 'Tax 15%',
    value: '$890',
  },
  {
    label: 'Insurance',
    value: '$20,000',
  },
  {
    label: 'Grand total',
    value: '$2,899,000',
  },
];
const Checkout = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View>
        <HeaderPage
          onDetail={false}
          title={'Checkout'}
          subTitle={'Ready to start working?'}
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
              Booking Confirmation
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
            {/* Detial Checkout */}
            <View
              style={{
                paddingHorizontal: 24,
                rowGap: 16,
              }}
            >
              {dataCheckout.map((item, index) => (
                <View
                  key={index}
                  style={[
                    {
                      paddingBottom: 14,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottomColor: '#E9E9E9',
                      borderBottomWidth: 1,
                    },
                    index === dataCheckout.length - 1 && {
                      borderBottomWidth: 0,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: 'poppinsSemiBold',
                      fontSize: 14,
                    }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'poppinsBold',
                      fontSize: 14,
                    }}
                  >
                    {item.value}
                  </Text>
                </View>
              ))}

              {/* Payment Card */}
              <View>
                <Text
                  style={{
                    fontFamily: 'poppinsBold',
                    fontSize: 16,
                    paddingBottom: 12,
                  }}
                >
                  Payment
                </Text>
                <View>
                  <ContainerAction
                    style={{
                      borderWidth: 1,
                      borderColor: '#E9E9E9',
                      width: 158.5,
                      height: 90,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        rowGap: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('../../../assets/icons/wallet.png')}
                        style={{
                          width: 28,
                          height: 28,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: 'poppinsSemiBold',
                          fontSize: 12,
                        }}
                      >
                        MyWallet
                      </Text>
                    </View>
                  </ContainerAction>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

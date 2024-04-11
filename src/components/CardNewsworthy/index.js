import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Gs } from '../../../assets/styles/GlobalStyle';
import { colors } from '../../../assets/styles/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import ContainerAction from '../ContainerAction';
import imageButton from '../../../assets/icons/arrow_right_white.png';

export default CardNewsworthy = ({ title, address, price, image, onPress }) => {
  return (
    <View
      style={{
        height: 320,
        width: 260,
        position: 'relative',
      }}
    >
      <LinearGradient
        colors={['transparent', '#0A1426']}
        style={{
          height: 320,
          width: 240,
          borderBottomLeftRadius: 24,
          borderTopLeftRadius: 24,
          borderBottomRightRadius: 24,
          position: 'absolute',
        }}
      >
        <Image
          source={image}
          style={{
            height: 320,
            width: 240,
            borderBottomLeftRadius: 24,
            borderTopLeftRadius: 24,
            borderBottomRightRadius: 24,
            position: 'absolute',
            zIndex: -1,
          }}
        />
      </LinearGradient>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 240,
        }}
      >
        <View>
          <Text
            style={{
              ...Gs.poppinsBold,
              fontSize: 18,
              color: colors.white,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              ...Gs.poppinsRegular,
              fontSize: 14,
              color: colors.white,
            }}
          >
            {address}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 40,
            width: 40,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}
        >
          <Image source={imageButton} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
      </View>
      <ContainerAction
        style={{
          position: 'absolute',
          right: 36,
          top: 20,
          backgroundColor: colors.secondary,
          paddingHorizontal: 14,
          paddingVertical: 8,
          height: 37,
        }}
      >
        <Text
          style={{ ...Gs.poppinsSemiBold, fontSize: 14, color: colors.primary }}
        >
          {price}
        </Text>
      </ContainerAction>
    </View>
  );
};

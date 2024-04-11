import { Image, StyleSheet, Text, View } from 'react-native';
import { Gs } from '../../../assets/styles/GlobalStyle';
import { colors } from '../../../assets/styles/Colors';
import ContainerAction from '../ContainerAction';

export default CardPlacePopular = ({
  placeName,
  address,
  priceTag,
  images,
}) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.popularContainerImage}>
        <Image
          source={images[0]}
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
            source={images[1]}
            style={{
              flex: 1,
              width: 130,
              borderBottomLeftRadius: 24,
              borderTopLeftRadius: 24,
              borderBottomRightRadius: 24,
            }}
          />
          <Image
            source={images[2]}
            style={{
              flex: 1,
              width: 130,
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
            {placeName}
          </Text>
          <Text
            style={{
              ...Gs.poppinsRegular,
              fontSize: 14,
              color: colors.grey,
            }}
          >
            {address}
          </Text>
        </View>
        <ContainerAction
          style={{
            backgroundColor: colors.secondary,
            height: 37,
            paddingHorizontal: 14,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              ...Gs.poppinsSemiBold,
              fontSize: 14,
              color: colors.primary,
            }}
          >
            {priceTag}
          </Text>
        </ContainerAction>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popularContainerImage: {
    width: null,
    flexDirection: 'row',
    height: 200,
    flex: 1,
    columnGap: 10,
    marginBottom: 10,
  },
});

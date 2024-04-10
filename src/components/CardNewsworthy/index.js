import { Image, Text, TouchableOpacity, View } from 'react-native';

export default CardNewsworthy = ({
  title,
  address,
  price,
  image,
  onPress,
  imageButton,
}) => {
  return (
    <View>
      <Image source={image} />
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{address}</Text>
        </View>
        <Text>{price}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={imageButton} />
      </TouchableOpacity>
    </View>
  );
};

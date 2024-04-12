import { Image, StyleSheet, Text, View } from 'react-native';
import ContainerAction from '../ContainerAction';

export default BottomNav = () => {
  return (
    <View style={styles.navbarContainer}>
      <ContainerAction style={styles.containerAction}>
        <Image source={require('../../../assets/icons/discover.png')} />
        <Text
          style={{
            fontFamily: 'poppinsSemiBold',
            fontSize: 14,
            color: '#E65605',
          }}
        >
          Discover
        </Text>
      </ContainerAction>
      <ContainerAction>
        <Image source={require('../../../assets/icons/messages.png')} />
      </ContainerAction>
      <ContainerAction>
        <Image source={require('../../../assets/icons/payment.png')} />
      </ContainerAction>
      <ContainerAction>
        <Image source={require('../../../assets/icons/settings.png')} />
      </ContainerAction>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 30,
  },
  containerAction: {
    backgroundColor: '#FFE9DD',
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { View } from 'react-native';

export default ContainerAction = ({ children, style }) => {
  return (
    <View
      style={{
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

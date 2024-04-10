import { Image, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../../assets/styles/Colors';

const InputText = ({ icon, label, placeholder }) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.searchContainer}>
        {icon && <Image source={icon} style={styles.iconContainer} />}
        <TextInput
          placeholder={placeholder}
          style={styles.searchInput}
          placeholderTextColor={colors.grey}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 14,
  },
  searchContainer: {
    marginHorizontal: 24,
    paddingHorizontal: 20,
    paddingVertical: 13,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.greyContainer,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    columnGap: 12,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'poppinsRegular',
    fontSize: 14,
    color: colors.black,
  },
});

export default InputText;

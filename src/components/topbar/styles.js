import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainLogo: {
    height: 40,
    width: 140,
  },
  rightButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  rightIcon: {
    width: 30,
  },
});
export default styles;

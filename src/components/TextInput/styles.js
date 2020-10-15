//@flow
import {StyleSheet} from 'react-native';
import colors from '../../util/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 50,
    borderColor: colors.white,
    backgroundColor: colors.white,
    marginHorizontal: 30,
    flexDirection: 'row',
    paddingStart: 15,
  },
  defaultStyle: {
    flex: 1,
    color: colors.black,
    backgroundColor: colors.white,
  },
  leftImage: {
    padding: 10,
    marginLeft: -5,
    margin: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default styles;

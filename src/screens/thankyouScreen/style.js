//@flow
import {StyleSheet} from 'react-native';
import Colors from './../../util/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#8b931b',
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewContainer: {
    backgroundColor: Colors.black,
    flex: 1
  },
});

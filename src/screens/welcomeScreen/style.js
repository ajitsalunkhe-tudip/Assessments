//@flow
import {StyleSheet} from 'react-native';
import Color from './../../util/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.black,
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: Color.black,
    flexDirection: 'column',
  },
  userNameheader: {
    textAlign: 'right',
    color: '#8b931b',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  header: {
    textAlign: 'center',
    color: Color.white,
    fontSize: 25,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  image: {
    height: 125,
    width: 125,
    marginVertical: 90,
    alignSelf: 'center',
  },
  textInputBorder: {
    borderColor: Color.black,
    borderRadius: 25,
    borderWidth: 0.5,
    height: 25,
  },
  SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderWidth: 0.8,
    borderColor: Color.black,
    height: 50,
    marginHorizontal: 30,
    borderRadius: 5,
    margin: 10,
    fontWeight: 'bold',
  },
  ImageStyle: {
    padding: 10,
    marginLeft: 10,
    margin: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    fontSize: 15,
    marginLeft: 35,
    marginTop: -5,
  },
  textInput: {
    // paddingLeft: 10,
    // fontWeight: 'bold',
    // color: Color.grey,
    // fontSize: 20,
    marginBottom: 16,
		borderRadius: 5
  },
  button: {
    marginTop: 15,
	},
});

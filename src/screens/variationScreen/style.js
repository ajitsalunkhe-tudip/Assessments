//@flow
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
  },
  userNameheader:{
    textAlign:'right',
    color: '#8b931b',
    fontSize: 20, 
    fontWeight:'bold',
    padding: 20
  },
  header:{
    textAlign:"center",
    color: '#8b931b',
    fontSize: 20, 
    marginBottom:25,
  },
  buttonText:{
    justifyContent:"center",
    textAlign: 'center',
    alignItems: 'center',
    color: 'yellow',
    alignSelf: 'center',
    fontSize: 20, 
  },
  image:{
    height:125,
    width:125,
    marginVertical: 90,
    alignSelf:"center",
  },
  textInputBorder:{
    borderColor:'black',
    borderRadius:25,
    borderWidth: 0.5,
    height:25
  },
  ButtonStyle: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.8,
    borderColor: '#000',
    height: 50,
    width: 325,
    marginHorizontal:30,
    borderRadius: 5,
    margin: 10,
    fontWeight:'bold',
    marginBottom: 10
  },
  SectionStyle: {
    flexDirection: 'row',    
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.8,
    borderColor: '#000',
    height: 50,
    marginHorizontal:30,
    borderRadius: 5,
    margin: 10,
    fontWeight:'bold'
  },
  IconStyle: {
    padding: 10,
    margin: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  iconContainer:{
    flex:0.15,
    backgroundColor: '#6eb1f7'
  }
});
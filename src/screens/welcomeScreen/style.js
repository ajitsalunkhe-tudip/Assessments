//@flow
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column'
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
    color: 'white',
    fontSize: 25, 
    marginBottom:25,
    fontWeight:'bold'
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
  ImageStyle: {
    padding: 10,
    marginLeft:10,
    margin: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button:{
    textAlign:'center',
    padding:10,
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  buttonStyle:{
    borderColor:'black',
    height:50,width:150,
    borderRadius:5,
    borderWidth: 0.8,
    marginTop:20,
    alignSelf:'center',
    backgroundColor:'grey'
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    fontSize: 15,
    marginLeft:35,
    marginTop: -5
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignSelf:'center',
    backgroundColor: '#fff',
    borderWidth: 0.8,
    borderColor: '#000',
    height: 50,
    width: 350,
    marginHorizontal:30,
    borderRadius: 5,
    marginTop:20,
    fontWeight:'bold',
  },
  buttonText:{
    justifyContent:"center",
    textAlign: 'center',
    alignItems: 'center',
    color: 'yellow',
    alignSelf: 'center',
    fontSize: 20, 
  },
});
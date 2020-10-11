//@flow
import React, {useState, useEffect} from 'react';
import { View, ScrollView , TouchableOpacity, Text, TextInput, Image } from 'react-native'
import style from './style';
import Images from '../../assets';
import {saveUserName} from './../../redux/actions';
import { connect } from 'react-redux';

function WelcomeScreen (props) {
    const { userNameData } = props;
    const [userName, setUserName] = useState(undefined);
    const [userNameError, setUserNameError] = useState(undefined);
   
    const validate = () => {
        const isNameValidated = validateName();
        const { saveUserName } = props;
        if (isNameValidated) {  
            saveUserName(userName);
            props.navigation.navigate('Variation')
        }
    }

    const validateName = () => {
        if (!userName || userName == '') {
          setUserNameError('Please Enter Name');
          return false;
        } else {
            setUserNameError(undefined);
          return true;
        }
    }


    return (
        <>
        <View style= {{backgroundColor:'black', flex: 1}}>
            <ScrollView>    
            <Text style={style.userNameheader}>
               {userNameData == '' ? null : `Welcome ${userNameData}!`}
            </Text> 
            <View style = {style.container}>
                <Image
                    source={Images.logo} 
                    style={style.image} >
                </Image> 
                <Text style={style.header}>Welcome!</Text> 
                <View style={style.SectionStyle}>
                    <Image source={Images.user} style={style.ImageStyle}/>
                    <TextInput style = {{paddingLeft:10,fontWeight:'bold',color:'grey',fontSize:20}}
                        placeholder = "Enter Name"
                        placeholderTextColor='gray'
                        textContentType='telephoneNumber'
                        onChangeText={text => {
                            setUserName(text)
                            validateName()
                        }}
                        maxLength={15}
                        value={userName}/>
                </View>             

                {userNameError && <Text style={style.errorText}>{userNameError}</Text>}

                    <View> 
                        <TouchableOpacity
                            onPress = {() => { validate()}}>
                            <View style={[style.ButtonContainer, { backgroundColor: '#6eb1f7'}]}>
                                <Text style={[style.buttonText, {color: '#fff'}]}>Save</Text> 
                            </View> 
                        </TouchableOpacity>
                    </View> 
                </View>
            </ScrollView>
        </View>  
        </>      
    )
 }

const mapStateToProps = (state) => {
	return {
		userNameData: state.userName,
	}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        saveUserName: (userName) =>  saveUserName(dispatch, userName)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
//@flow
import React, {useState, useEffect} from 'react';
import { View, ScrollView , TouchableOpacity, Text, TextInput, Image } from 'react-native'
import style from './style';
import Images from '../../assets';
import {saveUserName} from './../../redux/actions';
import { connect } from 'react-redux';
import strings from './../../constants/strings';
import Colors from './../../constants/colors';
import {NativeModules} from 'react-native';

 const {EmulatorCheckModule} = NativeModules;

const WelcomeScreen = (props) => {
    const { userNameData } = props;
    const [userName, setUserName] = useState(undefined);
    const [userNameError, setUserNameError] = useState(undefined);

    const validate = () => {
        const isNameValidated = validateName();
        const { saveUserName } = props;
        if (isNameValidated) {  
            //_showToast();
            saveUserName(userName);
            props.navigation.navigate('Variation')
        }
    }

    const validateName = () => {
        if (!userName || userName == '') {
            setUserNameError(strings.welcome.validatename);
            return false;
        } else {
            setUserNameError(undefined);
            return true;
        }
    }

    const _showToast = () => {
        EmulatorCheckModule.showToast(strings.nativeToast.showMessage);
    }

    return (
        <View style= {style.container}>
            <ScrollView>    
                <Text style={style.userNameheader}>
                    {userNameData == '' ? null : `Welcome ${userNameData}!`}
                </Text> 
                <View style = {style.viewContainer}>
                    <Image
                        source={Images.logo} 
                        style={style.image} >
                    </Image> 
                    <Text style={style.header}>{strings.welcome.welcome}</Text> 
                    <View style={style.SectionStyle}>
                        <Image source={Images.user} style={style.ImageStyle}/>
                        <TextInput style = {style.textInput}
                            testID="input_name"
                            placeholder = {strings.welcome.InputPlaceholder}
                            placeholderTextColor={Colors.grey}
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
                            testID="save"
                            onPress = {() => { validate()}}>
                            <View style={[style.ButtonContainer, { backgroundColor: Colors.buttonBackgrond}]}>
                                <Text style={[style.buttonText, {color: Colors.white}]}>{strings.welcome.save}</Text> 
                            </View> 
                        </TouchableOpacity>
                    </View> 
                </View>
            </ScrollView>
        </View>  
    )
 }

const mapStateToProps = (state) => {
	return {
		userNameData: state.userName,
	}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        saveUserName: (userName) => saveUserName(dispatch, userName)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

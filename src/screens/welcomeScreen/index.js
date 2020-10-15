//@flow
import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import style from './style';
import Images from '../../assets';
import {saveUserName} from './../../redux/actions';
import {connect} from 'react-redux';
import strings from './../../util/strings';
import Button from '../../components/Button';
import CustomTextInput from '../../components/TextInput';
import EmultorCheckModule from '../../util/emulator';

function WelcomeScreen(props){
  const {userNameData} = props;
  const [userName, setUserName] = useState(undefined);
  const [userNameError, setUserNameError] = useState(undefined);

  useEffect(() => {
    EmultorCheckModule.showEmulatorToast(strings.nativeToast.showMessage, EmultorCheckModule.SHORT);
  });

  const validate = () => {
    const isNameValidated = validateName();
    const {saveUserName} = props;
    if (isNameValidated) {
      saveUserName(userName);
      props.navigation.navigate('Variation');
    }
  };

  const validateName = () => {
    if (!userName) {
      setUserNameError(strings.welcome.validatename);
    } else {
      setUserNameError(undefined);
    }
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <Text style={style.userNameheader}>
          {userNameData === '' ? null : `Welcome ${userNameData}!`}
        </Text>
        <View style={style.viewContainer}>
          <Image style={style.image} source={Images.logo}></Image>
          <Text style={style.header}>{strings.welcome.welcome}</Text>
          <CustomTextInput
            placeholder={strings.welcome.InputPlaceholder}
            image={Images.user}
            containerStyle={style.textInput}
            onChangeText={(text) => {
              setUserName(text);
              validateName();
            }}
            maxLength={15}
            value={userName}
          />
          {userNameError && (
            <Text style={style.errorText}>{userNameError}</Text>
          )}
          <Button
            containerStyle={style.button}
            text={strings.welcome.save}
            onPress={() => {
              validate();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    userNameData: state.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserName: (userName) => saveUserName(dispatch, userName),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

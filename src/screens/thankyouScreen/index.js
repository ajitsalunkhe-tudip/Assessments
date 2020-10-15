//@flow
import * as React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {connect} from 'react-redux';

function ThankyouScreen(props) {
  return (
    <View style={style.viewContainer}>
      <View style={style.container}>
        <Text style={style.header}>Thank You {props.userNameData}!</Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userNameData: state.userName,
  };
};

export default connect(mapStateToProps)(ThankyouScreen);

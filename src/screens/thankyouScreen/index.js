//@flow
import React from 'react';
import { View, Text  } from 'react-native'
import style from './style';
import { connect } from 'react-redux';

function ThankyouScreen (props) {
    const { userNameData } = props;
    
    return (
        <View style={{backgroundColor:'black', flex:1}}>
            <View style= {style.container}>
                <Text style={style.header}>Thank You {props.userNameData}!</Text>   
            </View>    
        </View>    
    )
}

const mapStateToProps = (state) => {
	return {
		userNameData: state.userName,
	}
}

export default connect(mapStateToProps)(ThankyouScreen);

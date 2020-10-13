//@flow
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style';
import { connect } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import Colors from './../../constants/colors';
import strings from './../../constants/strings';
import thumbIcon from '../../assets/diamond.png'

function VariationScreen (props) {
    const { userNameData } = props;
     
    const variationButton = (viewColor, textColor) => {
        return(
            <View>
                <TouchableOpacity>
                    <View style={[style.ButtonStyle, { backgroundColor: viewColor}]}>
                        <Text style={[style.buttonText, {color: textColor}]}>Press me</Text> 
                    </View> 
                </TouchableOpacity>
            </View>
             
        )
    }
    
        return (
            <View style={{backgroundColor: Colors.black, flex:1}}>
            <Text style={style.userNameheader}>Welcome {userNameData}!</Text> 
                <View style= {style.container}>
                    
                    <Text style={style.header}>{strings.variation.textVariation}</Text> 

                    {variationButton( Colors.black, Colors.variationBtnOne)}
                    {variationButton( Colors.variationBtnbackgroundTwo, Colors.variationBtnTwo)}
                    {variationButton( Colors.buttonBackgrond, Colors.white)}        

                    <SwipeButton
                        disabled={false}
                        swipeSuccessThreshold={80}
                        height={50}
                        width={325}
                        title= {strings.variation.swipebuttonText}
                        titleColor='#5a8dc4'
                        titleFontSize={20}
                        titleStyles='bold'
                        thumbIconImageSource={thumbIcon}
                        onSwipeSuccess={() => {
                           props.navigation.navigate('ThankYou');
                        }}
                        shouldResetAfterSuccess={true}
                        railFillBackgroundColor={Colors.buttonBackgrond}
                        railFillBorderColor={Colors.swipeBtnBorder}
                        thumbIconBackgroundColor={Colors.buttonBackgrond}
                        thumbIconBorderColor={Colors.buttonBackgrond}
                        railBackgroundColor={Colors.black}
                        railBorderColor={Colors.swipeBtnBorder}
                    />

                </View>
            </View>        
        )
    }


const mapStateToProps = (state) => {
	return {
		userNameData: state.userName,
	}
}

export default connect(mapStateToProps)(VariationScreen);
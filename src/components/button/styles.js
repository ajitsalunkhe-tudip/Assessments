import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: colors.buttonBackgrond,
        paddingVertical: 16,
        paddingHorizontal: 45,
        alignSelf: 'center',
        borderRadius: 5,
    },
    text: {
        color: colors.white,
        fontSize: 15,
    },
});

export default styles;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';

import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
        color: 'white',
        fontWeight: '700'
    },
    red: {
        color: 'red'
    },
    green: {
        color: 'green'
    },
    blue: {
        blue: 'blue'
    },
    small: {
        fontSize: 12
    },
    medium: {
        fontSize: 16
    },
    big: {
        fontSize: 20
    }
})

export default function StyledText ({children, text, red, green, blue, small, medium, big}) {
    const textStyles = [
        styles.text,
        red && styles.red,
        green && styles.green,
        blue && styles.blue,
        small && styles.small,
        medium && styles.medium,
        big && styles.big
    ]

    return(
        <Text style={styles.text}>{children}</Text>
    )
}
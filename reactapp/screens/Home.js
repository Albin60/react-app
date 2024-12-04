import { Button } from "react-native-web";
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Welcome to Home Sceen</Text>
            <Button title="Go to About Screen" onPress={() navigation.navigate('About')}></Button>
            <Text>Drawer  Navigation Button Functionality</Text>
            <Button title="Open Drawer" onPress={()=> navigation.OpenDrawer()}></Button>

        </View>

        <View style ={styles.iconsContainer}>
            <Icon name="cellphone-iphone" iconText="Iphone"></Icon>
            <Icon name ="android" iconText="Samsung"></Icon>
            <Icon name="laptop" iconText="Laptop Lenovo"></Icon>
        </View>
        <View style={styles.iconsContainer}>
            <Icon name="tablet" iconText="Tablet"></Icon>
            <Icon name="mouse" iconText="Mouse"></Icon>
            <Icon name ="keyboard-outline" iconText="Keyboard"></Icon>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
        },

        iconsContainer: {
            width'90'%,
            alignSelf: 'center',
            marginTop: 30,
            flexDirection:'row',
            justifyContent:'space-between'
        }
    });

    export default Home;

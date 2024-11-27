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
    );
    }
    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center',
        },
    });

    export default Home;

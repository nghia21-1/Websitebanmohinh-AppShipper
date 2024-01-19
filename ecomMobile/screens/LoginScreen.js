import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { handleLoginService } from '../services/userService'
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let hadleLogin = async () => {
        let res = await handleLoginService({
            email: email,
            password: password
        })


        if (res && res.errCode === 0) {

            await AsyncStorage.setItem('userData', JSON.stringify(res.user))
            await AsyncStorage.setItem('token', JSON.stringify(res.accessToken))

            navigation.navigate("HomeScreen")
        }
        else {

            alert(res.errMessage)
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/rn-social-logo1.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>wibu Shop</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Đăng nhập"
                onPress={() => hadleLogin()}
            />
        </ScrollView>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {

        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',

    },
});
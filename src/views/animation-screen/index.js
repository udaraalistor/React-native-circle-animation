import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TouchableOpacity,
    Easing

} from 'react-native';
import StatusBar from '../status-bar';

let spinValue = new Animated.Value(0);

Animated.loop(
    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 18000,
            easing: Easing.linear,
            useNativeDriver: true
        }
    )
).start()

const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
})

const spin2 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['145deg', '405deg']
})

const spin3 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-0deg', '-360deg']
})



class App extends Component {


    render() {


        return (
            <View style={{ height: '100%', width: '100%', backgroundColor: '#FFD868' }}>
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <StatusBar backgroundColor={"#FFD868"}
                        barStyle="dark-content" />


                    <Animated.View style={styles.container}>

                        <Animated.View
                            style={styles.img}
                        >
                            <Animated.Image style={{ width: 30, height: 30, marginTop: 3 }} source={require('../../assets/burgericon.png')} />


                        </Animated.View>

                        <Animated.View
                            style={styles.img_m}
                        >
                            <Animated.Image style={{ width: 30, height: 30, marginTop: 3 }} source={require('../../assets/burgericon.png')} />


                        </Animated.View>

                    </Animated.View>


                    <Animated.View style={styles.container_}>

                        <Animated.View
                            style={styles.img_}
                        >
                            <Animated.Image style={{ width: 30, height: 30, marginTop: 3 }} source={require('../../assets/burgericon.png')} />



                        </Animated.View>

                        <Animated.View
                            style={styles.img_1}
                        >
                            <Animated.Image style={{ width: 30, height: 30, marginTop: 3 }} source={require('../../assets/burgericon.png')} />



                        </Animated.View>

                        <Animated.View
                            style={styles.img_2}
                        >
                            <Animated.Image style={{ width: 30, height: 30, marginTop: 3 }} source={require('../../assets/burgericon.png')} />



                        </Animated.View>

                        <Animated.View
                            style={styles.img_3}
                        >
                            <Animated.Image style={{ width: 30, height: 30, marginTop: 3 }} source={require('../../assets/burgericon.png')} />



                        </Animated.View>

                    </Animated.View>

                    <View style={styles.container__1}>

                        <View
                            style={styles.img__1}
                        >
                            <Image style={{ width: 70, height: 70, marginTop: 3 }} source={require('../../assets/res.png')} />


                        </View>

                    </View>


                </View>

                <View style={{ width: 400, height: 400, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center',marginTop: 220 }}>
                    <Image style={{ width: 400, height: 400 }} source={require('../../assets/logo.png')} />

                </View>

            </View>

        )
    }
};

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 20,
        // translateX: 50,
        // translateY: 50,
        width: 300,
        height: 300,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: '#F94835',
        borderRadius: 150,
        transform: [{ rotate: spin }],


    },

    container_: {
        position: 'absolute',
        marginTop: 75,
        marginLeft: 20,
        // translateX: 50,
        // translateY: 50,
        width: 210,
        height: 210,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: '#F94835',
        borderRadius: 105,
        transform: [{ rotate: spin3 }],


    },

    container__: {
        position: 'absolute',
        marginTop: 125,
        marginLeft: 20,
        // translateX: 50,
        // translateY: 50,
        width: 110,
        height: 110,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: '#6A99FF',
        borderRadius: 55,
        transform: [{ rotate: spin }],


    },
    container__1: {
        position: 'absolute',
        marginTop: 125,
        marginLeft: 20,
        // translateX: 50,
        // translateY: 50,
        width: 110,
        height: 110,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: '#F94835',
        borderRadius: 55,
    },

    img: {
        marginTop: 25,
        marginLeft: 25,
        width: 38,
        height: 38,
        transform: [{ rotate: spin }],
        backgroundColor: '#FBB040',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },

    img_m: {
        marginTop: 225,
        marginLeft: 245,
        width: 38,
        height: 38,
        transform: [{ rotate: spin }],
        backgroundColor: '#FBB040',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },

    img_: {
        marginTop: -20,
        marginLeft: 80,
        width: 38,
        height: 38,
        transform: [{ rotate: spin3 }],
        backgroundColor: '#FBB040',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },

    img__: {
        marginTop: 30,
        width: 38,
        height: 38,
        transform: [{ rotate: spin3 }],
        backgroundColor: '#FFFFFF',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },
    img__1: {
        marginTop: 12,
        width: 70,
        height: 70,
        backgroundColor: '#FFD868',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 18
    },

    img_1: {
        marginTop: 80,
        marginLeft: 190,
        width: 38,
        height: 38,
        transform: [{ rotate: spin3 }],
        backgroundColor: '#FBB040',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },

    img_2: {
        marginTop: 185,
        marginLeft: 90,
        width: 38,
        height: 38,
        transform: [{ rotate: spin3 }],
        backgroundColor: '#FBB040',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },

    img_3: {
        marginTop: 80,
        marginLeft: -20,
        width: 38,
        height: 38,
        transform: [{ rotate: spin3 }],
        backgroundColor: '#FBB040',
        borderRadius: 38,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center'
    },


});

export default App;
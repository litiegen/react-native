import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper';
import { Button } from '@ant-design/react-native'

export default class Hpages extends Component {
    start= ()=>{
        AsyncStorage.setItem('isInstall','true')
        this.props.isFirst();
    }

    render() {
        return (
            <Swiper loop = {false}
            dot={<View style={{width:50,height:8,backgroundColor:'black'}}/>}
            activeDot={<View style={{width:50,height:8,backgroundColor:'white'}} />}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../assets/slide1.png')}/> 
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../assets/slide2.png')} /> 
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../assets/slide3.png')} />
                    <Button onPress={this.start} style={styles.start}>
                        <Text style={{color:'white'}}>开始体验</Text>
                    </Button>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    slide1:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    start:{
        right:0,
        width:120,
        height:40,
        bottom:50,
        borderRadius:20,
        position:'absolute',
        backgroundColor:'black',
    },
    img:{
        width:"100%",
        height:"100%"
    }
})
//首页
//HHome.js
import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
	StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { Icon } from '@ant-design/react-native';
const {width} = Dimensions.get('window')

const HHome=()=>{
    return(
        <View>
            <View style={styles.tops}>
                <View style={styles.search}>
                    <Icon color={'#708090'} name='search'/>
                    <TextInput placeholderTextColor='#708090'
                    placeholder='请输入您要搜索的关键字'/>
                </View>
                <Icon style={styles.icon} color={'#ffffff'} name='shop'/>
            </View>
            
            <View style={{height:220}}>
                <ScrollView pagingEnabled={true} indicatorStyle='white'
                style={{indicatorStyle:'white'}} horizontal={true}
                showsHorizontalScrollIndicator={true}>
                    <View style={styles.slide}>
                        <Image style={{width:'100%',height:'100%'}}
                        source={require('../assets/lun3.png')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={{width:'100%',height:'100%'}}
                        source={require('../assets/lun2.png')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={{width:'100%',height:'100%'}}
                        source={require('../assets/lun1.png')} />
                    </View>
                </ScrollView>
            </View>
            
            <ScrollView>
                <View style={styles.under}>
                    <View style={styles.lie}>
                        <View style={styles.underbox}>
                            <Image style={{width:40,height:40}}
                            source={require('../assets/knife.png')}/>
                        </View>
                        <Text style={styles.text1}>维修保养</Text>
                        <Text style={{marginLeft:210,color:'#a7a7a7',fontSize:20}}>></Text>
                    </View>
                    
                    <View style={styles.lie}>
                        <View style={styles.underbox}>
                            <Image style={{width:40,height:40}}
                            source={require('../assets/knife.png')}/>
                        </View>
                        <Text style={styles.text1}>购买优惠</Text>
                        <Text style={{marginLeft:210,color:'#a7a7a7',fontSize:20}}>></Text>
                    </View>
                    
                    <View style={styles.lie}>
                        <View style={styles.underbox}>
                            <Image style={{width:40,height:40}}
                            source={require('../assets/knife.png')}/>
                        </View>
                        <Text style={styles.text1}>出行接送</Text>
                        <Text style={{marginLeft:210,color:'#a7a7a7',fontSize:20}}>></Text>
                    </View>
                    
                    <View style={styles.lie}>
                        <View style={styles.underbox}>
                            <Image  style={{width:40,height:40}}
                            source={require('../assets/knife.png')}/>
                        </View>
                        <Text style={styles.text1}>娱乐活动</Text>
                        <Text style={{marginLeft:215,color:'#a7a7a7',fontSize:20}}>></Text>
                    </View>
                    
                    <View style={styles.foot}>
                        <TouchableOpacity style={styles.footbut}>
                            <Text style={{color:'#ffffff'}}>发布需求</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.footword}>
                        ©NIC LI 版权所有
                    </Text>
                </View>
            </ScrollView>
        </View>
	)
}
const styles = StyleSheet.create({
    tops:{
		height:55,
        width:'100%',
        alignItems:'center',
		flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'black'
	},
	search:{
		height:40,
		width:'80%',
		paddingLeft:10,
		borderRadius:20,
		alignItems:'center',
		flexDirection:'row',	
		backgroundColor:'#ffffff'
	},
	icon:{
        fontSize:30,
        marginLeft:25,
	},
    slide:{
        height:220,
        width:width,
        alignItems:'center',
        justifyContent:'center'
    },
    under:{
		height:850,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'#f5f5f5',
		justifyContent:'space-evenly'
    },
    lie:{
        height:90,
        width:'100%',
        marginTop:10,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
    text1:{
        fontSize:17,
        marginLeft:30,
        color:'#333333'
    },
    underbox:{
        width:75,
        height:75,
        marginLeft:20,
        borderRadius:75,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffcccc',
    },
    foot:{
        width:'100%',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    footbut:{
        height:45,
        width:'80%',
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    footword:{
        fontSize:12,
        marginTop:40,
        color:'#767676'
    }
});

export default HHome;
//Hrelease.js
//我的发布页面
import React, { Component } from 'react'
import {
    View,
    Text,
    ToastAndroid,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

export default class Hrelease extends Component {
    constructor(){
        super()
        this.state={
            count:1,
            tits:[]
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=1&limit=10')
        .then(res=>res.json())
        .then(res=>{
            this.setState({tits:res.data})
        })
    }
    
    up=()=>{
        this.setState({count:this.state.count + 1})
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.count+'&limit=10')
        .then(res=>res.json())
        .then(res=>{
            this.setState({tits:res.data})
        })
    }

    down=()=>{
        this.setState({count:this.state.count - 1})
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.count+'&limit=10')
        .then(res=>res.json())
        .then(res=>{
            this.setState({tits:res.data})
            if(this.state.count<1){
                this.setState({count:1})
                ToastAndroid.show('已经没有上一页了！！！',100);
            }
        })
    }
    
    render() {
        const styles = StyleSheet.create({
            top:{
                color:'red'
            },
            topp:{
                height:55,
                flexDirection:'row',
                backgroundColor:'#f23030',
                justifyContent:'flex-start'
            },
            icon1:{
                fontSize:30,
                marginTop:10,
                marginLeft:10,
                color:'#ffffff'
            },
            text1:{
                fontSize:20,
                marginTop:12,
                marginLeft:'30%',
                color:'#ffffff',
                fontWeight:'bold'
            },
            icon2:{
                width:100,
                fontSize:35,
                marginTop:10,
                marginLeft:'30%',
                color:'#ffffff'
            },
            view1:{
                height:30,
                fontSize:15,
                marginTop:15,
                flexDirection:'row',
                alignContent:'center'
            },
            view2:{
                height:60,
                width:'100%',
                marginTop:20,
                flexDirection:'row',
                alignContent:'center',
                justifyContent:'space-evenly'
            },
            view3:{
                height:45,
                width:'30%',
                borderRadius:40,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#f23030'
            },
            view4:{
                height:45,
                width:'30%',
                borderRadius:40,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#f23030'
            }
        });
        
        return (
            <View style={{backgroundColor:"#ffffff"}}>
                <View style={styles.topp}>
                    <TouchableOpacity onPress={Actions.pop}>
                        <Icon style={styles.icon1} name='left'/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>我的发布</Text>
                    <Icon style={styles.icon2} name='dash'/>
                </View>
                {
                    this.state.tits.map((item,index)=>(
                        <View>
                            <View style={styles.view1}>
                                <Text style={{width:'60%',marginLeft:10}}>
                                    {
                                        item.title.length>15?item.title.substr(0,15)+"...":item.title
                                    }
                                </Text>
                                <Text style={{marginLeft:'3%'}}>
                                    {
                                        item.create_at.length>10?item.create_at.substr(0,10):item.title
                                    }
                                </Text>
                                <Text style={{marginLeft:'3%'}}>
                                    {
                                        Math.round(Math.random(0,1))<1?<Text style={styles.top}>待回复</Text>:<Text>已回复</Text>
                                    }
                                </Text>
                            </View>
                            <View style={{height:0.7,backgroundColor:'rgb(247,247,247)'}}></View>
                        </View>
                        )
                    )
                }
                
                <View style={styles.view2}>
                    <TouchableOpacity onPress={()=>this.down()} style={styles.view3}>
                        <Text style={{color:'#ffffff'}}>上一页</Text>
                    </TouchableOpacity>

                    <Text style={{marginTop:12}}>第{this.state.count}页</Text>

                    <TouchableOpacity onPress={()=>this.up()} style={styles.view4}>
                        <Text style={{color:'#ffffff'}}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
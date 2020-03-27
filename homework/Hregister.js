import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	ImageBackground,
	Alert
}from 'react-native';
import Hbox from './Hbox'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from './utils/api';

export default class Hregister extends Component {
	constructor(){
		super()
		this.state = {
			username:'',
            pwd:'',
            pwd2:'',
			isloading:false
		}
	}
	
	userhandle=(text)=>{
		this.setState({username:text})
	}
	pwdhandle=(text)=>{
		this.setState({pwd:text})
	}
    pwdhandle2=(text)=>{
		this.setState({pwd2:text})
	}
	
	login=()=>{
		if(this.state.pwd != this.state.pwd2){
        Alert.alert('两次密码输入不正确')
    }else if(this.state.username==''){
		Alert.alert('没有用户名！')
    }
    else{
		this.setState({isloading:true})
		myFetch.post('/login',{
			username:this.state.username,
			pwd:this.state.pwd
		}).then(res=>{
			AsyncStorage.setItem('user',JSON.stringify(res.data))
			.then(()=>{
				this.setState({isloading:false})
				Actions.login();
			})
		})
	}
}

render(){
	return(
		<View style={{flex: 1}}>
			<ImageBackground style={{alignItems:'center',
			alignItems: 'center', width:'100%',height:'100%'}}
			source={require('../assets/slide2.png')}>
				<Text style={{marginTop:100,fontSize:40,color:'white'}}>注 册</Text>
				<View style={{ marginTop:100,width:'80%',marginRight:10,
				borderBottomColor: '#ffffff',borderBottomWidth: 2,
				flexDirection: 'row',alignItems: 'center',paddingLeft: 20,}}>
					<Icon name="user" color="#ffffff"/>
					<TextInput placeholder="用户名"
					style={{fontSize:18,color:'white'}}
					placeholderTextColor='white' 
					onChangeText={this.userhandle}/>
				</View>
				
				<View style={{width:'80%',marginRight:10,borderBottomColor:'#ffffff',
				borderBottomWidth:2,flexDirection:'row',alignItems:'center',paddingLeft:20}}>
					<Icon fontSize='20' name="key" color="white"/>
					<TextInput style={{fontSize:18,color:'white'}}
					placeholderTextColor='white' placeholder="密码"
					secureTextEntry={true} onChangeText={this.pwdhandle}/>
				</View>
				
				<View style={{width:'80%',marginRight:10,borderBottomColor:'#ffffff',
				borderBottomWidth:2,flexDirection:'row',alignItems:'center',paddingLeft: 20}}>
					<Icon fontSize='20' name="key" color="white"/>
					<TextInput style={{fontSize:18,color:'white'}}
					placeholderTextColor='white' placeholder="再次输入相同的密码"
					secureTextEntry={true} onChangeText={this.pwdhandle2}/>
				</View>
				
				<TouchableOpacity style={{width:'81%',height:40,
				backgroundColor:'#ffffff',marginTop:30,alignItems:'center',
				justifyContent:'center',borderRadius:2}}
				onPress={this.login}>
					<Text style={{fontSize:18}}>注 册</Text>
				</TouchableOpacity>
			</ImageBackground>
			{
				this.state.isloading?<Hbox></Hbox>:null
			}
		</View>
		)
	}
}
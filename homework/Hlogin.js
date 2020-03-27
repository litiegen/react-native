import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	ImageBackground,
	StyleSheet
}from 'react-native';
import Hbox from './Hbox'
import { myFetch } from './utils/api';

import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

export default class Hlogin extends Component {
	constructor(){
		super()
		this.state = {
			username:'',
			pwd:'',
			isloading:false
		}
	}
	
	userhandle=(text)=>{
		this.setState({username:text})
	}
	pwdhandle=(text)=>{
		this.setState({pwd:text})
	}

	login=()=>{
		this.setState({isloading:true})
		myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        })
        .then(res=>{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false})
                Actions.home();
            })
        })
	}
	
	register=()=>{
		Actions.register();
	}
	
	render(){
		return(
			<View style={{flex: 1}}>
				<ImageBackground style={styles.image}
				source={require('../assets/slide2.png')}>
					<View style={styles.box1}>
						<Icon name="user" color="#ffffff"/>
						<TextInput placeholder="用户名"
						style={{fontSize:18,color:'white'}}
						placeholderTextColor='white'
						onChangeText={this.userhandle}/>
					</View>
					
					<View style={styles.box1}>
						<Icon fontSize='20' name="key" color="white"/>
						<TextInput placeholder="密码"
						style={{fontSize:18,color:'white'}}
						placeholderTextColor='white'
						secureTextEntry={true} 
						onChangeText={this.pwdhandle}/>
					</View>
					
					<TouchableOpacity style={styles.button} onPress={this.login}>
						<Text style={{fontSize:18}}>登 录</Text>
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.zhuce} onPress={this.register}>
						<Text style={{color:'white',fontSize:14}}>注 册</Text>
					</TouchableOpacity>
				</ImageBackground>
				{
					this.state.isloading?<Hbox></Hbox>:null
				}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	image:{
		width:'100%',
		height:'100%',
		alignItems:'center',
		justifyContent:'center'
	},
	box1:{
		width:'80%',
		marginRight:10,
		paddingLeft:20,
		alignItems:'center',
		flexDirection:'row',
		borderBottomWidth:2,
		borderBottomColor:'#ffffff'
	},
	button:{
		height:40,
		width:'81%',
		marginTop:30,
		borderRadius:2,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#ffffff'
	},
	zhuce:{
		height:40,
		width:'10%',
		marginTop:10,
		marginLeft:320,
		borderRadius:2,
		alignItems:'center',
		justifyContent:'center'
	}
})
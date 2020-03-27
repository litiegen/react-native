//个人中心页
//Huser.js
import React, { Component } from 'react'
import {
    View,
	Text,
	Image,
	StyleSheet,
	ScrollView, 
    AsyncStorage,
	TouchableOpacity
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
export default class Huser extends Component {
	constructor(){
        super();
        this.state = {
			imageUrl:'',
			count:0,
			username:'未登录',
			out:'点我退出'
        }
	}
	
	takephoto = async()=>{
		ImagePicker.showImagePicker((res) => {
            if (res.didCancel) {
                return;
            } else if (res.error) {
                console.log('Error:', res.error);
            } else if (res.customButton) {
                console.log('custom:', res.customButton);
            } else {
                AsyncStorage.setItem('key', res.uri,
                ()=>{console.log('success')}
                );
                const source = { uri: res.uri };
                this.setState({
                    imageUrl: source,
                }); 
            }
		});
	}
    componentDidMount(){
		const valuea = AsyncStorage.getItem('key');
		valuea.then((res)=>{
			const source = { uri:res }
			this.setState({
                imageUrl:source
			})
		})
		AsyncStorage.getItem('user').then((res)=>{
			this.setState({
				username:res
			})
		})
	}
	
	componentWillUpdate(){
		AsyncStorage.getItem('user').then((res)=>{
			if(res!=null){
				this.setState({
					username:res,
					out:''
				})
			}
			else{
				this.setState({
					username:'未登录',
					out:'点我登录'
				})
			}
		})
	}
	
	render() {
		return(
			<ScrollView>
				<View style={{height:1000}}>
					<View style={styles.top}>
						<View style={styles.headpage}>
					<TouchableOpacity onPress={()=>{this.takephoto()}}>
						<Image 
						style={styles.image} 
						source={this.state.imageUrl}/>
					</TouchableOpacity>
					</View>
					
					<Text style={styles.LTG}>{this.state.username}</Text>
					<TouchableOpacity
					style={{marginLeft:300,marginTop:50}}
					onPress={()=>Actions.login()}>
						<Text style={{fontSize:18,color:'white'}}>
							{this.state.out}
						</Text>
					</TouchableOpacity>
				</View>
				
				<View style={styles.middle}>
					<Icon style={{fontSize:30,marginLeft:10}}
					color={'#d6d6d6'} name="user"/>
					<Text style={{marginLeft:10,fontSize:15}}>
						我的个人中心
					</Text>
				</View>
				
				<View style={styles.under}>
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='setting' />
						<Text style={styles.word}>账户管理</Text>
					</View>
					
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='environment' />
						<Text style={styles.word}>收货地址</Text>
					</View>
					
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='idcard' />
						<Text style={styles.word}>我的信息</Text>
					</View>

					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='container' />
						<Text style={styles.word}>我的订单</Text>
					</View>

					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='qrcode' />
						<Text style={styles.word}>我的二维码</Text>
					</View>

					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='pound' />
						<Text style={styles.word}>我的积分</Text>
					</View>

					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='star' />
						<Text style={styles.word}>我的收藏</Text>
					</View>
				</View>
				
				<View style={styles.under3}>
					<Icon style={{fontSize:30,marginLeft:10}} color={'#d6d6d6'} name="tag"/>
					<Text style={{marginLeft:10,fontSize:15}}>
						E族活动
					</Text>
				</View>

				<View style={styles.under2}>
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='tool' />
						<Text style={styles.word}>居家维修保养</Text>
					</View>
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='car' />
						<Text style={styles.word}>出行接送</Text>
					</View>
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='user' />
						<Text style={styles.word}>我的受赠人</Text>
					</View>
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='bank' />
						<Text style={styles.word}>我的住宿优惠</Text>
					</View>
					<View style={styles.box}>
						<Icon style={{fontSize:25}} name='flag' />
						<Text style={styles.word}>我的活动</Text>
					</View>
					<TouchableOpacity onPress={()=>Actions.release()}>
						<View style={styles.box} >
							<Icon style={{fontSize:25}} name='form' />
							<Text style={styles.word}>我的发布</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={{marginTop:20,width:'100%',height:40,alignItems:'center',justifyContent:'center'}}>
					<Text style={{color:'#808080'}}>{this.state.username} | <Text onPress={()=>AsyncStorage.removeItem('user')}>
						退出
						</Text>
					</Text>
				</View>
			</View>
		</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
	top:{
		height:300,
		width:'100%',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#f23030'
	},
	headpage:{
		width:100,
		height:100,
		borderRadius:100,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#ffffff'
	},
	image:{
		width:95,
		height:95,
		borderRadius:100
	},
	LTG:{
		fontSize:17,
		marginTop:20,
		color:'#ffffff'
	},
	middle:{
		height:60,
		width:'100%',
		alignItems:'center',
		flexDirection:'row',
		backgroundColor:'#ffffff'			
	},
	under:{
		height:300,
		marginTop:2,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'#ffffff',
		justifyContent:'flex-start'
	},
	under2:{
		height:200,
		marginTop:2,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'#ffffff',
		justifyContent:'space-evenly'
	},
	under3:{
		height:60,
		marginTop:2,
		width:'100%',
		alignItems:'center',
		flexDirection:'row',
		backgroundColor:'#ffffff'
	},
	box:{
		width:120,
		height:80,
		marginTop:15,
		marginLeft:24,
		alignItems:'center',
		justifyContent:'center'
	},
	word:{
		fontSize:16,
		marginTop:5,
		color:"#a1a1a1"
	},
	but:{
		width:100,
		height: 40,
		color: '#fff',
		borderRadius: 20,
		backgroundColor:'purple',
		textAlignVertical: 'center'
	}
});
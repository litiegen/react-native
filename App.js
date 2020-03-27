//App.js
import React,{useState,useEffect} from 'react';
import {
	View,
	BackHandler,
	ToastAndroid,
    AsyncStorage,
}from 'react-native';
import {
	Router,
	Scene,
	Tabs,
	Lightbox,
	Modal,
	Overlay,
	Actions
}from 'react-native-router-flux';

import HHome from './homework/HHome';
import Huser from './homework/Huser';
import Hshop from './homework/Hshop';
import Hrelease from './homework/Hrelease';
import Hlogin from './homework/Hlogin';
import Hregister from './homework/Hregister';
import SwiperPages from './homework/Hpages';

import {Icon} from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	
	let init=()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			// console.log('isinstall',res);
			if(res){
				setInstall(false);
			}
		})
		// AsyncStorage.clear();
    	AsyncStorage.getItem('user')
      	.then(res=>{
        	let user=JSON.parse(res)
        	if(!user){
          	SplashScreen.hide();
        	}
        	if(user&&user.token){
				console.log(user.token)
          	setLogin(true);
          	SplashScreen.hide();
        	}
		})
	}
	useEffect(()=>{
		 init()

	},[])
	
	let afterInstall = ()=>{
		// console.log('after install')
		setInstall(false)
	}
	
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPages isFirst={afterInstall} />
		</View>
	}
	
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == '_home'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				else if(Actions.currentScene == 'login'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					
					}
				}
				else{
					console.log(Actions.currentScene)
					Actions.pop();
          			return true;
				}
				
			}}
		>
		<Overlay>
				<Modal key="modal" hideNavBar>
					<Lightbox key="lightbox">
						

							<Scene key="root">
								<Tabs key='tabbar' hideNavBar
								activeTintColor='black'
								inactiveTintColor='#b4b4b4'
								tabBarStyle={{backgroundColor:'#ffffff'}}>

									<Scene key='home' title='首页' hideNavBar
									icon={({focused})=>
									<Icon color={focused?'black':'#b4b4b4'} name="home"/>
									} component={HHome}/>

									<Scene key='shop' title='商品分类' hideNavBar
									icon={({focused})=>
									<Icon color={focused?'black':'#b4b4b4'} name="shop"/>
									} component={Hshop}/>

									<Scene key='user' title="个人中心" icon={({focused})=>
									<Icon color={focused?'black':'#b4b4b4'} name='user'/>}>
										<Scene hideNavBar key='user' component={Huser}/>
										<Scene title="我的发布" hideNavBar hideTabBar 
										key='release' component={Hrelease}/>
									</Scene>
								</Tabs>
							</Scene>
					</Lightbox>
					<Scene initial={!isLogin} key="login" component={Hlogin}/>
					<Scene key="register" component={Hregister}/>
				</Modal>
			</Overlay>
		</Router>
	)
}
export default App;
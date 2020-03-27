//App.js
import React,{useState,useEffect} from 'react';
import {
	View,
	Text,
	BackHandler,
	ToastAndroid,
    AsyncStorage,
}from 'react-native';
import {
	Router,
	Scene,
	Tabs,
	Drawer,
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
	
	useEffect(()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(res){
				setInstall(false);
			}
		})
        AsyncStorage.getItem('user')
        .then(res=>{
			let user = JSON.parse(res)
            // console.log(user)
            if(!user){
				SplashScreen.hide();
            }
            if(user){
				setLogin(true);
                console.log(user)
                SplashScreen.hide();
				console.log('2'+isLogin)
			}
		})
	},[])
	
	let aka = () =>{
		setInstall(false)
	}
	
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPages isFirst={aka} />
		</View>
	}
	
	return (
		<Router
		backAndroidHandler={()=>{
			if(Actions.currentScene != 'home'){
				Actions.pop();
				return true;
			}else{
				if(new Date().getTime()-now<2000){
					BackHandler.exitApp();
				}else{
					ToastAndroid.show('确定要退出吗',100);
					now = new Date().getTime();
					return true;
				}
			}
		}}>
			<Overlay>
				<Modal key="modal" hideNavBar>
					<Lightbox key="lightbox">
						<Drawer key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}>

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
						</Drawer>
					</Lightbox>
					<Scene initial={!isLogin} key="login" component={Hlogin}/>
					<Scene key="register" component={Hregister}/>
				</Modal>
			</Overlay>
		</Router>
	)
}
export default App;
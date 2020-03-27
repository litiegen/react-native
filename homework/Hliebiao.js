import React from 'react';
import {
    View,
	Text,
	Image,
	TextInput,
	StyleSheet,
    ScrollView
} from 'react-native';

const Hliebiao=()=>{
	return(
		<View style={styles.tops}>
			<View style={styles.search}>
				<TextInput placeholderTextColor='#999999'
				placeholder='请输入商品名称'/>
				<Image style={styles.icon} source={require('../assets/search.png')} />
			</View>
			
			<View style={styles.middle}>
				<Text style={styles.text1}>综合</Text>
				<Text style={styles.text2}>销量</Text>
				<Text style={styles.text2}>新品</Text>
				<Text style={styles.text2}>价格</Text>
				<Text style={styles.text2}>信用</Text>
			</View>
			
			<ScrollView>
				<View style={styles.under}>
					<View style={styles.box}>
						<Image style={styles.image}
						source={require('../assets/Oishi.png')} />
						<Text style={styles.text3}>
							Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
						</Text>
						<Text style={styles.text4}>36.00</Text>
					</View>

					<View style={styles.box}>
						<Image style={styles.image}
						source={require('../assets/chips.png')} />
						<Text style={styles.text3}>
							Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
						</Text>
						<Text style={styles.text4}>36.00</Text>
					</View>

					<View style={styles.box}>
						<Image style={styles.image}
						source={require('../assets/Oishi.png')} />
						<Text style={styles.text3}>
							Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
						</Text>
						<Text style={styles.text4}>36.00</Text>
					</View>

					<View style={styles.box}>
						<Image style={styles.image}
						source={require('../assets/chips.png')} />
						<Text style={styles.text3}>
							Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
						</Text>
						<Text style={styles.text4}>36.00</Text>
					</View>

					<View style={styles.box}>
						<Image style={styles.image}
						source={require('../assets/Oishi.png')} />
						<Text style={styles.text3}>
							Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
						</Text>
						<Text style={styles.text4}>36.00</Text>
					</View>

					<View style={styles.box}>
						<Image style={styles.image}
						source={require('../assets/chips.png')} />
						<Text style={styles.text3}>
							Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
						</Text>
						<Text style={styles.text4}>36.00</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	tops:{
		height:60,
		width:'100%',
		flexDirection:'row',
		backgroundColor:'#fff',
		justifyContent:'center'
	},
	search:{
		height:40,
		width:'90%',
		marginTop:10,
		paddingLeft:10,
		borderRadius:3,
		alignItems:'center',
		flexDirection:'row',	
		backgroundColor:'#eeeeee'
	},
	icon:{
		width:25,
		height:25,
		marginLeft:250
	},
	middle:{
		height:50,
		marginTop:2,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'white',
		justifyContent:'space-evenly'
	},
	text1:{
		fontSize:15,
		marginTop:15,
		color:'#f68b8b'
	},
	text2:{
		fontSize:15,
		marginTop:15,
		color:'#494949'
	},
	under:{
		height:1100,
		width:'100%',
		flexWrap:'wrap',
		flexDirection:'row',
		backgroundColor:'#f4f4f4',
		justifyContent:'space-evenly'
	},
	box:{
		width:205,
		height:300,
		marginTop:10,
		backgroundColor:'#fff'
	},
	image:{
		width:140,
		height:140,
		marginTop:35,
		marginLeft:45	
	},
	text3:{
		width:'90%',
		marginTop:30,
		marginLeft:10,
		color:'#666666'
	},
	text4:{
		marginTop:15,
		marginLeft:10,
		color:'#f23030'
	}
});

export default Hliebiao;
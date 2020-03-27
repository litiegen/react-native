import {AppRegistry} from 'react-native';
import App from './App';
// 入口名称
import {name as appName} from './app.json';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告

// 注册根组件
AppRegistry.registerComponent(appName, () => App);

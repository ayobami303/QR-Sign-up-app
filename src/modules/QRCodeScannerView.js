import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import QRCodeScanner from '../utils/QRCodeScannerUtil'
// import QRCodeScanner from 'react-native-qrcode-scanner'
import {Button} from 'react-native-elements'

import {iconsMap} from '../utils/AppIcons'

class QRCodeScannerView extends Component{
	constructor(props){
		super(props)
		// this.state={

		// }
	}

	_reRender = () =>{
		// this.scanner.reactivate()
		// this.scanner._setScanning(false)
		// this.forceUpdate()
	}

	_onSuccess = (e) => {
		// alert(e.data)
		// this.scanner.reactivate()
		this.props.navigator.showModal({
			screen: 'sign_up.signupForm',
			title: 'Signup',
			animated: true,
			animationType: 'fade',
			passProps:{
				action:this._reRender
			},
			// navigatorButtons:{
			// 	leftButtons:[{
			// 		id:'close',
			// 		icon: iconsMap['ios-close']
			// 	}]
			// }			
		})
		// this.scanner.reactivate()
	}

	render() {

		let scanner;

	    const startScan = () => {
			if (scanner) {
				scanner.reactivate(false);
			}
	    };
		return (
			<View style = {styles.container}>
				<QRCodeScanner 
					style = {{flex:1}}
					ref = {(node) => {scanner = node}}
					onRead = {this._onSuccess}
					fadeIn = {true}
					showMarker = {true}
					checkAndroid6Permissions = {true}
					topContent = {
						<Text style ={styles.centerText}>Pls scan a <Text style ={styles.textBold}>QR Code</Text> to sign up </Text>
					}
					bottomContent = {
						<Button title="REFRESH" raised={true} buttonStyle ={styles.scanButton} onPress ={startScan}/>
					}
				/>
			</View>
		);
	}
}

export default QRCodeScannerView;

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection: 'column'
	},
	centerText:{
		justifyContent:'center',
		fontSize:20
	},
	textBold:{
		fontWeight: '500'
	},
	scanButton:{
		// borderRadius:5,
		backgroundColor: '#C9712A'
	}
})
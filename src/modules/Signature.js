import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignatureCapture from 'react-native-signature-capture'
import {Button} from 'react-native-elements'


class Signature extends Component{
	constructor(props){
		super(props)
		this.state = {
			dragged:false
		}
	}

	_onDragEvent = () =>{
		console.log("dragged ")
		this.setState({dragged:true})
	}

	_onSaveEvent = (result) =>{
		console.log(result)
		const setSignature = this.props.action
		// alert(result.encoded)
		if(setSignature){
			if(this.state.dragged){
				setSignature(result.encoded)
				this.props.navigator.dismissModal({
					animated: true,
					animationType: 'slide-down'
				})
			}
		}
	}

	_saveSign = ()=>{
		this.refs['sign'].saveImage();
	}

	_resetSign = () =>{
		this.refs["sign"].resetImage();
	}


	render() {
		return (
			<View style={styles.container}>
				<SignatureCapture
					ref="sign"
					showTitleLabel={true}
					onDragEvent = {this._onDragEvent}
					onSaveEvent = {this._onSaveEvent}
					showNativeButtons = {false}
					saveImageFileInExtStorage = {false}
					style = {{flex:1}}
					viewMode = {"portrait"}
				/>
				<View style = {styles.buttonsCont}>
					<Button title='SAVE' buttonStyle = {styles.button} onPress = {this._saveSign}/>
					<Button title='RESET' buttonStyle = {styles.button} onPress = {this._resetSign}/>
				</View>
			</View>
		);
	}
}


export default Signature;

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column', 
		backgroundColor:'#fff',
		justifyContent:'center'
	},
	signature:{
		flex:1,
		borderWidth:1,
		borderColor:'#000',
		height: 40
	},
	buttonsCont:{
		flexDirection:'row',
		flex: 0,
		justifyContent: 'space-around',
		padding: 10,
		borderWidth:1, borderColor: '#D3D3D3'
	},
	button:{
		borderRadius: 5,
		paddingHorizontal: 20,
		backgroundColor:'#C9712A'
	}
})
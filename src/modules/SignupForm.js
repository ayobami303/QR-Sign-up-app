import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import {Button, FormValidationMessage, FormInput, FormLabel, CheckBox} from 'react-native-elements'


class SignupForm extends Component{

	constructor(props){
		super(props)
		this.state ={
			checked: false,
			signatureEnc: ''
		}
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
	}

	onNavigatorEvent(event){
		if(event.type === 'NavBarButtonPress'){
			if (event.id === 'close') {
				this.props.action()
				this.props.navigator.dismissModal({
					animated: true,
					animationType: 'slide-down'
				});
			}
		}
	}

	_onPress = ()=>{
		this.setState({
			checked: !this.state.checked
		})
	}

	setSignatureEnc = (image) =>{
		// console.log(image)
					
		this.setState({
			signatureEnc:image
		})
	}

	_signature = () =>{
		this.props.navigator.showModal({
			screen: 'sign_up.signature',
			title: 'Sign Here',
			animated: true,
			animationType: 'fade',
			passProps:{
				action:this.setSignatureEnc
			},
		})
		// Actions.signature({action:this.setSignatureEnc})
	}


	render() {
		return (
			<View style = {styles.container} >
				<ScrollView>
					<View style= {styles.formContainer}>
						<View style={styles.form}>
							<FormLabel>Username</FormLabel>
							<FormInput />
							<FormLabel>Email</FormLabel>
							<FormInput placeholder="Enter email" />
							<FormLabel>Password</FormLabel>
							<FormInput secureTextEntry = {true} />
							<FormValidationMessage>Password must be at least 8 characters </FormValidationMessage>
							<CheckBox title='Accept terms and condition.' checked={this.state.checked} onPress={this._onPress} />
							<TouchableOpacity onPress={this._signature} style={styles.signatureThumb} >
								{this.state.signatureEnc ?
									<Image source={{uri:`data:image/png;base64,${this.state.signatureEnc}`}} style ={styles.signature} />
									: <Text onPress={this._signature}>Add signature</Text>}
							</TouchableOpacity>
							<Button title='Submit' buttonStyle = {styles.submitButton} />
						</View>
					</View>
				</ScrollView>
			</View>
		
		);
	}
}

export default SignupForm;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#384162',
		justifyContent: 'center',
		// alignItems: 'center'
	},
	formContainer:{
		backgroundColor:'#fff',
		borderRadius:5,
		margin: 20
	},
	form:{
		padding:10
	},
	submitButton:{
		marginTop: 20,
		borderRadius: 5,
		backgroundColor: '#C9712A'
		// paddingTop:10	
	},
	signatureThumb:{
		padding: 20
	},
	signature:{
		height:150, 
		width:100,
		borderWidth: 2,
		borderRadius: 5,
		padding:20,
		borderColor: '#D3D3D3'
	} 
})
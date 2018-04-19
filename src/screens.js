import { Navigation } from 'react-native-navigation'
import QRCodeScannerView from './modules/QRCodeScannerView'
import SignupForm from './modules/SignupForm'
import Signature from './modules/Signature'

export function registerScreens(){
	Navigation.registerComponent('sign_up.qrcodeScannerView', ()=> QRCodeScannerView)
	Navigation.registerComponent('sign_up.signupForm', ()=> SignupForm)
	Navigation.registerComponent('sign_up.signature', ()=> Signature)
}
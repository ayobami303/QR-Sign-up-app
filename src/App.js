import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

registerScreens()

const navigatorStyle = {
	statusBarColor: '#C2642B',
	statusBarTextColorScheme: '#fff',
	navBarBackgroundColor: '#DC7334',
	navBarTextColor: 'white',
	orientation: 'portrait'
}


Navigation.startSingleScreenApp({
	screen:{
		screen:'sign_up.qrcodeScannerView',
		title:'Scanner QR code',
		navigatorStyle: navigatorStyle
	}
})


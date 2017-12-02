import React, { Component } from 'react'

import {
	View,StyleSheet,Text,TextInput,Button
} from 'react-native'
const text="Merhaba";

export default class IndexPage extends Component {
	 constructor(props) {
	    super(props);
	    this.inputs = {
	      userNameText: "Kullanıcı Adı",
	      passwordText: 'Şifre'
	    };
	  }
	
	render(){
		return (
			 	<View style={styles.container} >
			 		<Text >{this.inputs.userNameText}</Text>
				 	<TextInput
				        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				        value={this.text}
				     />
				 	<Text >{this.inputs.passwordText}</Text>
				 	<TextInput
				 	   ref= "username"
				        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				        value={this.text}
				     />
				     <Button
				      onPress={this._onPress()}
					  title="Giriş "
					  color="#841584"
					/>

			 	</View>

			 	
			);
	}
	 _onPress() {
  		alert(this.ref.username.value);
 	}
}
const styles = StyleSheet.create({
	container : {
		flex:1,
		backgroundColor: 'pink',
		margin:70
	}
});

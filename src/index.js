import React, { Component } from 'react'

import {
	View,StyleSheet,Text
} from 'react-native'

export default class IndexPage extends Component {
	render(){
		return (
			 	<View style={styles.container}>
				 	<View style={styles.otherContainer}>
				 	</View>
				 	<View style={styles.fixContainer}>
				 	</View>
				 	<View style={styles.fixContainer2}>
				 	</View>
			 	</View>
			 	
			);
	}
}
const styles = StyleSheet.create({
	container : {
		flex:1,
		backgroundColor: 'pink'

	},
	otherContainer:{
		flex:3,
		backgroundColor: 'blue'
	},
	fixContainer:{
		flex:8,
		backgroundColor: 'yellow'
	}
	,
	fixContainer2:{
		flex:112,
		backgroundColor: 'pink'
	}
});
import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Item({data}){
    const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("JobDetail", {
					idJob: data,
				})
			}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.header}>
						{data.name}
					</Text>
					
				</View>
				<Text>{data.time}</Text>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
    container: {
		padding: 10,
		backgroundColor: "#f3f3f3",
		marginVertical: 10,
		marginHorizontal: 10,
		borderRadius: 7,
		overflow: "hidden",
	},
	
	content: {
		flex: 1,
		marginBottom: 10,
	},
	header: {
		fontSize: 20,
		color:"black"
	},

	
})
export default Item;
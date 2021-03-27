import React, { useState, useContext } from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Alert,
	TextInput,
} from "react-native";
import ApplicationStyles from "../../Themes/AplicationStyles";
import Header from "../../components/Header/header";
import Context from "../Context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function ItemInputJob({ value, onChange, index }) {
	return (
		<TextInput
			onChangeText={(text) => onChange(text, index)}
			style={[styles.input, styles.inputJob]}
			value={value}></TextInput>
	);
}
ItemInputJob.defaultProps = {
	value: "",
	onChange: () => {},
	index: -1,
};
function AddJob(props) {
	const [title, setTitle] = useState("");
	const [listJob, setListJob] = useState([]);
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const handleAdd = () => {
		if (!title.trim()) {
			return Alert.alert("Tiêu đề không được để trống");
		}

		if (listJob.length === 0) {
			return Alert.alert("Nội dung không được để trống");
		}

		var time = new Date();
		const currentTime = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}/${
			time.getMonth() + 1
		}/${time.getFullYear()}`;
		setContext((state) => [
			...state,
			{
				id: context.length + 1,
				name: title,
				time: currentTime,
				content: listJob,
			},
		]);
		navigation.navigate("Joblist");
	};

	const handleAddItemJob = () => {
		setListJob((state) => {
			return [...state, ""];
		});
	};

	const handleChangeText = (text, index) => {
		if (index === -1) {
			return setListJob([text]);
		}

		setListJob((state) => {
			const cloneList = [...state];
			cloneList[index] = text;
			return cloneList;
		});
	};

	const renderItemJob = () => {
		if (listJob.length < 2) {
			return (
				<ItemInputJob
					onChange={handleChangeText}
					index={-1}
					value={listJob[0]}></ItemInputJob>
			);
		}

		return (
			<>
				{listJob.map((item, index) => {
					return (
						<ItemInputJob
							onChange={handleChangeText}
							index={index}
							key={index.toString()}
							value={item}></ItemInputJob>
					);
				})}
			</>
		);
	};

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				label="New Job"
                goBack={() => navigation.navigate("Joblist")}>

                </Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text style={styles.header}>Name Job</Text>
					<TextInput
						style={styles.input}
						value={title}
						onChangeText={(text) =>
							setTitle(text)
						}></TextInput>

					<View style={styles.inputGroup}>
						<Text style={styles.header}>Content</Text>
						{renderItemJob()}
						<TouchableOpacity
							style={styles.addButton}
							onPress={handleAddItemJob}>
							<Text>+1 Item</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity
						style={styles.button}
						onPress={handleAdd}>
						<Text style={styles.buttonText}> Add </Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}
export default AddJob;
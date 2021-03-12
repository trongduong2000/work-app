import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";
import Header from "../../components/Header/header";
import Jobs from "../../service/Jobs";

function JobDetail({ navigation, route }) {
  const { idJobs } = route.params;
  const Job = Jobs.filter((item) => item.id === idJobs)[0];
  console.log(Jobs);
  return (
    <View style={styles.waper}>
      <Header
        onBack={() => navigation.goBack()}
        title="Chi tiết công viêc"
      ></Header>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.title}>{Job.name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>{Job.content}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>Ngày: {Job.date}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>Bắt đầu lúc: {Job.time}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>Trong khoảng: {Job.last}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
					style={{
						backgroundColor: '#000',
						width: '100%',
						height: 40,
						borderRadius: 7,
						justifyContent: 'center',
						alignItems: 'center',
                        marginBottom:10,
					}}
				>
					<Text
						style={{
							color: '#fff',
							fontSize: 15,
							fontWeight: 'bold',
						}}
					>
						Update
					</Text>
				</TouchableOpacity>
                <TouchableOpacity
					style={{
						backgroundColor: '#000',
						width: '100%',
						height: 40,
						borderRadius: 7,
						justifyContent: 'center',
						alignItems: 'center',
					}}
                   
				>
					<Text
						style={{
							color: 'red',
								fontWeight: 'bold',
						}}
					>
						Delete
					</Text>
				</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  waper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
  },

  item: {
    marginHorizontal: 16,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default JobDetail;

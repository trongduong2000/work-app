import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import data from "../../service/Jobs";
import Header from '../../components/Header/header';

function ItemList({ data }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.id}>
            {data.id}
            {"."}
          </Text>
          <Text style={styles.header}>{data.name}</Text>
          <Text style={styles.contentJob}>{data.content}</Text>
          <Text style={styles.date}>Date: {data.date}</Text>
          <Text style={[styles.time, { textTransform: "uppercase" }]}>
            Time: {data.time}
          </Text>
          <Text style={styles.last}>Khoảng: {data.last}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Job({ navigation }) {
  return (
    <View style={styles.waper}>
      <Header
        title="Danh sach cong viec"
        onBack={() => navigation.navigate("Login")}
      ></Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList data={item}></ItemList>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,

  },
  container: {
    paddingTop: 20,
    overflow: "hidden",
  },
  containerImage: { width: 100, height: 150 },
  image: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "blue",
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  contentJob: {
    fontSize: 15,
    marginBottom: 10,
  },
  date: {
    fontSize: 10,
    marginBottom: 10,
    fontStyle: "italic",
    textTransform: "uppercase",
  },
  time: {
    fontStyle: "italic",
    fontSize: 10,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  last: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: "bold",
  },
  id: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
export default Job;

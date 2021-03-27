import React, { 
  useContext, //tạo khoang chứa dữ liệu và lấy dữ liệu từ.....
   useEffect, //sử lý logic...
 } from "react";
import { 
  View, 
  Text, 
  FlatList,
 } from "react-native";
import Item from "./item";
import Header from "../../components/Header/header";
import ApplicationStyles from "../../Themes/AplicationStyles";
import styles from "./styles";
import Context from "../Context";
import Jobs from "../../service/Jobs";

function JobList({ navigation }) {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    setContext([...Jobs]);
  }, []);

  return (
    <View style={ApplicationStyles.screen.container}>
      <Header
        label="ToDo"
        rightComponent={<Text>Add</Text>}
        rightButton={() => navigation.navigate("AddJob")}
      ></Header>
      <View style={styles.content}>
        <FlatList
          data={context}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <Item data={item}></Item>;
          }}
        ></FlatList>
      </View>
    </View>
  );
}
export default JobList;

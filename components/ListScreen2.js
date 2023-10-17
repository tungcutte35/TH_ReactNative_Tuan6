import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { data } from "./Data2";
import Icon from "react-native-vector-icons/FontAwesome5";

const ListScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} color={"white"}></Icon>
        <TextInput style={styles.input} placeholder="Dây cáp usb"></TextInput>
        <Image style={styles.search} source={require("../assets/search.svg")} />
        <Icon name="cart-plus" size={24} color={"white"}></Icon>
        <Icon name="ellipsis-h" size={24} color={"white"}></Icon>
      </View>
      <ScrollView style={styles.viewItem}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.boxItem}>
                <Image style={styles.img} source={item.img} />
                <Text style={styles.content}>{item.content}</Text>
                <View style={styles.rating}>
                  <Image style={styles.img1} source={item.imgRating} />
                  <Text style={styles.review}>({item.review})</Text>
                </View>
                <View style={styles.boxPrice}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.disCount}>{item.disCount}</Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: "15px",
        }}
      >
        <Icon name="bars" size={24} />
        <Icon name="home" size={24} />
        <Icon name="undo" size={24} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    paddingVertical: 8,
  },
  input: {
    width: 192,
    height: 30,
    backgroundColor: "white",
    paddingLeft: 40,
  },
  search: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 12,
    left: 80,
  },
  viewItem: {
    marginHorizontal: 12,
  },
  boxItem: {
    marginRight: 40,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 165,
    height: 90,
    marginBottom: 10,
  },
  content: {
    marginBottom: 3,
    maxWidth: 111,
    fontSize: 12,
    fontWeight: 400,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  img1: {
    width: 85,
    height: 13,
  },
  boxPrice: {
    flexDirection: "row",
    gap: 16,
    marginRight: 18,
  },
  price: {
    fontSize: 12,
    fontWeight: 700,
  },
  disCount: {
    fontSize: 12,
    fontWeight: 400,
    color: "#969DAA",
  },
});

export default ListScreen2;

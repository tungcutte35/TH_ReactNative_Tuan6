import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { data } from "./Data1";

const ListScreen1 = ({ router, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} color="white" />
        <Text style={styles.textChat}>Chat</Text>
        <Icon name="shopping-cart" size={24} color="white" />
      </View>
      <ScrollView>
        <Text style={styles.textHeader}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.boxItem}>
                <View style={styles.boxItem1}>
                  <Image style={styles.img} source={item.img} />
                  <View style={styles.itemTitle}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.shop}> Shop {item.nameShop}</Text>
                  </View>
                </View>
                <View>
                  <Pressable style={styles.btnChat}>
                    <Text style={styles.textChat1}>Chat</Text>
                  </Pressable>
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
  header: {
    flexDirection: "row",
    backgroundColor: "rgba(27, 169, 255, 1)",
    padding: 16,
    alignItems: "center",
  },
  textChat: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
  textHeader: {
    fontSize: 18,
    textAlign: "left",
    marginHorizontal: 32,
    marginTop: 18,
  },
  boxItem: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 6,
  },
  boxItem1: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    paddingVertical: 5,
  },
  img: {
    width: 74,
    height: 74,
  },
  btnChat: {
    backgroundColor: "red",
    width: 88,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: { maxWidth: 190 },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  textChat1: { color: "white", fontSize: 18 },
  shop: {
    color: "red",
    fontSize: 18,
  },
});

export default ListScreen1;

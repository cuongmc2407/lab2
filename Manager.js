
import { Button, StyleSheet, Text, View, Image, TextInput, Modal, FlatList, Pressable } from 'react-native';
import { useState } from 'react';




export default function App(props) {
  const route = props.route;
  // const { route} = props.route;

  //nếu params có truyền sang name thì lấy, không thì sẽ gán mặc định là manager
  const list = route.params?.list || [];

  const setimg = () =>{
    return 
  }

  return (

    <View style={styles.container}>
      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => <View>
            <Text>Tên: {item.name}</Text>
            <Text>Mô tả: {item.desc}</Text>
            <Image style={{ width: 60, height: 60, borderRadius: 30, marginBottom: 30}} source={{uri: 'https://picsum.photos/60'}} />
          </View>}
        keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 50,
    margin: 20,
  },
  info: {
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
  },
  button: {
    flex: 0.1,
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
  },
  list: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
});

import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const items = Array.from({ length: 100 }).map((v, i) => {
  return {
    id: uuidv4(),
    title: `Item - ${i}`
  };
});

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

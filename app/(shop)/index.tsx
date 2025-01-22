import { Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { PRODUCTS } from "../../assets/products";
import ProductListItem from "../../components/ProductListItem";
import { ListHeader } from "../../components/ListHeader";

const Home = () => {
  return (
    <FlatList
      data={PRODUCTS}
      renderItem={({ item }) => <ProductListItem product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={<ListHeader />}
      contentContainerStyle={styles.flatListContent}
      columnWrapperStyle={styles.flatListColumn}
      style={{ paddingHorizontal: 10, paddingVertical: 5 }}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});

import { FlatList, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { PRODUCTS } from "../../assets/products";
import ProductListItem from "../../components/ProductListItem";
import { ListHeader } from "../../components/ListHeader";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CartItems from "../../components/CartItems";

const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openBottomSheet = () => setIsOpen(true);

  return (
    <GestureHandlerRootView className="flex-1">
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader onPress={openBottomSheet} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={isOpen ? 0 : -1}
        snapPoints={["92%"]}
        onChange={(index) => {
          if (index === -1) setIsOpen(false);
        }}
        keyboardBehavior="extend"
        enablePanDownToClose
        containerStyle={{
          borderRadius: 16,
        }}
      >
        <BottomSheetView className="flex-1">
          <CartItems />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
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

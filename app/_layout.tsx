import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

const Layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{
            headerShown: false,
            title: "Shop",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: false, title: "Categories" }}
        />
        <Stack.Screen
          name="products"
          options={{ headerShown: true, title: "Products" }}
        />
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Shopping Cart" }}
        />
        <Stack.Screen name="auth" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar />
    </>
  );
};

export default Layout;

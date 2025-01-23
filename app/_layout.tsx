import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { ToastProvider } from "react-native-toast-notifications";

const Layout = () => {
  return (
    <>
      <ToastProvider>
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
            options={{
              headerShown: false,
              title: "Products",
            }}
          />
          <Stack.Screen name="auth" options={{ headerShown: true }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ToastProvider>
      <StatusBar />
    </>
  );
};

export default Layout;

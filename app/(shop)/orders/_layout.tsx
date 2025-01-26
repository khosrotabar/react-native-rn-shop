import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Orders" }}
      />
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              className="flex-row gap-1 items-center"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={24} color="#3b82f6" />
              <Text className="text-blue-500 font-bold text-lg -mt-[1px]">
                Orders
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
};

export default OrdersLayout;

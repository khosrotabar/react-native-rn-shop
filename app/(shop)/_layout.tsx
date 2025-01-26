import { Redirect, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../providers/auth-provider";
import { ActivityIndicator } from "react-native";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
}) => {
  return <FontAwesome size={24} {...props} />;
};

const TabsLayout = () => {
  const { session, mounting } = useAuth();

  if (mounting) return <ActivityIndicator />;
  if (!session) return <Redirect href="/auth" />;

  return (
    <SafeAreaView edges={["top"]} className="h-full">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            headerShown: false,
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: { height: 0 },
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

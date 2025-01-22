import { View, Text, Image, Pressable } from "react-native";
import { Product } from "../assets/types/product";
import { Link } from "expo-router";

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/products/${product.slug}`}>
      <Pressable className="w-[48%] bg-white my-2 rounded-[10px] overflow-hidden">
        <View className="rounded-[10px] w-full h-[150px]">
          <Image
            className="w-full h-full"
            source={product.heroImage}
            resizeMode="cover"
          />
        </View>
        <View className="p-2 items-start gap-4">
          <Text className="text-[#888] text-base">{product.title}</Text>
          <Text className="text-sm font-bold">${product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

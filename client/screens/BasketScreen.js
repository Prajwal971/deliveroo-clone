import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])

    console.log(groupedItemsInBasket)
    console.log("----------------")
    return (
        <SafeAreaView className=" flex-1 bg-white  rounded-xl pt-1.5 mt-8">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant?.title}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="rounded-full bg-gray-300 absolute top-5 right-5"
                >
                    <XCircleIcon color={"#00CCBB"} height={40} width={40} />
                </TouchableOpacity>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                        className="h-7 w-7 bg-gray-300 rounded-full"
                    />
                    <Text className="flex-1">Deliver in 50-75mins</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00CCBB]">{items.length}x</Text>
                            <Image
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text className="text-gray-600">
                                <Currency quantity={items[0]?.price} currency="INR" />
                            </Text>

                            <TouchableOpacity>
                                <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>


                
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen
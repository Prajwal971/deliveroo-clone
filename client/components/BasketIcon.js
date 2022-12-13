import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import Currency from "react-currency-formatter";

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
    return (
        <View className="absolute bottom-1 w-full z-50">
            <TouchableOpacity className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center justify-between">
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
                <Text className='text-white font-extrabold text-lg text-center'>View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                    {/* <CurrencyRupeeIcon/> */}
                    <Currency quantity={basketTotal} currency="INR" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon
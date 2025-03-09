import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Order = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.foodPic }} style={styles.image} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.itemPrice}>Price: ${item.price * item.quantity}</Text>
            </View>
        </View>
    );

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <View style={styles.container}>
            <Text style={styles.orderConfirmed}>Order Confirmed!</Text>
            <Text style={styles.thankYou}>Thank you for your order</Text>
            
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.itemId}
            />
            
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total Amount: ${totalAmount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    orderConfirmed: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2ecc71',
        marginVertical: 10,
    },
    thankYou: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    itemDetails: {
        marginLeft: 15,
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemQuantity: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    itemPrice: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    totalContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

export default Order;
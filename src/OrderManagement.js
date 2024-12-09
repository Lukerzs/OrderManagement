import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddOrderScreen from "./addOrder";

const OrderManagementScreen = () => {
    const navigation = useNavigation();

    const [orders, setOrders] = useState([
        { id: "1", customer: "João Silva", total: 150.5, status: "Pendente" },
        { id: "2", customer: "Maria Oliveira", total: 200, status: "Concluído" },
        { id: "3", customer: "Carlos Santos", total: 300, status: "Pendente" },
    ]);

    const addOrder = (newOrder) => {
        setOrders((prevOrders) => [...prevOrders, newOrder]);
    };

    const handleOrderDetails = (order) => {
        Alert.alert(
            `Detalhes do Pedido #${order.id}`,
            `Cliente: ${order.customer}\nTotal: R$${order.total}\nStatus: ${order.status}`
        );
    };
    const handleEditOrder = (order) => {
        navigation.navigate("EditOrder", { order, updateOrder });
    };

    const updateOrder = (updatedOrder) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === updatedOrder.id ? updatedOrder : order
            )
        );
    };


    const renderOrderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.orderItem,
                item.status === "Concluído"
                    ? styles.completedOrder
                    : styles.pendingOrder,
            ]}
            onPress={() => handleOrderDetails(item)}
        >
            <View style={styles.orderHeader}>
                <Text style={styles.orderId}>#{item.id}</Text>
                <Text
                    style={[
                        styles.status,
                        item.status === "Concluído" ? styles.statusCompleted : styles.statusPending,
                    ]}
                >
                    {item.status}
                </Text>
            </View>
            <Text style={styles.customerName}>{item.customer}</Text>
            <Text style={styles.orderTotal}>Total: R$ {item.total.toFixed(2)}</Text>

            <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditOrder(item)}
            >
                <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
        </TouchableOpacity >
    );
    function addOrdernavigation() {
        navigation.navigate('AddOrder',{addOrder});

    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Gerenciamento de Pedidos</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={renderOrderItem}
                contentContainerStyle={styles.list}
            />
            <TouchableOpacity style={styles.button} onPress={addOrdernavigation}><Text style={styles.buttonText}>Add Order</Text></TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6fc",
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#344055",
        textAlign: "center",
        marginBottom: 20,
    },
    list: {
        paddingBottom: 16,
    },
    orderItem: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    orderId: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#344055",
    },
    status: {
        fontSize: 14,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    statusCompleted: {
        color: "#28a745",
    },
    statusPending: {
        color: "#dc3545",
    },
    customerName: {
        fontSize: 16,
        color: "#5f6368",
        marginBottom: 4,
    },
    orderTotal: {
        fontSize: 16,
        fontWeight: "600",
        color: "#344055",
    },
    completedOrder: {
        borderLeftColor: "#28a745",
        borderLeftWidth: 4,
    },
    pendingOrder: {
        borderLeftColor: "#dc3545",
        borderLeftWidth: 4,
    },
    button: {
        padding: 10,
        marginBottom: 5,
        borderRadius: 1,
        textAlign: "center",
        backgroundColor: "#F5F5DC",
    },
    buttonText:{
        alignSelf:'center',
        alignItems: 'center',
    },
});

export default OrderManagementScreen;

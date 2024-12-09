import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const EditOrderScreen = ({ route, navigation }) => {
  const { order, updateOrder } = route.params;
  const [customer, setCustomer] = useState(order.customer);
  const [total, setTotal] = useState(order.total.toString());
  const [status, setStatus] = useState(order.status);

  const handleSave = () => {
    if (!customer || !total) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    const updatedOrder = { ...order, customer, total: parseFloat(total), status };
    updateOrder(updatedOrder);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Pedido</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        value={customer}
        onChangeText={setCustomer}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Total (R$)"
        keyboardType="numeric"
        value={total}
        onChangeText={setTotal}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditOrderScreen;

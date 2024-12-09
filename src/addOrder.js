import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import OrderManagementScreen from "./OrderManagement";

const AddOrderScreen = ({route,navigation}) => {
  const { addOrder } = route.params;
  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState("");
  const [description, setDescription] = useState("");

  const handleAddOrder = () => {
    if (!customer || !total || !description) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");

      return;
    }
    const newOrder = {
      id: Date.now().toString(), // Gera um ID único para o pedido
      customer,
      total: parseFloat(total),
      description,
      status: "Pendente", // Novo pedido começa como pendente
    };

    addOrder(newOrder); // Adiciona o novo pedido à lista principal
    navigation.goBack(); // Retorna à tela principal
  

  Alert.alert(
    "Pedido Adicionado",
    `Cliente: ${customer}\nTotal: R$ ${total}\nDescrição: ${description}`
  );

  // Limpar os campos após adicionar o pedido
  setCustomer("");
  setTotal("");
  setDescription("");
};

return (
  <View style={styles.container}>
    <Text style={styles.header}>Adicionar Novo Pedido</Text>

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
      style={[styles.input, styles.descriptionInput]}
      placeholder="Descrição do Pedido"
      value={description}
      onChangeText={setDescription}
      multiline
    />

    <TouchableOpacity style={styles.button} onPress={handleAddOrder}>
      <Text style={styles.buttonText}>Adicionar Pedido</Text>
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
  descriptionInput: {
    height: 100,
    textAlignVertical: "top", // Para alinhar o texto ao topo no modo multiline
  },
  button: {
    backgroundColor: "#344055",
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

export default AddOrderScreen;

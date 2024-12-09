import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderManagementScreen from "./src/OrderManagement";
import Routes from "./src/pageRoute";

const Stack = createStackNavigator();

export default function App() {
  return (
   <Routes/>
  );
}

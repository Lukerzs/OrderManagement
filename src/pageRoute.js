import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrderManagementScreen from "./OrderManagement";
import AddOrderScreen from "./addOrder";
import EditOrderScreen from "./EditOder";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="OrderScreen" component={OrderManagementScreen} />
        <AppStack.Screen name="AddOrder" component={AddOrderScreen} />
        <AppStack.Screen name="EditOrder" component={EditOrderScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
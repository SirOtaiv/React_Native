import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { beginAsyncEvent, endAsyncEvent } from "react-native/Libraries/Performance/Systrace";

const appStack = createStackNavigator();

import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {AuthorizationParamList} from "../types";
import {AuthorizationScreen} from "../screens/AuthorizationScreen";

const AuthorizationStack = createStackNavigator<AuthorizationParamList>();

export const AuthorizationNavigator = () => {
    return <AuthorizationStack.Navigator>
        <AuthorizationStack.Screen name={'AuthorizationScreen'} component={AuthorizationScreen} options={{
            headerTitle: 'Authorization Title',
        }}/>
    </AuthorizationStack.Navigator>
}
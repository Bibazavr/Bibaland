import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { Formik } from "formik";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../types";
import { Text, View, TextInput } from "../components/Themed";

export const AuthorizationScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Authorization">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authorization</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <ScrollView>
            <Text>Email:</Text>
            <TextInput
              style={styles.field}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Text>Password:</Text>
            <TextInput
              style={styles.field}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button
              title="Submit"
              onPress={() => {
                handleSubmit();
                navigation.replace("Root");
              }}
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  field: {
    flex: 1,
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
});

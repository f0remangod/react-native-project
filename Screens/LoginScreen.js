import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailInputHandler = (value) => setEmail(value);
  const passwordInputHandler = (value) => setPassword(value);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  const onLogin = () => {
    keyboardHide();
    console.log("email: ", email, " password: ", password);
    clearForm();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          resizeMode="cover"
          style={styles.background}
        >
          <View
            style={{
              ...styles.loginContainer,
              paddingBottom: isShowKeyboard ? 0 : 100,
              marginBottom: isShowKeyboard ? -110 : 0,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  value={email}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={emailInputHandler}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={passwordInputHandler}
                  secureTextEntry={true}
                />
                <TouchableOpacity onPress={onLogin} style={styles.button}>
                  <Text style={styles.buttonLabel}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.redirectToRegisterForm}>
                  Don't have an account? Register
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    marginHorizontal: 128,
    marginTop: 16,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
  },
  form: {},
  input: {
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  button: {
    height: 50,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonLabel: {
    fontWeight: 400,
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  redirectToRegisterForm: {
    paddingTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});

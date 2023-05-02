import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {auth} from '../config/firebase'
// import {createUserWithEmailAndPassword} from 'firebase/auth'


export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();



  const handleLogin =  () => {
    // if (email && password) {
    //   try{
    //     createUserWithEmailAndPassword(auth, email, password)
    //   }catch(err){
    //     console.log('got error: ', err.message)
    //   }
    // }
    navigation.navigate("Hello");
    console.log(email, password);
  };

  const handleGoogleLogin = () => {
    navigation.navigate("Hello");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.kid}>Welcome to KIDS Corner</Text>
      <Text style={styles.title}>Login</Text>
      <Image
        source={require("../assets/login/kidlog.png")}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        {/* <Icon name="user" size={20} color="#000" style={styles.inputIcon} /> */}
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setemail}
        />
        {/* <Icon name="lock" size={20} color="#000" style={styles.inputIcon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleGoogleLogin}>
        <Image
          source={require("../assets/login/google.png")}
          style={styles.google}
        />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.sign}>Don't have an account ? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#C5CFD6",
  },
  kid: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#6C63FF",
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#3a3a3a",
    color: "#fff",
    borderRadius: 10,
    padding: 8,
    marginVertical: 8,
    minWidth: 250,
    backgroundColor: "#3a3a3a",
  },
  inputIcon: {
    margin: 10,
  },
  button: {
    backgroundColor: "#6C63FF",
    borderRadius: 10,
    padding: 12,
    minWidth: 300,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sign: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#6C63FF",
  },
  button2: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
    borderRadius: 10,
    padding: 12,
    minWidth: 300,
    alignItems: "center",
    marginTop: 16,
    flexDirection: "row",
  },
  google: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

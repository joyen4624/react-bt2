import React,  { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, StyleSheet, Alert } from 'react-native';

const App = () => {

 // 2124802010151 - Lê Sỹ Hoài

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = () => {
  if (username && password) {
    Alert.alert('Đã đăng nhập', `User: ${username}\nPassword: ${password}`, [
      { text: 'OK', onPress: () => console.log('Người dùng đã đăng nhập') },
    ]);
  } else {
    Alert.alert('Error', 'Vui lòng nhập cả tên đăng nhập và mật khẩu');
  }
};


  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/56/974/HD-wallpaper-pokemon-go-pokemon-go-loading-screen.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/2560px-Pok%C3%A9mon_GO_logo.svg.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <TextInput
          style={styles.input}
          placeholder="TÊN ĐĂNG NHẬP"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="MẬT KHẨU"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.register}>ĐĂNG KÍ</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'gray',
    color: 'white',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  register: {
    color: 'white',
    marginTop: 10,
  },
});

export default App;

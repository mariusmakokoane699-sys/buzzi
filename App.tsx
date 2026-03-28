import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [messages, setMessages] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, {id: messages.length.toString(), text: inputText}]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>} 
        keyExtractor={item => item.id}
        style={styles.messageList}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  messageList: {
    marginBottom: 10,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ececec',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;
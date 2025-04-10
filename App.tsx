import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Cat = ({ name }: { name: string }) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.catContainer}>
      <Text style={styles.text}>
        I am {name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry ? 'POUR ME SOME MILK, PLEASE!' : 'Thank you!'}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  catContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;

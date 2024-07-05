import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  const [participants, setParticipants] = useState(['Matheus',]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        `Participante já cadastrado`, `${participantName} já está cadastrado nesse evento.`
      );
    }
    
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {


    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>  setParticipants(prevState => prevState.filter(participant => participant !== name)) //deixar apenas os participantes que não são iguais ao nome passadoante removido', `O participante ${name} foi removido com sucesso.`),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);

  }

  return (

    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 27 de Junho de 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList

        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}

          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante cadastrado. 😢
          </Text>
        )}

      />

    </View>
  );
}
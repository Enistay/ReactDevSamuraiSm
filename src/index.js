import React from 'react'
import {FlatList, Text, View, Button, StyleSheet } from 'react-native'


const App = () => {
    const addEntry = () => {
        alert('Hello')
    }

    return (
        <View style={{padding:20}}>
            <Text style={StyleSheet.title}>Saldo: R$ 20000,00</Text>

            <Button onPress={addEntry} title="Adicionar" />

            <Text style={StyleSheet.title}>Categorias</Text>
            <FlatList
                data={[
                    {key: "Alimentação: R$ 1000,00"},
                    {key: "Combustível: R$ 1200,00"},
                    {key: "Aluguel: R$ 1200,00"},
                    {key: "Lazer: R$ 1300,00"},
                    {key: "Outros: R$ 500,00"}
                ]}
                renderItem={({item}) => <Text style={styles.entry}> - {item.key} </Text>}
            />

            <Text style={styles.title}> Útimos Lançamentos</Text>    
            <FlatList 
                data={[
                    {key: "Padaria Asa Branca: R$ 1000,20"},
                    {key: "Posto Melhor: R$ 1000,20"},
                    {key: "Supermercado Boom: R$ 1000,20"}
                ]}
                renderItem={({item}) => <Text style={styles.entry}> - {item.key} </Text>}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    title:{fontSize: 22,
    fontWeight:"bold",
    marginTop: 10,
    marginBottom: 10
    },
    entry:{
        fontSize:14
    },
});

export default App;
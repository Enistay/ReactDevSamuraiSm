import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const EntryList = () => {
    return (<View>
        <Text style={styles.title}>Últimos Lançamentos</Text>
        <FlatList
            data={[
                { key: "Padaria Asa Branca: R$ 1000,20" },
                { key: "Posto Melhor: R$ 1000,20" },
                { key: "Supermercado Boom: R$ 1000,20" }
            ]}
            renderItem={({ item }) => <Text style={styles.entry}> - {item.key} </Text>}
        />
    </View>);
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    }
});

export default EntryList;

import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const EntrySummaryList = () => {

    return (
        <View>

<Text style={styles.title}>Categorias</Text>
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
            </View>
    );
            };

const styles = StyleSheet.create({
    container: {

    },
    title:{fontSize: 22,
        fontWeight:"bold",
        marginTop: 10,
        marginBottom: 10
        },
    
});

export default EntrySummaryList;
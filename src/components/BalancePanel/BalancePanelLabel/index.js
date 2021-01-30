import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BalancePanelLabel = () => {
    return (<View style={styles.container}>
        <Text style={styles.label}>Saldo Atual</Text>
        <Text style={styles.value}>R$ 10000,00</Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
    },
    value: {
        fontSize: 22
    },
});

export default BalancePanelLabel;

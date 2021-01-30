import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = () => {
    return (
        <View style={styles.container}>
            <BalancePanelLabel />
            <BalancePanelChart />
            <Button title="Adicionar" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});

export default BalancePanel;

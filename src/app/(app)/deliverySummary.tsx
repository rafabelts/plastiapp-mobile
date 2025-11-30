import { Button, DeliveryModal } from '@/components';
import { colors } from '@/constants';
import { deliverySummaryStyles } from '@/styles/delivery.summary.styles';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function DeliverySummaryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);

  const handleFinish = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.replace('/(app)/homeDeliver');
  };

  return (
    <View style={deliverySummaryStyles.container}>

      <View style={deliverySummaryStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={deliverySummaryStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>


      <ScrollView
        style={deliverySummaryStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={deliverySummaryStyles.scrollContent}
      >

        <Text style={deliverySummaryStyles.title}>Resumen de entrega</Text>


        <Text style={deliverySummaryStyles.folio}>Folio 1</Text>


        <View style={deliverySummaryStyles.deliveredSection}>
          <Text style={deliverySummaryStyles.deliveredLabel}>Entregó </Text>
          <Text style={deliverySummaryStyles.deliveredValue}>2 KG</Text>
        </View>


        <View style={deliverySummaryStyles.table}>

          <View style={deliverySummaryStyles.tableHeader}>
            <Text style={deliverySummaryStyles.tableHeaderText}>Plástico</Text>
            <Text style={deliverySummaryStyles.tableHeaderText}>Kg</Text>
            <Text style={deliverySummaryStyles.tableHeaderText}>Valor</Text>
          </View>


          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PET</Text>
            <Text style={deliverySummaryStyles.tableCell}>2</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ 16</Text>
          </View>


          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PEBD</Text>
            <Text style={deliverySummaryStyles.tableCell}>0</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ 0</Text>
          </View>

          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PP</Text>
            <Text style={deliverySummaryStyles.tableCell}>0</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ 0</Text>
          </View>
        </View>


        <View style={deliverySummaryStyles.totalSection}>
          <Text style={deliverySummaryStyles.totalLabel}>Total generado: </Text>
          <Text style={deliverySummaryStyles.totalValue}>$16</Text>
        </View>
      </ScrollView>


      <View style={deliverySummaryStyles.buttonContainer}>
        <Button label="Finalizar" onPress={handleFinish} />
      </View>

      <DeliveryModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}
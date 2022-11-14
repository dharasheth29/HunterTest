import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { zone } from "../types/types";

interface OwnProps {
  zoneDetails: zone;
  onIconPress: (zoneId: number) => void;
}

const ZoneDetails = ({ zoneDetails, onIconPress }: OwnProps) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>ID - {zoneDetails.id}</Text>
      </View>
      <View>
        <Text style={styles.bodyText}>Name - {zoneDetails.name}</Text>
      </View>
      <View>
        <Text style={styles.bodyText}>
          File name - {zoneDetails.icon.fileName}
        </Text>
      </View>
      <View>
        <Text style={styles.bodyText}>
          Is Suspended - {zoneDetails.suspended ? "Yes" : "No"}
        </Text>
      </View>
      <View>
        <Text style={styles.bodyText}>
          Status - {zoneDetails.status.running ? "On " : "Off "}
          {zoneDetails.status.running ? (
            <Icon
              name="checkmark-circle-outline"
              size={30}
              color="green"
              onPress={() => {
                onIconPress(zoneDetails.id);
              }}
            />
          ) : (
            <Icon
              name="close-circle-outline"
              size={30}
              color="#900"
              onPress={() => {
                onIconPress(zoneDetails.id);
              }}
            />
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  bodyText: {
    fontSize: 15,
  },
});

export default ZoneDetails;

import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import testData from "../../data/test_data";
import { zone } from "../types/types";
import ZoneDetails from "../components/ZoneDetails";

export const HomeScreen = () => {
  const [zoneData, setZoneData] = useState<zone[] | undefined>();

  useEffect(() => {
    setZoneData(testData.controller.zones);
  }, []);

  useEffect(() => {
    if (zoneData) {
      setZoneData(zoneData);
    }
  }, [zoneData]);

  const onIconPress = (zoneId: number) => {
    const updatedData = zoneData?.map((element) => {
      if (element.id === zoneId) {
        const updatedElement = {
          ...element,
          status: {
            running: element.status.running ? false : true,
          },
        };
        return updatedElement;
      }
      return element;
    });

    setZoneData(updatedData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={zoneData}
        renderItem={({ item }) => (
          <ZoneDetails zoneDetails={item} onIconPress={onIconPress} />
        )}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: "30%",
  },
});

export default HomeScreen;

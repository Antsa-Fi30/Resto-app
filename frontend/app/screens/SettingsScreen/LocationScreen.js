import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import SettingsHead from "../../components/templates/SettingsHead";
import LocationContent from "../../components/Settings/LocationContent";

const LocationScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level1 },
      ]}
    >
      <View style={styles.subContainer}>
        <SettingsHead title={"Change your location"} />
        <View style={styles.parameters}>
          <LocationContent />
        </View>
      </View>
    </ScrollView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 80,
    marginVertical: 10,
    borderRadius: 25,
  },
  subContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
  },
  headTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonback: {
    position: "absolute",
    left: -10,
  },
  parameters: {
    marginVertical: 10,
  },
});

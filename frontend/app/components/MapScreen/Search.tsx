import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { TextInput, Chip, Text, useTheme } from "react-native-paper";

const Search = () => {
  const [placename, setPlacename] = useState("");
  const theme = useTheme();

  return (
    <SafeAreaView>
      <View
        style={[
          styles.searchbar,
          { backgroundColor: theme.colors.elevation.level2 },
        ]}
      >
        <TouchableOpacity>
          <Octicons name="search" size={16} color="red" style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.inputbar}
          placeholder={"Search for places"}
          placeholderTextColor="#ddd"
          value={placename}
          onChangeText={(text) => setPlacename(text)}
          mode="flat"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchbar: {
    position: "absolute",
    top: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 10,
    marginHorizontal: 28,
    borderWidth: 0.5,
    borderColor: "#ddd",
    zIndex: 100000,
  },
  labelChip: {
    fontFamily: "Montserrat-Medium",
  },
  icon: {
    marginRight: 10,
  },
  inputbar: {
    flex: 1,
    backgroundColor: "transparent",
    fontFamily: "Montserrat-Regular",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 10,
  },
  chip: {
    margin: 5,
    backgroundColor: "#f0f0f0",
  },
  label: {
    fontFamily: "Montserrat-Medium",
  },
});

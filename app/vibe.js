import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";

function VibePage() {
  const DATA = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D",
      content: "Lorel ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url: "https://rubymuibi.com",
    },

    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      url: "https://rubymuibi.com",
    },
  ];

  const RenderData = ({ content, image }) => {
    return (
      <View style={styles.vvContainer}>

        <View style={styles.authorContainer} >
          <Image source={require("../assets/icons/vibe-logo.png")} />
          <View  style={styles.author} >
            <Text style={styles.authorName}>ViralVibe</Text>
            <Image source={require("../assets/icons/verified-icon.png")} />
          </View>
        </View>

        <View style={styles.contentContainer}>
            <Text style={styles.content}>{content}</Text>
            <View style={styles.imageContainer}>
              <Image style={styles.imageView} source={{ uri: image }} />
            </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <RenderData {...item} />}
        keyExtractor={(item) => item.id}
      />
      <View  style={styles.filterContainer}><Text style={styles.filterText}> Filter </Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    color: "white",
    flex: 1,
    alignItems: "center", 
    justifyContent: "center", 
    flexShrink: 1,
    width: "100%",
  },

  vvContainer: {
    padding: 12,
    borderRadius: 20,
    borderWidth: 0.6,
    borderColor: "#2E2E2E",
    width: "95%",
    marginTop: 24,
    marginLeft: 8,
  },


  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  author: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },

  contentContainer: {
    padding: 32,
    paddingTop: 6,
    paddingBottom: 6,
    gap: 8,
  },

  content: {
    fontSize: 12,
    color: "white",
  },

  authorName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },

  imageContainer: {
    width: 320,
    height: 250,
    borderRadius: 20,
    borderWidth: 0.6,
    borderColor: "#2E2E2E",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  imageView: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  filterContainer: {
    padding: 10,
  },

  filterText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default VibePage;

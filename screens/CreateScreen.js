import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext, { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import IndexScreen from "./IndexScreen";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
    isEditable={false}
      onsubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
}

const styles = StyleSheet.create({});

import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import RecipeHeader from "../components/RecipeHeader";
import CloudinaryImage from "react-native-cloudinary-image-display";
import { setCurrentRecipe } from "../state/actions";
import { connect } from "react-redux";

class RecipeCard extends Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <View style={rc_styles.parent}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("RecipeDetails", { recipe: recipe });
            this.props.setCurrentRecipe(recipe);
          }}
          style={rc_styles.child}
        >
          <CloudinaryImage
            cloudName={"littlechef"}
            imageId={"recipe_" + recipe.id + ".jpg"}
            width={350}
            height={134}
            style={rc_styles.image}
          />
          <RecipeHeader recipe={recipe} />
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    // recipes: state.recipes,
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentRecipe: id => dispatch(setCurrentRecipe(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);

const rc_styles = StyleSheet.create({
  parent: {
    flex: 1,
    // backgroundColor: "#F0F0EA",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: 14,
    borderColor: "#F0F0EA",
    borderWidth: 1,
    marginBottom: 10,
    overflow: "hidden"
  },
  child: {
    // paddingVertical: 15
    // borderTopRightRadius: 14,
    // borderTopLeftRadius: 14,
  },
  externalLinkText: {
    fontSize: 14,
    color: "#F32D98"
  },
  image: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-end"
  }
});

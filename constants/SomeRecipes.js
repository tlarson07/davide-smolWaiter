import React from "react";

export default function Recipes() {
  let recipes = [
    {
      id: 1,
      title: "Chocolate Chip Caramel Cookie Bars",
      source: "manual",
      rating: 4,
      difficulty: 5,
      time: 45,
      prepTime: 25,
      diffTime: 22,
      ingredients: [
        {
          id: 2,
          quantity: 3,
          units: "cups",
          ingredient: "testing",
          recipe: 1,
          annotations: [
            { date: "May 4, 2019", text: "best anno" },
            { date: "Feb 1, 2019", text: "something else" }
          ]
        },
        {
          id: 3,
          quantity: 1,
          units: "Tbsp",
          ingredient: "something",
          recipe: 1,
          annotations: []
        },
        {
          id: 9,
          quantity: 2,
          units: "cups",
          ingredient: "something else",
          recipe: 1,
          annotations: []
        }
      ],
      steps: [
        {
          id: 6,
          stepNum: 1,
          step: "do something",
          recipe: 1,
          annotations: []
        },
        {
          id: 7,
          stepNum: 2,
          step: "do something else",
          recipe: 1,
          annotations: []
        },
        {
          id: 8,
          stepNum: 3,
          step: "what else should we do?",
          recipe: 1,
          annotations: []
        }
      ],
      public: true
    },
    {
      id: 4,
      title: "Chicken",
      source: "manual",
      rating: 0,
      difficulty: 5,
      time: 45,
      ingredients: [
        {
          id: 5,
          quantity: 3,
          units: "cups",
          ingredient: "third test",
          recipe: 4,
          annotations: []
        }
      ],
      public: false
    }
  ];
  return recipes;
}

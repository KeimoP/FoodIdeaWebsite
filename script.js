const foodIdeas = [
      "Spaghetti Carbonara",
      "Chicken Tacos",
      "Vegetable Stir Fry",
      "Beef Stroganoff",
      "Grilled Cheese Sandwich",
      "Caesar Salad",
      "Sushi Rolls",
      "Pancakes with Maple Syrup",
      "Margherita Pizza",
      "Lentil Soup"
  ];

  document.getElementById('generateButton').addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * foodIdeas.length);
      document.getElementById('foodIdea').textContent = foodIdeas[randomIndex];
  });
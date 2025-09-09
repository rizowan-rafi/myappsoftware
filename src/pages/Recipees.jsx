import React from 'react';

const HealthyRecipesDatabase = () => {
  const categories = [
    { name: 'Protein Shakes', image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=200&fit=crop' },
    { name: 'Protein Bars', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop' },
    { name: 'High Protein', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=200&fit=crop' },
    { name: 'Low Carb', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop' },
    { name: 'Snacks', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop' },
    { name: 'Vegetarian', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop' },
    { name: 'Breakfast', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop' },
    { name: 'Lunch', image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop' },
    { name: 'Dinner', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop' },
    { name: 'BBQ/Grill', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop' }
  ];

  const newRecipes = [
    {
      title: '3 Ingredient Chocolate Protein Mug Cake Recipe',
      description: 'Satisfy your sweet tooth with this quick and easy protein mug cake! The perfect healthy indulgence, this fluffy and nutritious, this high-protein mug cake recipe is packed with big flavor without the guilt.',
      time: '5 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
      title: 'Easy Chocolate Protein Brownie Recipe',
      description: 'Indulge your taste buds with this delicious brownie recipe! Packed with high-quality protein and ingredients, these brownies are the perfect option for dessert and a mid-day nutrition.',
      time: '20 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop'
    },
    {
      title: 'High Protein Coconut Pomegranate Pancakes Recipe',
      description: 'Indulge your taste buds into this delicious high-protein recipe! Packed with high-quality coconut and pomegranate, these pancakes are a great option for breakfast and beyond.',
      time: '15 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
    },
    {
      title: 'High Protein Blueberry Almond Pancakes Recipe',
      description: 'This easy, high-protein pancake recipe is packed with high-quality protein and bursting with nutritions!',
      time: '15 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
    },
    {
      title: 'High Protein Tuna Bake Pasta Recipe',
      description: 'This high-protein tuna bake recipe is a delicious dish that is perfect for a satisfying meal! Loaded with nutritious ingredients!',
      time: '30 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop'
    },
    {
      title: 'Double Chocolate Protein Avocado Brownies Recipe',
      description: 'Indulge in something sweet with these double chocolate protein avocado brownies. They\'re the perfect way to enjoy a tasty and sweet snack.',
      time: '25 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop'
    }
  ];

  const trendingRecipes = [
    {
      title: 'High Protein Cheeseburger Omelette Recipe',
      description: 'Wake up to something tasty in the morning! Up your breakfast game with these recipes and immediately see magic!',
      time: '10 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
    },
    {
      title: 'High Protein Chocolate Peanut Butter Pancakes Recipe',
      description: 'Whether you\'re a fan of chocolate peanut butter or just a fan of pancakes, we\'ve got the perfect recipe for you! These pancakes are sweet, delicious!',
      time: '15 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
    },
    {
      title: 'Banana And Oats Protein Shake Recipe',
      description: 'Protein shake with banana, oats and your favorite protein powder blend. This nutritional double hit is a high and nutritious staple that focus on the good.',
      time: '5 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop'
    },
    {
      title: 'Whey, Honey And Peanut Butter Protein Bar Recipe',
      description: 'A snack bar made with healthy protein bar that requires only 4 ingredients and delivers wholesome, nutritious goodness. Great for on-the-go!',
      time: '15 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop'
    },
    {
      title: 'High Protein Chicken Burrito Bowl Recipe',
      description: 'Mexican seasoned chicken, cilantro lime rice, black beans, oh and Mexican cheese. And all the fresh ingredients make this better than your burrito bowl.',
      time: '25 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1512838243191-c81605782526?w=400&h=300&fit=crop'
    },
    {
      title: 'Chocolate And Peanut Butter Protein Bars Recipe',
      description: 'These homemade protein bars taste amazing, almost like a brownie without the guilt. But more importantly, they provide the protein and peanut butter.',
      time: '20 mins',
      comments: 'comments',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop'
    }
  ];

  const RecipeCard = ({ recipe, isLarge = false }) => (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isLarge ? 'col-span-full' : ''}`}>
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className={`w-full object-cover ${isLarge ? 'h-64' : 'h-48'}`}
        />
      </div>
      <div className="p-4">
        <h3 className={`font-semibold text-gray-800 mb-2 line-clamp-2 ${isLarge ? 'text-xl' : 'text-lg'}`}>
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>⏱ {recipe.time}</span>
          <span>💬 {recipe.comments}</span>
        </div>
      </div>
    </div>
  );

  const CategoryCard = ({ category }) => (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white font-semibold text-center px-2">{category.name}</h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=1200&h=600&fit=crop")'
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthy Recipes Database</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Huge range of free recipes that teach you how to cook healthy food for your fitness goals that tastes amazing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Recipe Categories */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">RECIPE CATEGORIES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Looking for your fitness goal specific recipes? Here for a delicious and easy to prepare 
              recipes by meal type or diet preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </section>

        {/* New Recipes */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">NEW RECIPES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              New recipes just added. Stay up to date with new recipes, workouts, guides and more by subscribing 
              for monthly newsletters. It's free, spam not included.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newRecipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Trending Recipes */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">TRENDING RECIPES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Popular recipes our subscribers are enjoying this week. Let our community know what you think of their 
              recipes! Leave a comment at the bottom of the recipe page.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingRecipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthyRecipesDatabase;
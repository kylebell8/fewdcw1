const nedb = require("nedb");

class recipe {
    constructor(PathToRecipe) {
        console.log(PathToRecipe);
        if (PathToRecipe) {
            this.recipe = new nedb(PathToRecipe);
            console.log("recipe connected to " + PathToRecipe);
            PathToRecipe;
        } 
    }
    init() {
        this.recipe.insert({
            id: "1",
            name: "carrot cake TEST",
            description: "home made here",
            price: "2.50",
            category: "dessert",
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "salt", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" }],
            allergens: ["Dairy", "Gluten", "Nuts"],
            available: "no",
            review: [{
                reviewName: [],
                reviewNumber: [],
                reviewText: []
            }],

            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "2",
            name: "sandwiches",
            description: "with a variety of fillings",
            price: "2.50",
            category: ("starter and side"),
            ingredients: [{ food_ingredient: "flour", food_ingredientquantity: "800g/1lb 14oz" },
            { food_ingredient: "semolina flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "TEST", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "dried yeast", food_ingredientquantity: "14g/½oz" },
            { food_ingredient: "extra virgin olive oil", food_ingredientquantity: "4 tbsp" },
            { food_ingredient: "water", food_ingredientquantity: "650ml/1 pint 2fl oz" },
            { food_ingredient: "San Marzano tomatoes (or plum tomatoes)", food_ingredientquantity: "2 x 400g/14oz tins" },
            { food_ingredient: "cow’s milk mozzarella balls, grated", food_ingredientquantity: "2 large" },
            { food_ingredient: "olive oil", food_ingredientquantity: "3 tbsp" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "1g" }],
            allergens: ["Dairy", "Gluten"],
            available: "no",
            review: [{
                reviewName: [],
                reviewNumber: [],
                reviewText: []
            }],
            menu: [],
            shopping: []
        });

    }

    getAllEntries() {
        return new Promise((resolve, reject) => {
            this.recipe.find({}, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log("function all() returns: ", entries);
                }
            });
        });
    }
}
module.exports = recipe;

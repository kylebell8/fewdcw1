const nedb = require("nedb");

class recipe {
    constructor(Path) {
        console.log(Path);
        if (Path) {
            this.recipe = new nedb(Path);
            console.log("recipes connected " + Path);
            Path;
        } 
    }
    init() {
        this.recipe.insert({
            id: "1",
            name: "Pizza",
            description: "Home made margharita pizza",
            category: "Main",
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
            allergens: ["Dairy", "Gluten"],
            instructions: [
                "To make the dough, place the flours, salt, sugar and yeast into a large bowl and stir. Make a well in the centre of the flour and pour in the water, gradually mixing in the flour to form a soft dough.",
                "Tip out and knead on an oiled work surface for about 10 minutes or until the dough is smooth and elastic. Place it into a bowl, cover with cling film and refrigerate for 24 hours.",
                "Preheat the oven to its highest temperature. Place a heavy baking tray or pizza stone in the oven and allow it to heat.",
                "Remove the dough from the bowl and knead for a couple of minutes, then divide into four pieces. Allow to rest for five minutes, then stretch each piece over your hands to form a disc about 5mm/¼in thick.",
                "Place the circles of dough onto upturned floured baking trays or a pizza peel if you have one.",
                "Blend the tinned tomatoes with a stick blender or a food processor. Spoon the blended tomato thinly over the pizzas, scatter over the grated mozzarella, then drizzle over the oil. Season with sea salt and freshly ground black pepper.",
                "Slide each pizza off the baking tray directly onto the heated baking tray or pizza stone in the oven and cook for 5 -10 minutes, or until golden-brown and crisp.",
                "To serve, scatter the basil leaves over the pizza."
              ],
            review: [{
                reviewName: ["Jimmy McNulty"],
                reviewNumber: [4],
                reviewText: ["Decent recipe, some of the ingredients a little hard to find at my local shop"]
            }],

            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "2",
            name: "French Dip Sandwich",
            description: "The effort in this recipe is only in waiting for your onions to become soft, golden brown and sweet to make a great onion gravy.",
            category: ("starter and side"),
            ingredients: [{ food_ingredient: "onions", food_ingredientquantity: "2 thinly sliced" },
            { food_ingredient: "plain flour", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "red wine", food_ingredientquantity: "1 glass" },
            { food_ingredient: "dark soy sauce", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "tomato purée", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "beef stock", food_ingredientquantity: "400ml/14fl oz" },
            { food_ingredient: "mini-baguette", food_ingredientquantity: "2, split horizontally"},
            { food_ingredient: "Roast Beef", food_ingredientquantity: "4 slices" },
            { food_ingredient: "Mustard", food_ingredientquantity: "1tbsp" }
                ],
            allergens: ["Gluten"],
            instructions: [
                "Melt the butter in a saucepan over a medium–low heat. Add the sliced onions and a pinch of salt. Cook the onions for 20–25 minutes, stirring occasionally, until they are very soft and dark brown. Sprinkle over the flour and stir, cooking for 5 minutes until the mixture smells slightly toasty.",
                "Pour in the red wine (if using), stirring constantly, and simmer for a minute before adding the soy sauce and tomato purée. Stir until completely incorporated and smooth before gradually adding the stock, stirring until the stock is incorporated and the gravy is silky and thickened. Season with salt and pepper. Simmer the gravy for 5 minutes or so.",
                "Meanwhile, preheat the oven to 200C/180C Fan/Gas 6.",
                "Spread mustard or horseradish sauce on the baguette, if using. Divide the roast beef between the baguettes and place the emmental on top. Put the sandwiches onto a baking tray and heat in the oven.",
                "Strain the gravy into two heated bowls, and place the onions on top of the cheese in the sandwich. Serve each sandwich with the gravy alongside for dipping.",
              ],
            review: [{
                reviewName: ["Jay Landsman"],
                reviewNumber: [2],
                reviewText: ["The small amount of ingredients led to small portions, not enough for me, anyone reading should buy more!"]
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

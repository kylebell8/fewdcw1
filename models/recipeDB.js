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
            vegan: "",
            vegetarian: "vegetarian",
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
            category: "Starter and Side",
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
            vegan: "",
            vegetarian: "",
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
        this.recipe.insert({
            id: "3",
            name: "Burger",
            description: "This is the perfect burger. The beauty is in its simplicity just chuck steak and a little seasoning.",
            category: "Main",
            ingredients: [{ food_ingredient: "chuck steak, minced", food_ingredientquantity: "800g/1lb 12oz" },
            { food_ingredient: "bone marrow, finely diced", food_ingredientquantity: "50g/1¾oz" },
            { food_ingredient: "Tabasco sauce", food_ingredientquantity: "1 dash" },
            { food_ingredient: "burger buns", food_ingredientquantity: "2 split" },
            { food_ingredient: "flaked sea salt and freshly ground black pepper", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "mayonnaise", food_ingredientquantity: "100g/3½oz " },
            { food_ingredient: "tomato ketchup", food_ingredientquantity: "1 tbsp"},
            { food_ingredient: "large gherkin", food_ingredientquantity: "1 sliced" },
            { food_ingredient: "garlic powder", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "chipotle paste", food_ingredientquantity: "1/2 tbsp" },
            { food_ingredient: "tomatoes", food_ingredientquantity: "2 sliced" },
            { food_ingredient: "little gem lettuce", food_ingredientquantity: "2 leaves" },
            { food_ingredient: "American style cheese", food_ingredientquantity: "2 slices" }
                ],
            allergens: ["Gluten","Dairy"],
            vegan: "",
            vegetarian: "",
            instructions: [
                "Mix the minced beef together in a bowl with the bone marrow, Worcestershire sauce and Tabasco.",
                "Season the meat with salt and a little black pepper, then divide the mixture into 4 (or 10 if making sliders) and shape each one into a round pattie 2–2.5cm/¾–1in thick.",
                "For the burger sauce, mix together all the ingredients in a bowl.",
                "Heat a frying pan or your barbecue. When too hot to hold your hand over, add the burgers – there’s no need for oil, as some fat will render out of the meat. Cook for 4 minutes, or until the burgers are well seared and have a thick crust. Flip them and cook for another 3 minutes for rare meat, 4 minutes for medium-rare, 5 for medium and up to 6 for well done. Toast the buns, then fill with the burger sauce, tomato, lettuce and gherkin and a good dollop of the burger sauce.",
              ],
            review: [{
                reviewName: ["Jules Winnfield"],
                reviewNumber: [4.5],
                reviewText: ["Thats one tasty burger!"]
            }],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "4",
            name: "Banana Smoothie",
            description: "This energy-boosting banana smoothie has a hint of cinnamon and can easily be made vegan by using dairy-free milk.            .",
            category: "Drink",
            ingredients: [{ food_ingredient: "banana", food_ingredientquantity: "2 thinly sliced" },
            { food_ingredient: "dairy-free milk", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "cinnamon", food_ingredientquantity: "1 glass" },
            { food_ingredient: "dried apricots", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "fresh lime juice", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "coconut oil", food_ingredientquantity: "400ml/14fl oz" }
                ],
            allergens: [],
            vegan: "vegan",
            vegetarian: "vegetarian",
            instructions: [
                "Place all of the ingredients in a blender, adding the coconut oil last (if using). Start to blend at a low speed, gradually increasing until the smoothie is thick and creamy.",
                "Pour into a chilled glass and serve.",
              ],
            review: [{
                reviewName: ["Huey Emmerich"],
                reviewNumber: [3],
                reviewText: ["Bland, but refreshing"]
            }],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "5",
            name: "Macaroni and Cheese",
            description: "Customise this recipe to make your perfect macaroni cheese for a quick family dinner that everyone will love.",
            category: "Main",
            ingredients: [{ food_ingredient: "macaroni", food_ingredientquantity: "250g/9oz" },
            { food_ingredient: "butter", food_ingredientquantity: "40g/1½oz" },
            { food_ingredient: "plain flour", food_ingredientquantity: "40g/1½ " },
            { food_ingredient: "milk", food_ingredientquantity: "600ml/1 pint" },
            { food_ingredient: "cheddar cheese, grated", food_ingredientquantity: "250g/9oz" },
            { food_ingredient: "Parmesan cheese", food_ingredientquantity: "50g/2oz" }
                ],
            allergens: ["Dairy"],
            vegan: "",
            vegetarian: "vegetarian",
            instructions: [
                "Cook the macaroni in a large saucepan of boiling salted water for 8–10 minutes. Drain well and set aside.",
                "Melt the butter over a medium heat in a saucepan slightly larger than that used for the macaroni. Add the flour and stir to form a roux, cooking for a few minutes.",
                "Gradually whisk in the milk, a little at a time. Cook for 10–15 minutes to a thickened and smooth sauce.",
                "Meanwhile, preheat the grill to hot.",
                "Remove the sauce from the hob, add 175g/6oz of the cheese and stir until it is well combined and melted.",
                "Add the macaroni to the sauce and mix well. Transfer to a deep suitably-sized ovenproof dish.",
                "Sprinkle over the remaining Cheddar and the Parmesan and place the dish under the hot grill. Cook until the cheese is browned and bubbling. Serve straightaway.",
              ],
            review: [{
                reviewName: ["Mark Corrigan"],
                reviewNumber: [3.5],
                reviewText: ["Decent food, utilitarian and serves it's purpose"]
            }],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "6",
            name: "Tortellini with roasted nuts",
            description: "The effort in this recipe is only in waiting for your onions to become soft, golden brown and sweet to make a great onion gravy.",
            category: "Main",
            ingredients: [{ food_ingredient: "'00' pasta flour", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "free-range eggs", food_ingredientquantity: "2" },
            { food_ingredient: "fresh cep mushrooms", food_ingredientquantity: "250g/9oz" },
            { food_ingredient: "sea salt and freshly ground black pepper", food_ingredientquantity: "dash" },
            { food_ingredient: "banana shallot", food_ingredientquantity: "1" },
            { food_ingredient: "garlic", food_ingredientquantity: "2 cloves" },
            { food_ingredient: "sage leaves", food_ingredientquantity: "8 leaves" },
            { food_ingredient: "lemon juice", food_ingredientquantity: "1 lemons worth"},
            { food_ingredient: "pine nuts", food_ingredientquantity: "10g/½oz" },
            { food_ingredient: "hazelnuts", food_ingredientquantity: "10" },
            { food_ingredient: "dairy-free butter", food_ingredientquantity: "40g/1½oz" },
            { food_ingredient: "water", food_ingredientquantity: "50ml/2fl oz" }
                ],
            allergens: ["Gluten","Nuts"],
            vegan: "",
            vegetarian: "vegetarian",
            instructions: [
                "For the pasta, place the flour into a food processor, crack in the eggs and pulse to combine. Add a little water, if necessary, to make the dough come together (the dough should ball together when you rub a piece between your fingers).",
                "Turn the dough out onto a floured work surface and knead lightly for 2-3 minutes, or until smooth and elastic. Flatten out the dough and roll to a 1cm/½in thickness. Wrap the dough in clingfilm and leave to rest in the fridge for 30 minutes to relax.",
                "Remove the cling film and cut the pasta dough into 2 equal pieces. Flatten each piece out slightly with a rolling pin the same width as your pasta machine.",
                "Pass the dough through the pasta machine, starting with the thickest setting, then fold the ends of the pasta back into the middle, like a business letter. Turn 90 degrees and roll the pasta through the thickest setting once more. Change the setting on the pasta machine to the next thickeness and feed the dough through again. Repeat the rolling, passing the sheet through each setting until you reach the thinnest setting. Cut each sheet of pasta into 3 (the dough should yield enough pasta for approximately six sheets measuring 35cm x 10cm/14in x 4in).",
                "Layer the sheets of pasta on a tray, separated by layers of cling film, and keep in the fridge until ready to use.",
                "For the filling, heat the olive oil in a large frying pan over a high heat and fry the ceps with a pinch of sea salt and freshly ground black pepper for 2-3 minutes, until tender. If you are unable to find fresh ceps you could use either button or field mushrooms. Or you could use some good quality dried ceps, soaked in advance.",
                "Add the shallots and cook for 1-2 minutes. Add the garlic, then mix the ceps and shallots together and cook for 1-2 minutes, or until the shallots are softened. Add the lemon juice and mix well. Remove from the heat and tip out onto a plate to cool down slightly, then chill in the fridge until cold.",
                "Take one pasta sheet and place 4 large teaspoons of the filling along the middle, making sure the mounds of filling are evenly spaced. Lightly brush the pasta around the filling with egg wash. Fold the top edge of the sheet over the filling to meet the bottom edge of the sheet, then press around the filling with your fingers to seal (make sure there are no air bubbles in the pasta). Repeat with the remaining sheets of pasta and the filling.",
                "Cut out the tortellini, using a medium size cutter to stamp out a half moon shape. Press the middle down lightly, then bring the bottom corners of the half-moon together to form a circle. Pinch the ends together to seal. Place the prepared tortellini onto a lightly floured plate until ready to cook.",
                "Preheat the oven to 170C/340F/Gas 3.",
                "For the roasted nuts and sage butter, scatter the pine nuts and hazelnuts on a baking tray and roast in the oven for about 10 minutes, or until the nuts are golden-brown. Remove and set aside to cool.",
                "Cook the tortellini, in batches, in a pan of boiling salted water for 2-3 minutes, or until al dente. Remove with a slotted spoon and transfer to warm serving plates.",
                "Meanwhile, heat the butter in a pan over a medium heat until melted and hazelnut-brown in colour (be careful not to let the butter darken beyond nut-brown). Add the sage and cook for 5 seconds, then pour in the water and a squeeze of lemon juice and cook for 1-2 minutes.",
                "To serve, spoon the sage butter over the tortellini and scatter over the roasted pine nuts and hazelnuts.",
              ],
            review: [{
                reviewName: ["Paulie Walnuts"],
                reviewNumber: [0.5],
                reviewText: ["Oooft Madonna! This isn't the same as in the home country at all!"]
            }],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "7",
            name: "Ramen",
            description: "Turn a pack of instant ramen noodles into a glorious dinner with a few simple additions – a marinated egg, roast meat, greens and a little mirin if you have it.",
            category: "Starter and Side",
            ingredients: [{ food_ingredient: "free range egg", food_ingredientquantity: "1 egg" },
            { food_ingredient: "soy sauce", food_ingredientquantity: "2 tbsp" },
            { food_ingredient: "mirin", food_ingredientquantity: "1 tbsp" },
            { food_ingredient: "kimchi", food_ingredientquantity: "1 spoonful" },
            { food_ingredient: "instant ramen", food_ingredientquantity: "1 pack" },
            { food_ingredient: "roasted pork", food_ingredientquantity: "3 slices" },
            { food_ingredient: "spring onion", food_ingredientquantity: "1 whole"}
                ],
            allergens: ["Gluten"],
            vegan: "",
            vegetarian: "",
            instructions: [
                "Bring a saucepan of water to a rolling boil, carefully lower in the egg and cook for 6½ minutes.",
                "Remove the egg and transfer to a bowl of cold water. Leave to cool completely (change the water once or twice if it starts to warm up). Peel the egg and, if you have time, marinade it in the soy sauce and mirin for an hour (optional).",
                "Blanch the greens in boiling water until hot through and just tender. Prepare the instant ramen according to the pack instructions. Halve the egg.",
                "Garnish the ramen with the fat (if using), egg, greens, pickles, meat and spring onion.",
              ],
            review: [{
                reviewName: ["Jesse Pinkman"],
                reviewNumber: [5],
                reviewText: ["Pretty good"]
            }],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "8",
            name: "Chocolate Cake",
            description: "Our really easy chocolate cake recipe is perfect for birthdays",
            category: "Dessert",
            ingredients: [{ food_ingredient: "plain flour", food_ingredientquantity: "225g/8oz" },
            { food_ingredient: "caster sugar", food_ingredientquantity: "350g/12½oz " },
            { food_ingredient: "cocoa powder", food_ingredientquantity: "85g/3oz" },
            { food_ingredient: "baking powder", food_ingredientquantity: "1½ tsp" },
            { food_ingredient: "bicarbonate of soda", food_ingredientquantity: "1½ tsp" },
            { food_ingredient: "eggs", food_ingredientquantity: "2 eggs" },
            { food_ingredient: "milk", food_ingredientquantity: "250ml/9fl oz"},
            { food_ingredient: "vegetable oil", food_ingredientquantity: "125ml/4½fl oz" },
            { food_ingredient: "vanilla extract", food_ingredientquantity: "2 tsp" },
            { food_ingredient: "boiling water", food_ingredientquantity: "250ml/9fl oz" }
                ],
            allergens: ["Gluten", "Dairy"],
            vegan: "",
            vegetarian: "vegetarian",
            instructions: [
                "Preheat the oven to 180C/160C Fan/Gas 4. Grease and line two 20cm/8in sandwich tins.",
                "For the cake, place all of the cake ingredients, except the boiling water, into a large mixing bowl. Using a wooden spoon, or electric whisk, beat the mixture until smooth and well combined.",
                "Add the boiling water to the mixture, a little at a time, until smooth. (The cake mixture will now be very liquid.)",
                "Divide the cake batter between the sandwich tins and bake in the oven for 25–35 minutes, or until the top is firm to the touch and a skewer inserted into the centre of the cake comes out clean.",
                "Remove the cakes from the oven and allow to cool completely, still in their tins, before icing.",
                "For the chocolate icing, heat the chocolate and cream in a saucepan over a low heat until the chocolate melts. Remove the pan from the heat and whisk the mixture until smooth, glossy and thickened. Set aside to cool for 1–2 hours, or until thick enough to spread over the cake.",
                "To assemble the cake, run a round-bladed knife around the inside of the cake tins to loosen the cakes. Carefully remove the cakes from the tins.",
                "Spread a little chocolate icing over the top of one of the chocolate cakes, then carefully top with the other cake.",
                "Transfer the cake to a serving plate and ice the cake all over with the chocolate icing, using a palette knife.",
              ],
            review: [{
                reviewName: ["Barney Calhoun"],
                reviewNumber: [5],
                reviewText: ["Delicious, made this for my workmates and they loved it!"]
            }],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "9",
            name: "Carrot Cake",
            description: "Our easy carrot cake recipe only needs one tin and two bowls – just add the wet ingredients to the dry and bake.",
            category: "Dessert",
            ingredients: [{ food_ingredient: "free-range eggs", food_ingredientquantity: "4" },
            { food_ingredient: "sunflower oil", food_ingredientquantity: "200ml/7fl oz" },
            { food_ingredient: "grated carrot", food_ingredientquantity: "250g/9oz" },
            { food_ingredient: "sultanas", food_ingredientquantity: "100g/3½oz" },
            { food_ingredient: "walnut crumbs", food_ingredientquantity: "100g/3½oz" },
            { food_ingredient: "orange zest", food_ingredientquantity: "1 orange worth" },
            { food_ingredient: "self-raising flour", food_ingredientquantity: "200g/7oz"},
            { food_ingredient: "mixed spice", food_ingredientquantity: "2 tsp" },
            { food_ingredient: "bicarbonate of soda", food_ingredientquantity: "1 tsp" },
            { food_ingredient: "salt", food_ingredientquantity: "¼ tsp" },
            { food_ingredient: "brown sugar", food_ingredientquantity: "200g/7oz" },
            { food_ingredient: "unsalted butter", food_ingredientquantity: "150g/5½oz" },
            { food_ingredient: "cream cheese", food_ingredientquantity: "300g/10½oz" }
                ],
            allergens: ["Gluten", "Dairy"],
            vegan: "",
            vegetarian: "vegetarian",
            instructions: [
                "For the carrot cake, preheat the oven to 180C/170C Fan/Gas 4. Grease and line a deep, 20cm/8in round cake tin with baking paper.",
                "Break the eggs into a large bowl, and lightly whisk using a fork. Add the vegetable oil and whisk again. Stir in the grated carrots, raisins, walnut pieces and orange zest.",
                "In a separate large bowl, sift together the flour, mixed spice, bicarbonate of soda and salt. Stir in the sugar. Add the wet carrot mixture to the dry ingredients and mix well to combine, making sure there are no pockets of flour.",
                "Spoon the cake batter into the lined tin and bake on the middle shelf for 1–1¼ hours, until the cake has risen and is golden-brown all over. Remove the cake from the oven and set aside in the tin to cool for 10–15 mins, then turn the cake out and leave to cool completely on a wire rack.",
                "While the carrot cake cools, make the frosting. Place the softened butter in a large bowl with the caster sugar, beat it for 2–3 minutes until light and creamy, then beat in the cream cheese until smooth.",
                "Place the cake on a serving plate or cake stand. Use a palette knife, or wide flat bladed knife, to spread the frosting over the top and sides of the cake. Scatter more walnuts on the top and serve.",
              ],
            review: [{
                reviewName: ["Diego Molina"],
                reviewNumber: [2],
                reviewText: ["Weird texture, not the nicest"]
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

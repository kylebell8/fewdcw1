const nedb = require("nedb");

class recipe {
    constructor(PathToRecipe) {
        console.log(PathToRecipe);
        if (PathToRecipe) {
            this.recipe = new nedb(PathToRecipe);
            console.log("recipe connected to " + PathToRecipe);
            PathToRecipe;
        } else {
            this.recipe = new nedb();
        }
    }
    init() {
        this.recipe.insert({
            id: "1",
            name: "carrot cake",
            description: "home made here",
            price: "2.50",
            category: "dessert",
            ingredients: "",
            allergens: ["Dairy", "Gluten", "Nuts"],
            available: "no",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "2",
            name: "sandwiches",
            description: "with a variety of fillings",
            price: "2.50",
            category: ("starter and side"),
            ingredients: "",
            allergens: ["Dairy", "Gluten"],
            available: "no",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "3",
            name: "salad",
            description: "uses seasonal local produce",
            price: "3.50",
            category: "side",
            ingredients: "",
            allergens: ["Nuts"],
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "4",
            name: "hot chocolate",
            description: "with fully fat or skimmed milk",
            price: "2.00",
            category: "drinks",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "5",
            name: "chocolate cake",
            description: "with cream",
            price: "2.50",
            category: "dessert",
            ingredients: ["225g softened butter",
                "225g golden caster sugar",
                "4 large eggs",
                "lemon, zested",
                "1 tsp vanilla extract",
                "225g self-raising flour",
                "splash of milk",
                "optional fillings of lemon curd, jam, lightly whipped cream",
                "icing sugar for dusting",],
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "6",
            name: "soup",
            description: "ask for soups available today",
            price: "2.00",
            category: "starter",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "7",
            name: "pizza",
            description: "ham and pineapple or four cheese",
            price: "5.00",
            category: "main",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "8",
            name: "baked potato",
            description: "with cheese, coleslaw, beans or tuna",
            price: "4.50",
            category: "main",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "9",
            name: "apple pie",
            description: "with cream or custard",
            price: "3.50",
            category: "dessert",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []

        });
        this.recipe.insert({
            id: "10",
            name: "cheesecake",
            description: "with cream",
            price: "3.00",
            category: "dessert",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "11",
            name: "fish and chips",
            description: "locally caught ",
            price: "6.50",
            category: "main",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "12",
            name: "lasagne",
            description: "with chips or garlic bread",
            price: "6.50",
            category: "main",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "13",
            name: "ice cream",
            description: "various flavours",
            price: "2.50",
            category: "dessert",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "14",
            name: "coffee",
            description: "freshly ground",
            price: "1.50",
            category: "drinks",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "15",
            name: "tea",
            description: "a range of varieties",
            price: "1",
            category: "drinks",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "16",
            name: "pasta",
            description: "with a tomato and garlic sauce",
            price: "5.50",
            category: "main",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
            menu: [],
            shopping: []
        });
        this.recipe.insert({
            id: "17",
            name: "chips",
            description: "with ketchup or mayonnaise",
            price: "3",
            category: "side",
            ingredients: "",
            allergens: "",
            available: "yes",
            review: [],
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

const recipes = [
  {
    title: "Salsa",
    ingredients: [
      "(1) 20 Ounce Can Whole Tomato + Juice",
      "(2) 10 Ounce Can Rotel",
      "(1) Clove of Garlic",
      "(1) Jalepeno Pepper",
      "(1/4) Tsp Ground Cumin",
      "(1/4) Tsp Salt",
      "(1/4) Tsp Sugar",
      "(1/2) Lime Juice",
    ],
    steps: [
      "Chop Up Veggies",
      "Toss in Food Processor",
      "Chill until Ready to Eat",
    ],
  },
  {
    title: "Bread",
    ingredients: [" ¾ cup (174g) water",
     "½ cup (125g) whole milk",
    " 1 packet (9g) active dry yeast (or 6.75g - you can round up to 7g if your scale doesn't have decimals -  instant yeast)",
    "3 cups (440g) bread flour",
     "1 ½ tsp (8g) fine sea salt",
     "1 tbsp (21g) granulated sugar",
    " 3 tbsp (42g) unsalted butter, softened",
    ],
    steps: [
      "1. Combine ¾ cup (174g) water with ½ cup (125g) whole milk and heat to around 98ºF. Mix in 1tbsp (9g) of active dry yeast, cover and set aside for 10 mins. **If you're using instant yeast instead of active dry yeast, add the instant yeast directly to the flour (make sure you mix the instant yeast into the flour before adding the rest of the dry ingredients).",
      "2. Combine 3 cups (440g) bread flour, 1 ½ tsp (8g) sea salt, and 1 tbsp (21g) granulated sugar. Whisk until thoroughly combined.",
      "3. Add flour mixture to bottom of stand mixer bowl. Attach dough hook and start mixer on low speed. Slowly pour milk/water mixture. Mix until combined. Scrape sides of bowl occasionally and mix until dough is smooth (approx 2 – 3 mins). **it's important to note at this stage that your dough might need more or less liquid depending on the type and brand of flour you are using. Don't dump all of the water in at once. Stop pouring liquid when the dough forms. If dough is too dry even after pouring all the liquid, you can add more water, but do so one tablespoon at a time**",
      "4. Add (42g) softened butter, 1 tbsp at a time. Once everything has been incorporated, knead in the machine for 30 seconds more.",
      "5. Take dough out of bowl and lightly shape into a ball. Lightly grease a bowl with some vegetable or olive oil (or any flavorless oil). Place dough in greased bowl and cover with greased plastic wrap. Let rise at room temperature for 1 to 1.5 hrs or until double in size. **if you used instant yeast, your dough might need less time. Be sure to check your dough periodically. Once you see it's doubled in size, no need to wait the full 1 - 1.5 hrs to do the next step.**",
      "6. Lightly grease a 9 x 4 ½ inch loaf pan.",
      "7. Deflate dough and place on lightly floured surface. Using a rolling pin, roll out your dough to half an inch thick and wide enough to fit in your loaf pan.",
      "8. Tightly roll your dough into a log and pinch the seam. Place inside the loaf pan (seam side down), cover with a damp towel, greased plastic wrap, shower cap, or an inverted loaf pan (if you have a cake carrier dome that works too), and let rise at room temperature for 45 mins to 1 hr or until double in size. **same note as step 5. Your dough might need less time than this. Once it has doubled in size, go to the next step to prevent your loaf from collapsing during baking. If you forgot to check your dough and it has risen more than one inch above the rim of your loaf pan,  it might be over-proofed which could lead to your loaf collapsing / deflating in the oven. You can test this by poking the side of the loaf with your finger. If the dent fills out halfway after a few seconds, your dough is properly proofed and ready for the oven. If the dent disappears right away, dough in under-proofed and you need to wait a few more minutes. If the dent does not disappear, it means the dough is over-proofed. To save over-proofed dough, punch it down to release all the gas, re-shape into a log and then let it proof for an additional 20 mins (each time you proof the dough will need less time) or until it has doubled in size or risen one inch above the rim of your pan.",
      "9. Preheat oven to 350ºF. ** Depending on how fast your oven heats up, you can do this during the last 10 - 15 mins of your second proof. This way your dough won't be in danger of over-proofing while you wait for your oven to finish pre-heating",
      "10. Place loaf pan in the oven and bake  at 350ºF for 35 to 40 mins or until golden brown. Take loaf out of pan and place on a cooling rack. You can test if the loaf is properly cooked by tapping the bottom. If it sounds hollow, it's done. If there's no sound, the inside might be undercooked. Return the loaf in the oven for another 5 to 10 mins (monitor closely to prevent burning). Let your loaf cool completely before slicing.",
    ],
  },
];

/**
 *
 * @param {string[]} listValues
 */
function createList(listValues) {
  const list = document.createElement("ul");

  for (const value of listValues) {
    const element = document.createElement("li");
    element.innerText = value;
    list.appendChild(element);
  }

  return list;
}

/**
 *
 * @param {string} title
 * @param {string} idType
 * @param {number} index
 */
const createID = (title, idType, index) => {
  return (
    title.toLowerCase() + "-" + idType.toLowerCase() + "-" + index.toString()
  );
};

/**
 * Creates a DOM element for a single recipe
 * @param {{title: string, ingredients: string[], steps: string[]}} recipe
 * @param {number} index
 */
function createRecipe(recipe, index) {
  const card = document.createElement("div");
  card.className = "card";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  cardHeader.id = createID(recipe.title, "header", index);

  const buttonContainer = document.createElement("h2");
  buttonContainer.className = "mb-0";

  const button = document.createElement("button");
  const buttonTargetID = createID(recipe.title, "collapse", index);
  button.className = "btn btn-link collapsed";
  button.type = "button";
  button.setAttribute("data-toggle", "collapse");
  button.setAttribute("data-target", `#${buttonTargetID}`);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", buttonTargetID);

  const buttonHeader = document.createElement("h1");
  buttonHeader.className = "better-header";
  buttonHeader.innerText = recipe.title;

  button.appendChild(buttonHeader);

  buttonContainer.appendChild(button);

  cardHeader.appendChild(buttonContainer);

  card.appendChild(cardHeader);

  const cardContent = document.createElement("div");
  cardContent.id = buttonTargetID;
  cardContent.className = "collapse";
  cardContent.setAttribute("aria-labelledby", cardHeader.id);
  cardContent.setAttribute("data-parent", "#entire-container");

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const ingredientsList = createList(recipe.ingredients);
  const stepList = createList(recipe.steps);

  cardBody.appendChild(ingredientsList);
  cardBody.appendChild(stepList);

  cardContent.appendChild(cardBody);

  card.appendChild(cardContent);

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const parent = document.getElementById("entire-container");
  for (let i = 0; i < recipes.length; ++i) {
    parent.appendChild(createRecipe(recipes[i], i));
  }
});

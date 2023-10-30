const recipes = [
    { recipe_name: 'chicken pot pie'},
    { recipe_name: 'chicken noodle soup'},
    { recipe_name: 'chicken fried rice'},
]

const ingredients = [
    { ingredient_name: 'chicken', ingredient_unit: 'lbs'},
    { ingredient_name: 'potatoes', ingredient_unit: 'lbs'},
    { ingredient_name: 'carrots', ingredient_unit: 'lbs'},
    { ingredient_name: 'celery', ingredient_unit: 'lbs'},
    { ingredient_name: 'onions', ingredient_unit: 'lbs'},
    { ingredient_name: 'chicken broth', ingredient_unit: 'lbs'},
    { ingredient_name: 'flour', ingredient_unit: 'lbs'},
    { ingredient_name: 'butter', ingredient_unit: 'lbs'},
    { ingredient_name: 'rice', ingredient_unit: 'lbs'},
    { ingredient_name: 'soy sauce', ingredient_unit: 'lbs'},
    { ingredient_name: 'noodles', ingredient_unit: 'lbs'},
]

const step_ingredients = [
    { step_id: 1, ingredient_id: 1, quantity: 1},
    { step_id: 2, ingredient_id: 2, quantity: 1},
    { step_id: 2, ingredient_id: 3, quantity: 1},
    { step_id: 2, ingredient_id: 4, quantity: 1},
    { step_id: 2, ingredient_id: 5, quantity: 1},
    { step_id: 3, ingredient_id: 6, quantity: 1},
    { step_id: 3, ingredient_id: 7, quantity: 1},
    { step_id: 3, ingredient_id: 8, quantity: 1},
    { step_id: 4, ingredient_id: 9, quantity: 1},
    { step_id: 5, ingredient_id: 10, quantity: 1},
    { step_id: 6, ingredient_id: 11, quantity: 1},
    { step_id: 7, ingredient_id: 1, quantity: 1},
    { step_id: 8, ingredient_id: 2, quantity: 1},
    { step_id: 8, ingredient_id: 3, quantity: 1},
    { step_id: 8, ingredient_id: 4, quantity: 1},
    { step_id: 8, ingredient_id: 5, quantity: 1},
    { step_id: 9, ingredient_id: 6, quantity: 1},
    { step_id: 9, ingredient_id: 7, quantity: 1},
    { step_id: 9, ingredient_id: 8, quantity: 1},
    { step_id: 10, ingredient_id: 9, quantity: 1},
    { step_id: 11, ingredient_id: 10, quantity: 1},
    { step_id: 12, ingredient_id: 11, quantity: 1},
    { step_id: 13, ingredient_id: 1, quantity: 1},
    { step_id: 14, ingredient_id: 2, quantity: 1},
    { step_id: 14, ingredient_id: 3, quantity: 1},
]

const steps = [
    // chicken pot pie
    { step_text: 'cook chicken', step_number: 1, recipe_id: 1},
    { step_text: 'cook vegetables', step_number: 2, recipe_id: 1},
    { step_text: 'make gravy', step_number: 3, recipe_id: 1},
    { step_text: 'bake', step_number: 4, recipe_id: 1},
    { step_text: 'serve', step_number: 5, recipe_id: 1},
    // chicken noodle soup
    { step_text: 'cook chicken', step_number: 1, recipe_id: 2},
    { step_text: 'cook vegetables', step_number: 2, recipe_id: 2},
    { step_text: 'make broth', step_number: 3, recipe_id: 2},
    { step_text: 'add noodles', step_number: 4, recipe_id: 2},
    { step_text: 'cook noodles', step_number: 5, recipe_id: 2},
    { step_text: 'serve', step_number: 6, recipe_id: 2},
    // chicken fried rice
    { step_text: 'cook chicken', step_number: 1, recipe_id: 3},
    { step_text: 'cook vegetables', step_number: 2, recipe_id: 3},
    { step_text: 'make rice', step_number: 3, recipe_id: 3},
    { step_text: 'add soy sauce', step_number: 4, recipe_id: 3},
    { step_text: 'serve', step_number: 5, recipe_id: 3},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}
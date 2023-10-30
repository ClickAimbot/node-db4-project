// const db = require('../../data/db-config.js');

function getRecipeById(recipe_id) {
    return Promise.resolve(`getRecipeById, recipe_id: ${recipe_id}`)
}

module.exports = {
    getRecipeById,
}
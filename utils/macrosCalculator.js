export const calculateMacros = (ingredients) => {
  const accInitialValue = { kcal: 0, fat: 0, carb: 0, protein: 0 };
  return ingredients.reduce((acc, ingredient) => {
    const quotient = ingredient.quantity / 100;

    acc.kcal += ingredient.kcal * quotient;
    acc.fat += ingredient.fat * quotient;
    acc.carb += ingredient.carb * quotient;
    acc.protein += ingredient.protein * quotient;

    return acc;
  }, accInitialValue);
};

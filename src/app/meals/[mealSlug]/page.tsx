const MealPage = ({ params }) => {
  return (
    <main>
      <h1>Meal Page</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
};

export default MealPage;
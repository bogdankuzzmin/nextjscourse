import classes from './meals.module.css';
import MealItem from '@/components/meals/mealItem';

const MealsList = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
};

export default MealsList;
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    imageUrl: "https://static.toiimg.com/photo/msid-69769432/69769432.jpg",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    imageUrl:
      "https://www.thespruceeats.com/thmb/LeyN-7W9T0KB2nl6pcuDZckHnjc=/4288x2848/filters:fill(auto,1)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",

    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    imageUrl: "https://images.media-allrecipes.com/userphotos/4023531.jpg",

    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2RE7tzCHd-esu1lAMlAbm4tfiUj0ut_6fw&usqp=CAU",

    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      imageUrl={meal.imageUrl}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

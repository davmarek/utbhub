import MenuItem from './MenuItem'

function MenuList(props: { meals: { mealKindName: String; rows: [any] } }) {
  return (
    <div>
      <h2>{props.meals.mealKindName}</h2>
      {props.meals.rows.map((meal) => (
        <MenuItem
          name={meal.item.mealName}
          price={meal.item.price}
          available={meal.item.state === 0}
        />
      ))}
    </div>
  )
}

export default MenuList

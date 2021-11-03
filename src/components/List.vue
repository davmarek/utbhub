<template>
  <div>
    <h2>{{ this.list.mealKindName }}</h2>
    <Meal
      v-for="lunch in list.rows"
      :key="lunch.item.altId"
      :name="lunch.item.mealName"
      :price="lunch.item.price"
      :available="lunch.item.state == 0"
    >
    </Meal>
  </div>
</template>

<script>
import Meal from './Meal.vue';

export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  components: {
    Meal,
  },
};
</script>

<style>
h2 {
  font-size: 22px;
  margin: 0;
  padding: 20px 0 8px;
}
</style>

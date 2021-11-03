<template>
  <div class="meal" :class="{ disabled: !this.available }">
    <div class="name">{{ this.name }}</div>
    <div class="price">
      <div v-if="price > 0" class="price-chip">{{ this.price }} Kč</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    available: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style>
.meal {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr auto;

  padding: 8px 16px;
}
.meal:not(.meal:last-child) {
  border-bottom: 1px solid #eee;
}

.name {
  padding-right: 16px;
  display: flex;
  align-items: center;
}

.price-chip {
  padding: 4px 10px;
  color: white;
  background-color: #007aff;
  border-radius: 50vh;

  font-weight: 500;
}

.disabled {
  color: #ccc;
}

.disabled .price-chip {
  background-color: #eee;
}
</style>

<script>
import List from '../components/List.vue';

export default {
  data() {
    return {
      menu: null,
      date: null,
    };
  },
  components: {
    List,
  },
  created() {
    console.log(this.$route.params.jidelna);
    fetch('https://doctus.creativnivyvojari.cz/app/index.php')
      .then((response) => response.json())
      .then((json) => {
        this.menu = json.groups;
        this.date = new Date(json.date);
      });
  },
};
</script>

<template>
  <div v-if="this.date != null">
    <h1 id="date">
      {{
        this.date.toLocaleDateString('cs-CZ', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      }}
    </h1>

    <div v-if="this.menu.length > 0">
      <List :list="this.menu[0]"></List>

      <List :list="this.menu[1]"></List>

      <List :list="this.menu[2]"></List>

      <List :list="this.menu[3]"></List>
    </div>

    <div v-else>
      <h3>Na dnešek není připraveno žádné menu</h3>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #fafafa;
}

#app {
  font-family: 'Rubik', Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;

  padding: 16px 16px 100px;
}

#app > div {
  margin: 0 auto;
  max-width: 1100px;
}

#date {
  margin: 32px 0 0;
  text-transform: capitalize;
}
</style>

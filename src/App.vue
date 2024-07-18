<template>
  <h1>Tienda 32 Bits</h1>
  <h3>Lista de juegos</h3>
  <table class="table">
    <thead>
      <th>Código</th>
      <th>Portada</th>
      <th>Nombre</th>
      <th>Stock</th>
      <th>Precio</th>
      <th>Acciones</th>
    </thead>
    <tbody>
      <tr v-for="(juego, i) in juegos" :key="i">
        <td>{{ juego.codigo }}</td>
        <td><img :src="juego.cover" alt=""> </td>
        <td class="game-name">{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>${{ Number(juego.precio).toLocaleString() }}</td>
        <td>
          <button class="btn-delete" @click="decrementar(i)">-</button>
          <button class="btn-add" @click="incrementar(i)">+</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['juegos']),
  },
  methods: {
    ...mapActions(['incrementar', 'decrementar']),
  },
}
</script>

<style>
body {
  display: grid;
  place-content: center;
  background-color: rgb(9, 29, 12);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(245, 255, 235);
  margin-top: 60px;
}

table {
  background-color: rgb(255, 239, 217);
  margin-top: 2rem;
}
table,td, th {
  color: rgb(9, 29, 12);
  border: 1px solid rgb(9, 29, 12);
}

table img {
  height: 100px;
}

table td,
table th {
  font-size: 1.25rem;
  text-align: center;
  vertical-align: middle;
}

table th {
  padding: .5rem 2rem;
}

td button {
  display: inline-block;
  height: 40px;
  width: 40px;
  vertical-align: middle;
  text-align: center;
  margin: 0 .5rem;
  border-radius: 4px;
  transition: all 100ms linear;
  font-size: 1.5rem;
  font-weight: 500;
}

td button:hover {
  scale: 1.1;
  box-shadow: 1px 1px 1px 2px rgba(9, 29, 12, 0.5);
  transform: translate(-2px, -2px);
}

.btn-delete {
  background-color: crimson;
  color: rgb(255, 239, 217);
}

.btn-add {
  background-color: rgb(9, 29, 12);
  color: rgb(245, 255, 235);
}

tr:hover {
  background-color: rgb(9, 29, 12);
  color: rgb(245, 255, 235);
}
</style>

<template>
  <div id="app">
    <div id="particles-js"></div>
    <div class="count-particles"></div>
    <header>
      <div class="nav-bar">
      <nav>
        <router-link class="nav-buttons" to="/login">Sign In</router-link> 
        <router-link class="nav-buttons register" to="/register">Sign Up</router-link>
      </nav>
      </div>
    </header>
    <div class="main">
      <h1>Welcome to <p>Drollo!</p></h1>
      <a class="button" href="https://github.com">
        GitHub
      </a>
      <a class="button" href="https://patreon.com">Patreon</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрирование содержимого по вертикали */
  align-items: center; /* Центрирование содержимого по горизонтали */
  margin: 0; /* Убрать отступы */
}



header {
    width: 100%;
    margin-top: 10%;
    margin-left: 340%;
    display: flex;
    justify-content: flex-end; /* Перемещение навигационных кнопок вправо */
}

.nav-buttons {
  margin: 10px;
  color: white;
  border: 2px solid #e6b800;
  border-radius: 10px;
  padding: 10px;
  text-decoration: none; /* Убрать подчеркивание */
}

.register {
  background-color: #e6b800;
}

.main {
  text-align: center; /* Центрирование текста в блоке main */
  margin-top:110%;
}

.button {
  align-items: center; /* Вертикальное выравнивание иконки и текста */
  margin: 10px;
  padding: 10px 20px;
  background-color: #e6b800; /* Цвет фона кнопок */
  color: white; /* Цвет текста кнопок */
  border: none; /* Убрать границу */
  border-radius: 5px; /* Скругление углов кнопок */
  text-decoration: none; /* Убрать подчеркивание */
}

p {
  color: #e6b800;
}

.nav-buttons {
    margin: 10px;
    color: white;
    border: 2px solid #e6b800;
    border-radius: 10px;
    padding: 10px;
}

@media (max-width: 768px) {
    header {
        margin-top: 5%;
        margin-left: 0; /* Убрать отступ слева на мобильных устройствах */
        justify-content: center; /* Центрирование навигационных кнопок на мобильных */
    }
}


</style>

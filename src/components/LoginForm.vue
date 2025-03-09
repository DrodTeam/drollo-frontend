<template>
<body>
    <canvas id="spaceCanvas"></canvas>
    <div class="Main">
        <div class="MainContainer" >
            <div class="MainContent" >
                <h2>Welcome to <p class="Logo">Drollo</p></h2>
                <form @submit.prevent="login">
                <input v-model="email" type="email" placeholder="Email" required />
                <input v-model="password" type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                </form>
                <p class="DoHave" >Don't have an account? <router-link  to="/register">Register</router-link></p>
            </div>
        </div>
    </div>
</body>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

a {
    text-decoration: none;
    color: #ffcc00;
}

a:hover {
    color: #e6b800;
}

.Logo {
    color: #ffcc00;
}




body {
    margin: 0;
    overflow: hidden; /* Скрыть прокрутку */
    font-family: Poppins;
}

canvas {
    position: fixed; /* Фиксированное позиционирование */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Под контейнером */
}

.Main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Центрирование по вертикали */
    position: relative; /* Для позиционирования контейнера */
    z-index: 1; /* Содержимое выше канваса */
}

.MainContainer {
    background-color: rgba(35, 39, 42, 0.8); /* Полупрозрачный темно-серый фон для контейнера */
    border-radius: 10px; /* Закругленные углы */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Тень */
    padding: 20px; /* Отступы внутри контейнера */
    z-index: 2; /* Содержимое выше канваса */
}

.MainContent {
    text-align: center; /* Центрирование текста */
    color: #ffffff; /* Белый текст */
}

input {
    width: 90%; /* Полная ширина */
    padding: 10px; /* Отступы внутри полей */
    margin: 10px 0; /* Отступы между полями */
    background-color: #2c2f33; /* Темно-серый фон для полей */
    color: #ffffff; /* Белый текст */
    border: none; 
    border-radius: 5px; /* Закругленные углы */
}

button {
    background-color: #ffcc00; /* Желтая кнопка */
    color: #2c2f33; /* Темно-серый текст */
    border: none; /* Без рамки */
    padding: 10px; /* Отступы внутри кнопки */
    margin-top: 10px;
    width: 92%;
    border-radius: 5px; /* Закругленные углы */
    cursor: pointer; /* Указатель при наведении */
}

button:hover {
    background-color: #e6b800; /* Темнее при наведении */
}
</style>

<script src="./src/Login/script.js"></script>
  

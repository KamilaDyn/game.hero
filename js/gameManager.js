let gameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "Superman":
        player = new Player(
          classType,
          800,
          300,
          200,
          800,
          300,
          300,
          300,
          0,
          150
        );
        break;
      case "Spider-Man":
        player = new Player(
          classType,
          800,
          150,
          300,
          800,
          200,
          300,
          0,
          100,
          100
        );
        break;
      case "Jean-Grey":
        player = new Player(classType, 500, 100, 300, 720, 300, 100, 0, 0, 200);
        break;
      case "Batman":
        player = new Player(classType, 800, 50, 300, 500, 0, 150, 0, 300, 300);
        break;
      default:
    }
    let getInterface = document.querySelector(".interface");

    // getInterface.innerHTML = `<img src="img/${classType.toLowerCase()}.jpg" class="image"><div class="super-hero"><h3>${classType}</h3><p class="health-player">Zdrowie: ${
    //   player.health
    // }</p><p class="strength-player">Siła: ${player.strength}</p><p>Zręczność: ${
    //   player.agility
    // }</p><p class="hardness-player">Odporność: ${
    //   player.hardness
    // }</p><p class="superPower-player">Nadprzyrodzona siła: ${
    //   player.superPower
    // }</p><p>Szybkość: ${player.speed}</p><p>Umiejętność latania: ${
    //   player.flying
    // }</p><p>Gadgets: ${player.gadgets}</p><p>Intelligencja: ${
    //   player.intelligence
    // }</p></div>`;

    getInterface.innerHTML = `<img src="img/${classType.toLowerCase()}.jpg" class="image i-small"><div class="super-hero super-hero-small"><h3>${classType}</h3><ul><li class="health-player">Zdrowie: ${
      player.health
    }</li><li class="strength-player">Siła: ${player.strength}</li><li>Zręczność: ${
      player.agility
    }</li><li class="hardness-player">Odporność: ${
      player.hardness
    }</li><li class="superPower-player">Nadprzyrodzona siła: ${
      player.superPower
    }</li><li>Szybkość: ${player.speed}</li><li>Umiejętność latania: ${
      player.flying
    }</li><li>Gadgets: ${player.gadgets}</li><li>Intelligencja: ${
      player.intelligence
    }</li><ul></div>`;
  },

  setPreFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    let getEnemy = document.querySelector(".enemy");

    getHeader.innerHTML = `<p>Zadanie: Znajdź wroga!!</p>`;
    getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Szukaj wroga!</a>`;
    getEnemy.style.display = "none";
    getArena.style.display = "block";
  },
  setFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    let getArena = document.querySelector(".arena");
    getArena.style.display = "block";
    getEnemy.style.display = "block";

    //create enemy
    let enemy00 = new Enemy("Joker", 600, 100, 300, 1000, 100, 0, 0, 300, 300);
    let enemy01 = new Enemy(
      "Vulture",
      600,
      300,
      200,
      800,
      0,
      200,
      300,
      300,
      150
    );
    let enemy02 = new Enemy(
      "Darkseid",
      600,
      300,
      200,
      1000,
      300,
      200,
      300,
      0,
      300
    );
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
    // console.log(chooseRandomEnemy);
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
      default:
    }

    getHeader.innerHTML = `<p>Zadanie: Wybierz swój ruch</p>`;
    getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Atakuj!!!!</a>`;
    getEnemy.innerHTML = `<img src="img.enemy/${enemy.enemyType.toLowerCase()}.jpg" class="image i-small"><div class="bad-enemy bad-enemy-small"><h3>${
      enemy.enemyType
    }</h3><ul><li class="health-enemy">Zdrowie: ${
      enemy.health
    }</li><li class="strength-enemy">Siła: ${enemy.strength}</li><li>Zręczność: ${
      enemy.agility
    }</li><li class="hardness-enemy">Odporność: ${
      enemy.hardness
    }</li><li class="superPower-enemy">Nadprzyrodzona siła ${
      enemy.superPower
    }</li><li>Szybkość: ${enemy.speed}</p><p>Umiejętność latania: ${
      enemy.flying
    }</li><li>Gadgets: ${
      enemy.gadgets
    }</li><li class="intelligence-enemy">Intelligencja: ${
      enemy.intelligence
    }</li></ul></div>`;
  }
};
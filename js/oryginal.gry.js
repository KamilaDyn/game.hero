let player;

function Player(
  classType,
  health,
  strength,
  agility,
  hardness,
  superPower,
  speed,
  flying,
  gadgets,
  intelligence
) {
  this.classType = classType;
  this.health = health;
  this.strength = strength;
  this.agility = agility;
  this.hardness = hardness;
  this.superPower = superPower;
  this.speed = speed;
  this.flying = flying;
  this.gadgets = gadgets;
  this.intelligence = intelligence;
}

let PlayerMoves = {
  calcAttack: function () {
    //Kto atakuje jako pierwszy
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let getEnemyFlying = enemy.flying //dodane
    let getPlayerFlying = player.flying //dodane


    //gracz atakuje
    let playerAttack = function () {
      let calcBaseDamage;
      if (player.health > 0) {
        calcBaseDamage = (player.strength * player.strength) / 1000;
      } else {
        calcBaseDamage = (player.strength * player.agility) / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //liczba uderzeń
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(enemy.agility / 10)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    //dodane
    let playerAttack2 = function () {
      let calcInterDamage;
      if (player.superPower > 0) {
        calcInterDamage = (player.superPower * player.superPower) / 1000;
      } else {
        calcInterDamage = (player.superPower * player.intelligence) / 1000;
      }
      let offsetInterDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputInterDamage = calcInterDamage + offsetInterDamage; //dodane
      //liczba super uderzen
      let numberOfSuperHits = Math.floor((Math.random() * Math.floor(enemy.intelligence / 10)) / 2) + 1;
      let attackValues2 = [calc0utputInterDamage, numberOfSuperHits];
      return attackValues2;
    };
    //koniec
    //dodane
    let playerAttack3 = function () {
      let calcExtraDamage;
      if ((player.intelligence > 0) || (player.gadgets > 0)) {
        calcInterDamage = (player.gadgets * player.gadgets) / 1000;
      } else {
        calcInterDamage = (player.gadgets * player.intelligence) / 1000;
      }
      let offsetExtraDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputExtraDamage = Math.floor(calcExtraDamage + offsetExtraDamage) //dodane
      //liczba super uderzen
      let numberOfExtraHits = Math.floor((Math.random() * Math.floor(enemy.gadgets / 10)) / 2) + 1;
      let attackValues3 = [calc0utputExtraDamage, numberOfExtraHits];
      return attackValues3;
    };

    //koniec

    //atak przeciwnika
    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.strength > 0) {
        calcBaseDamage = (enemy.strength * enemy.strength) / 1000;
      } else {
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //liczba uderzeń
      let numberOfHits = Math.floor((Math.random() * Math.floor(enemy.agility / 10)) / 2) + 1
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    //dodane

    let enemyAttack2 = function () {
      let calcInterDamage;
      if (enemy.intelligence > 0) {
        calcInterDamage = (enemy.intelligence * enemy.intelligence) / 1000;
      } else {
        calcInterDamage = (enemy.intelligence * enemy.gadgets) / 1000;
      }
      let offsetInterDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputInterDamage = calcInterDamage + offsetInterDamage;
      //super uderzenia
      let numberOfSuperHits = Math.floor((Math.random() * Math.floor(enemy.intelligence / 15)) / 2) + 1;
      let attackValues2 = [calc0utputInterDamage, numberOfSuperHits];
      return attackValues2
    }
    //koniec
    //dodane
    let enemyAttack3 = function () {
      let calcExtraDamage;
      if (enemy.hardness > 0) {
        calcExtraDamage = (enemy.superPower * enemy.superPower) / 1000;
      } else {
        calcExtraDamage = (enemy.superPower * enemy.intelligence) / 1000;
      }
      let offsetExtraDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputExtraDamage = calcExtraDamage + offsetExtraDamage;
      //super uderzenia
      let numberOfExtraHits = Math.floor((Math.random() * Math.floor(enemy.superPower / 5)) / 2) + 1;
      let attackValues3 = [calc0utputExtraDamage, numberOfExtraHits];
      return attackValues3
    }
    //koniec
    let getEnemyHealth = document.querySelector(".health-enemy");
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHardness = document.querySelector(".hardness-enemy") //dodane
    let getPlayerSuperPower = document.querySelector(".superPower-player") //dodane
    let getEnemySuperPower = document.querySelector(".superPower-enemy"); //dodane
    let getEnemyIntelligence = document.querySelector(".intelligence-enemy"); //dodane 
    let getPlayerHardness = document.querySelector(".hardness-player") //dodane
    let getEnemyStrength = document.querySelector(".strength-enemy") //dodane
    let getPlayerStrength = document.querySelector(".strength-player") //dodane
    //atak gracza

    if ((getPlayerSpeed >= getEnemySpeed) || (getPlayerFlying >= getEnemyFlying)) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      let playerAttack2Values = playerAttack2(); //dodane
      let totalDamage2 = playerAttack2Values[0] * playerAttack2Values[1]; //dodane
      enemy.hardness = Math.floor(enemy.hardness - totalDamage2); //dodane
      let playerAttack3Values = playerAttack3(); //dodane
      let totalDamage3 = playerAttack3Values[0] * playerAttack3Values[1]; //dodane
      enemy.strength = Math.floor(enemy.strength - totalDamage3) //dodane
      alert(
        `Uderzyłeś ${playerAttackValues[0]} , zniszczyłeś ${
          playerAttackValues[1]
        } razy, uderzyłes ${playerAttack2Values[0]}, zniszczyłeś odporność ${playerAttack2Values[1]} siła spadła do: ${playerAttack3Values}`
      );
      if ((enemy.health <= 0) || (enemy.hardness <= 0)) {
        alert("Zwyciężyłeś!!:) Ośwież stronę");
        getEnemyHealth.innerHTML = `Health: 0 `;
        getPlayerHealth.innerHTML = `Health: ${player.health} `;
        getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}` //dodane
        getPlayerHardness.innerHTML = `Odporność: ${player.hardness}` //dodane
        getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${enemy.superPower}` // dodane
        getPlayerStrength.innerHTML = `Siła: ${player.strength}` //dodane
        getEnemyStrength.innerHTML = `Siła: ${enemy.strength}` //dodane
      } else {
        getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
        getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}` //dodane
        //atak przeciwnika
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        let enemyAttack2Values = enemyAttack2() //dodane
        let totalDamage2 = enemyAttack2Values[0] * enemyAttack2Values[1]; //dodane
        player.hardness = player.hardness - totalDamage2; //dodane
        let enemyAttack3Values = enemyAttack3() //dodane
        let totalDamage3 = enemyAttack3Values[0] * enemyAttack3Values[1]; //dodane
        player.superPower = player.superPower - totalDamage3 //DODANE
        alert(
          `Wróg uderzył  ${playerAttackValues[0]} , zniszczył ${
            playerAttackValues[1]
          } razy, odporność spadła do ${player.hardness}, Nadprzyrodzona siła zmalała ${player.superPower}`)
        getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${player.superPower}` //dodane
        getPlayerHealth.innerHTML = ` Health: ${player.health}` //dodane


        if (player.health <= 0) {
          alert(" Przegrałeś! Zwyciężył przeciwnik!! :( Ośwież stronę");
          getPlayerHealth.innerHTML = `Health: 0 `;
          getEnemyHealth.innerHTML = `Health: ${enemy.health} `;
          getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}` //dodane
          getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${player.superPower}` //dodane
          getPlayerHardness.innerHTML = `Odporność: ${player.hardness}` //dodane
          getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${enemy.superPower}` // dodane
          getPlayerStrength.innerHTML = `Siła: ${player.strength}` //dodane
          getEnemyStrength.innerHTML = `Siła: ${enemy.strength}` //dodane
        } else {
          getPlayerHealth.innerHTML = `Health: ${player.health} `;
        }
      }
    } else if ((getEnemySpeed >= getPlayerSpeed) && (getEnemyFlying >= getPlayerFlying)) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      let enemyAttack2Values = enemyAttack2() //dodane
      let totalDamage2 = enemyAttack2Values[0] * enemyAttack2Values[1]; //dodane
      player.hardness = player.hardness - totalDamage2; //dodane
      let enemyAttack3Values = enemyAttack3() //dodane
      let totalDamage3 = enemyAttack3Values[0] * enemyAttack3Values[1]; //dodane
      player.strength = player.strength - totalDamage3; //dodane
      alert(
        `Wróg uderzył ${enemyAttackValues[0]} , zniszczył ${
            enemyAttackValues[1]
          } razy, twoja siła spadła do ${player.strength}, super mocy pozostało ${player.superPower}`
      );
      getPlayerHealth.innerHTML = `Health: ${player.health}` //dodane
      getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${player.superPower}` //dodane
      getPlayerHardness.innerHTML = `Odporność: ${player.hardness}` //dodane

      if (player.health <= 0) {
        alert("Wróg wygrał!!:) Ośwież stronę");
        getPlayerHealth.innerHTML = `Health: 0 `;
        getEnemyHealth.innerHTML = `Health: ${enemy.health} `;
        getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${player.superPower}` //dodane
        getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`
      } else {
        getPlayerHealth.innerHTML = `Health: ${player.health}`;
        //atak gracza
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        let playerAttack2Values = playerAttack2(); //dodane
        let totalDamage2 = playerAttack2Values[0] * playerAttack2Values[1]; //dodane
        enemy.hardness = Math.floor(enemy.hardness - totalDamage2); //dodane
        let playerAttack3Values = playerAttack3(); //dodane
        let totalDamage3 = playerAttack3Values[0] * playerAttack3Values[1]; //dodane
        enemy.strength = Math.floor(enemy.strength - totalDamage3) //dodane
        alert(
          `Gracz  ${playerAttackValues[0]} , zniszczył ${
                  playerAttackValues[1]
                } razy`
        );

        if (enemy.health <= 0) {
          alert(" Wygrałeś! :) Ośwież stronę");
          getEnemyHealth.innerHTML = `Health: 0 `;
          getPlayerHealth.innerHTML = `Health: ${player.health} `;
        } else {
          getEnemyHealth.innerHTML = `Health: ${enemy.health} `;
        }
      }
    }
  }
}
//player
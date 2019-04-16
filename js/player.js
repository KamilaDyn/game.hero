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
  calcAttack: function() {
    //Kto atakuje jako pierwszy
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let getEnemyFlying = enemy.flying;
    let getPlayerFlying = player.flying;

    //gracz atakuje
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.health > 0) {
        calcBaseDamage = Math.floor((player.strength * player.speed) / 1000);
      } else {
        calcBaseDamage = Math.floor((player.strength * player.agility) / 1000);
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //liczba uderzeń
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(player.agility / 10)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };

    let playerAttack2 = function() {
      let calcInterDamage;
      if (player.superPower > 0) {
        calcInterDamage = Math.floor(
          (player.superPower * player.superPower) / 1000
        );
      } else {
        calcInterDamage = Math.floor(
          (player.superPower * player.intelligence) / 1000
        );
      }
      let offsetInterDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputInterDamage = calcInterDamage + offsetInterDamage;
      let numberOfSuperHits =
        Math.floor((Math.random() * Math.floor(player.intelligence / 10)) / 2) +
        1;
      let attackValues2 = [calc0utputInterDamage, numberOfSuperHits];
      return attackValues2;
    };

    let playerAttack3 = function() {
      let calcExtraDamage;
      if (player.intelligence > 0) {
        calcExtraDamage = Math.floor(
          (player.gadgets + player.intelligence) / 100
        );
      } else {
        calcExtraDamage = Math.floor(
          (player.speed * player.intelligence) / 100
        );
      }
      let offsetExtraDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputExtraDamage = Math.floor(
        calcExtraDamage + offsetExtraDamage
      );
      //liczba ekstra uderzen
      let numberOfExtraHits =
        Math.floor((Math.random() * Math.floor(player.intelligence / 10)) / 2) +
        1;
      let attackValues3 = [calc0utputExtraDamage, numberOfExtraHits];
      return attackValues3;
    };

    //atak przeciwnika
    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.health > 0) {
        calcBaseDamage = Math.floor((enemy.strength * enemy.speed) / 1000);
      } else {
        calcBaseDamage = Math.floor((enemy.strength * enemy.agility) / 1000);
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //liczba uderzeń
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(enemy.agility / 5)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };

    let enemyAttack2 = function() {
      let calcInterDamage;
      if (enemy.intelligence > 0) {
        calcInterDamage = Math.floor(
          (enemy.intelligence * enemy.intelligence) / 1000
        );
      } else {
        calcInterDamage = Math.floor(
          (enemy.intelligence * enemy.gadgets) / 1000
        );
      }
      let offsetInterDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputInterDamage = calcInterDamage + offsetInterDamage;

      let numberOfSuperHits =
        Math.floor((Math.random() * Math.floor(enemy.intelligence / 15)) / 2) +
        1;
      let attackValues2 = [calc0utputInterDamage, numberOfSuperHits];
      return attackValues2;
    };

    let enemyAttack3 = function() {
      let calcExtraDamage;
      if (enemy.hardness > 0) {
        calcExtraDamage = Math.floor(
          (enemy.superPower + enemy.superPower) / 1000
        );
      } else {
        calcExtraDamage = Math.floor(
          (enemy.superPower + enemy.intelligence) / 1000
        );
      }
      let offsetExtraDamage = Math.floor(Math.random() * Math.floor(10));
      let calc0utputExtraDamage = calcExtraDamage + offsetExtraDamage;
      //ekstra uderzenia
      let numberOfExtraHits =
        Math.floor((Math.random() * Math.floor(enemy.intelligence / 5)) / 2) +
        1;
      let attackValues3 = [calc0utputExtraDamage, numberOfExtraHits];
      return attackValues3;
    };
    let getEnemyHealth = document.querySelector(".health-enemy");
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHardness = document.querySelector(".hardness-enemy");
    let getPlayerHardness = document.querySelector(".hardness-player");
    let getPlayerSuperPower = document.querySelector(".superPower-player");
    let getEnemySuperPower = document.querySelector(".superPower-enemy");
    let getEnemyStrength = document.querySelector(".strength-enemy");
    let getPlayerStrength = document.querySelector(".strength-player");

    //atak gracza
    if (getPlayerSpeed >= getEnemySpeed || getPlayerFlying >= getEnemyFlying) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      let playerAttack2Values = playerAttack2();
      let totalDamage2 = playerAttack2Values[0] * playerAttack2Values[1];
      enemy.hardness = Math.floor(enemy.hardness - totalDamage2);
      let playerAttack3Values = playerAttack3();
      let totalDamage3 = playerAttack3Values[0] + playerAttack3Values[1];
      enemy.strength = enemy.strength - totalDamage3;
      alert(
        `Uderzyłeś ${playerAttackValues[0]} , odebrałeś życia: ${
          playerAttackValues[1]
        }, uderzyłeś w odporność: ${
          playerAttack2Values[0]
        } razy, uszkodziłeś w odporność: ${
          playerAttack2Values[1]
        } punkty;  siła przeciwnika spadła o: ${playerAttack3Values[1]} punkty.`
      );
      getPlayerHealth.innerHTML = `Zdrowie: ${player.health}`;
      getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health}`;
      getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
      getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
      getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${Math.floor(
        player.superPower
      )}`;
      getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${Math.floor(
        enemy.superPower
      )}`;
      console.log(player.superPower);

      if (
        (enemy.health <= 0 && player.health > 0) ||
        (player.hardness >= 50 && enemy.hardness < 50) ||
        (player.strength >= 30 && enemy.strength < 30)
      ) {
        alert("Zwyciężyłeś!!:) Ośwież stronę");
        getEnemyHealth.innerHTML = `Zdrowie: 0 `;
        getPlayerHealth.innerHTML = `Zdrowie: ${player.health} `;
        getEnemyHardness.innerHTML = `Odporność: 0`;
        getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
        getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${Math.floor(
          player.superPower
        )}`;
        getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${Math.floor(
          enemy.superPower
        )}`;
        getPlayerStrength.innerHTML = `Siła: ${player.strength}`;
        getEnemyStrength.innerHTML = `Siła: ${enemy.strength}`;
      } else {
        //atak przeciwnika
        getEnemyHealth.innerHTML = `Zdrowie ${enemy.health}`;
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        let enemyAttack2Values = enemyAttack2();
        let totalDamage2 = enemyAttack2Values[0] * enemyAttack2Values[1];
        player.hardness = player.hardness - totalDamage2;
        let enemyAttack3Values = enemyAttack3();
        let totalDamage3 = enemyAttack3Values[0] * enemyAttack3Values[1];
        player.superPower = player.superPower - totalDamage3;
        alert(
          `Wróg uderzył  ${
            playerAttackValues[0]
          } razy , zniszczył twoje zdrowie o${
            playerAttackValues[1]
          } punktów, odporność spadła do ${
            player.hardness
          }, Nadprzyrodzona siła zmalała o ${player.superPower} punkty`
        );
        getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health}`;
        getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
        getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
          player.superPower
        }`;
        getPlayerHealth.innerHTML = `Zdrowie: ${player.health}`;
        getPlayerHardness.innerHTML = `Siła: ${player.hardness}`;

        if (
          (player.health <= 0 && enemy.health > 0) ||
          (player.hardness <= 50 && enemy.hardness > 50) ||
          (player.strength <= 30 && enemy.strength > 30)
        ) {
          alert(" Przegrałeś! Zwyciężył przeciwnik!! :( Ośwież stronę");
          getPlayerHealth.innerHTML = `Zdrowie: 0 `;
          getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health} `;
          getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
          getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
            player.superPower
          }`;
          getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
          getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${
            enemy.superPower
          }`;
          getPlayerStrength.innerHTML = `Siła: ${player.strength}`;
          getEnemyStrength.innerHTML = `Siła: ${enemy.strength}`;
        } else {
          getPlayerHealth.innerHTML = `Zdrowie: ${player.health} `;
          getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health} `;
          getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
          getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
            player.superPower
          }`;
          getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
          getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${
            enemy.superPower
          }`;
          getPlayerStrength.innerHTML = `Siła: ${player.strength}`;
          getEnemyStrength.innerHTML = `Siła: ${enemy.strength}`;
        }
      }

      //przeciwnik silniejszy
    } else if (
      getEnemySpeed >= getPlayerSpeed &&
      getEnemyFlying >= getPlayerFlying
    ) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      let enemyAttack2Values = enemyAttack2();
      let totalDamage2 = enemyAttack2Values[0] * enemyAttack2Values[1];
      player.hardness = player.hardness - totalDamage2;
      let enemyAttack3Values = enemyAttack3();
      let totalDamage3 = enemyAttack3Values[0] * enemyAttack3Values[1];
      player.strength = player.strength - totalDamage3;
      alert(
        `Wróg uderzył ${enemyAttackValues[0]} , zniszczył Ci zdrowi o  ${
          enemyAttackValues[1]
        } punkty, twoja siła spadła do ${
          player.strength
        } punktów, super mocy pozostało ${player.superPower}`
      );
      getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health}`;
      getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
      getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
        player.superPower
      }`;
      getPlayerHealth.innerHTML = `Zdrowie: ${player.health}`;
      getPlayerHardness.innerHTML = `Siła: ${player.hardness}`;

      if (
        (player.health <= 0 && enemy.health > 0) ||
        (player.hardness <= 50 && enemy.hardness > 50) ||
        (player.strength <= 30 && enemy.strength > 30)
      ) {
        alert("Wróg wygrał!!:) Ośwież stronę");
        getPlayerHealth.innerHTML = `Zdrowie: 0 `;
        getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health} `;
        getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
        getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
          player.superPower
        }`;
        getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
        getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${
          enemy.superPower
        }`;
        getPlayerStrength.innerHTML = `Siła: ${player.strength}`;
        getEnemyStrength.innerHTML = `Siła: ${enemy.strength}`;
      } else {
        getPlayerHealth.innerHTML = `Zdrowie: ${player.health}`;
        //atak gracza
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        let playerAttack2Values = playerAttack2();
        let totalDamage2 = playerAttack2Values[0] * playerAttack2Values[1];
        enemy.hardness = Math.floor(enemy.hardness - totalDamage2);
        let playerAttack3Values = playerAttack3();
        let totalDamage3 = playerAttack3Values[0] * playerAttack3Values[1];
        enemy.strength = Math.floor(enemy.strength - totalDamage3);
        alert(
          `Gracz  zaatakował ${
            playerAttackValues[0]
          } , zniszczył zdrowie przeciwnika ${
            playerAttackValues[1]
          } punkty, użył super mocy ${player.superPower}`
        );
        getPlayerHealth.innerHTML = `Zdrowie: ${player.health} `;
        getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health} `;
        getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
        getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
          player.superPower
        }`;
        getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
        getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${
          enemy.superPower
        }`;
        getPlayerStrength.innerHTML = `Siła: ${player.strength}`;
        getEnemyStrength.innerHTML = `Siła: ${enemy.strength}`;

        if (
          (enemy.health <= 0 && player.health > 0) ||
          (enemy.hardness <= 50 && player.hardness > 50) ||
          (player.strength > 30 && enemy.strength <= 30)
        ) {
          alert(" Wygrałeś! :) Ośwież stronę");
          getEnemyHealth.innerHTML = `Zdrowie: 0 `;
          getPlayerHealth.innerHTML = `Zdrowie: ${player.health} `;
          getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health} `;
          getEnemyHardness.innerHTML = `Odporność: ${enemy.hardness}`;
          getPlayerSuperPower.innerHTML = `Nadprzyrodzona siła: ${
            player.superPower
          }`;
          getPlayerHardness.innerHTML = `Odporność: ${player.hardness}`;
          getEnemySuperPower.innerHTML = `Nadprzyrodzona siła: ${
            enemy.superPower
          }`;
          getPlayerStrength.innerHTML = `Siła: ${player.strength}`;
          getEnemyStrength.innerHTML = `Siła: ${enemy.strength}`;
        } else {
          getEnemyHealth.innerHTML = `Zdrowie: ${enemy.health} `;
        }
      }
    }
  }
};

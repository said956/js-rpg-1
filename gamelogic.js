    import Person from "./character.js";
    let fighter1Race;
    let fighter1Item;
    let fighter2Race;
    let fighter2Item;
    let fighter1;
    let fighter2;
    let fighter1Name;
    let fighter2Name;
    let fighter1Healthbar;
    let fighter2Healthbar;

    function yieldTheBattle() {
        if (event.target == document.getElementById("fighter01-yield")) {
            alert(fighter1Name + " yields" + "..." + fighter2Name + " wins this battle !");
            document.location.reload();
        } else if (event.target == document.getElementById("fighter02-yield")) {
            alert(fighter2Name + " yields" + "..." + fighter1Name + " wins this battle !");
            document.location.reload();
        }

    }

    document.getElementById("run").addEventListener("click", create);

    function create() {
        let fighter1Hit = document.getElementById("fighter01-hit");
        let fighter1Heal = document.getElementById("fighter01-heal");
        let fighter1Yield = document.getElementById("fighter01-yiel");
        let fighter2Hit = document.getElementById("fighter02-hit");
        let fighter2Heal = document.getElementById("fighter02-heal");
        let fighter2Yield = document.getElementById("fighter02-yield");

        fighter1Race = document.getElementById("race-rpg1").value;
        fighter1Item = document.getElementById("item-rpg1").value;
        fighter2Race = document.getElementById("race-rpg1").value;
        fighter2Item = document.getElementById("item-rpg1").value;

        fighter1 = new Person(fighter1Race, fighter1Item);
        fighter2 = new Person(fighter2Race, fighter2Item);
        document.getElementById("race-rpg1").innerHTML += fighter1Race;
        document.getElementById("item-rpg1").innerHTML += fighter1Item;
        document.getElementById("race-rpg2").innerHTML += fighter2Race;
        document.getElementById("item-rpg2").innerHTML += fighter2Item;

        fighter1Name = document.getElementById("name-rpg1").value;
        document.getElementById("fighter01-name").innerHTML += fighter1Name;

        fighter2Name = document.getElementById("name-rpg2").value;
        document.getElementById("fighter02-name").innerHTML += fighter2Name;

        fighter1Hit.addEventListener("click", fighter1.damage);
        fighter1Heal.addEventListener("click", fighter1.heal);
        if(fighter1Yield){
            fighter1Yield.addEventListener('click', yieldTheBattle, false);
        }

        document.getElementById("starter").addEventListener("click", starterFighter);

        fighter2Hit.addEventListener("click", fighter2.damage);
        fighter2Heal.addEventListener("click", fighter2.heal);
        if(fighter2Yield){
            fighter2Yield.addEventListener('click', yieldTheBattle, false);
        }

        fighter1Hit.disabled = true;
        fighter1Heal.disabled = true;
        if(fighter1Yield){
            fighter1Yield.disabled = true;
        }
        fighter2Hit.disabled = true;
        fighter2Heal.disabled = true;
        if(fighter2Yield){
            fighter2Yield.disabled = true;
        }

        switch (fighter1Race) {
            case "Humans":
                document.getElementById("fighter01-raceimg").src = "./images/human.png";
                break;
            case "Elves":
                document.getElementById("fighter01-raceimg").src = "./images/elf.png";
                break;
            case "Vampires":
                document.getElementById("fighter01-raceimg").src = "./images/vampire.png";
                break;
        }

        switch (fighter2Race) {
            case "Humans":
                document.getElementById("fighter02-raceimg").src = "./images/human.png";
                break;
            case "Elves":
                document.getElementById("fighter02-raceimg").src = "./images/elf.png";
                break;
            case "Vampires":
                document.getElementById("fighter02-raceimg").src = "./images/vampire.png";
                break;
        }

        if (fighter1Race == "Orcs") {
            fighter1.maxHealth = 100 + ((100 * 40) / 100);
            fighter1.currenthealth = 100 + ((100 * 40) / 100);
            fighter1Healthbar = fighter1.currenthealth * (100 / fighter1.maxHealth);
            document.getElementById("fighter01-raceimg").src = "./images/orc.png";
            document.getElementById("fighter01-healthbar").style.width = "100%";

        } else {
            fighter1.currenthealth = 100;
            fighter1Healthbar = fighter1.currenthealth * (100 / fighter1.maxHealth)
        }

        if (fighter2Race == "Orcs") {
            fighter2.maxHealth = 100 + ((100 * 40) / 100);
            fighter2.currenthealth = 100 + ((100 * 40) / 100);
            fighter2Healthbar = fighter2.currenthealth * (100 / fighter2.maxHealth);
            document.getElementById("fighter01-raceimg").src = "./images/orc.png";
            document.getElementById("fighter02-healthbar").style.width = "100%";

        } else {
            fighter2.currenthealth = 100;
            fighter2Healthbar = fighter2.currenthealth * (100 / fighter2.maxHealth)
        }
        document.getElementById("main-container").style.display = "none";
        document.getElementById("battle-container").style.display = "flex";
        document.getElementById("starter").style.display = "inherit";
        document.getElementById("healthbar1").innerHTML = fighter1.currenthealth;
        document.getElementById("healthbar2").innerHTML = fighter2.currenthealth;
        document.getElementById("healthbar1").style.width = fighter1Healthbar + "%";
        document.getElementById("healthbar2").style.width = fighter2Healthbar + "%";

        switch (fighter1Item) {
            case "Boots":
                document.getElementById("fighter01-itemimg").src = "./images/boots.png";
                break;
            case "Staff":
                document.getElementById("fighter01-itemimg").src = "./images/staff.png";
                break;
            case "Sword":
                document.getElementById("fighter01-itemimg").src = "./images/sword.png";
                break;
            case "Bow":
                document.getElementById("fighter01-itemimg").src = "./images/bow.png";
                break;
        }

        switch (fighter2Item) {
            case "Boots":
                document.getElementById("fighter02-itemimg").src = "./images/boots.png";
                break;
            case "Staff":
                document.getElementById("fighter02-itemimg").src = "./images/staff.png";
                break;
            case "Sword":
                document.getElementById("fighter02-itemimg").src = "./images/sword.png";
                break;
            case "Bow":
                document.getElementById("fighter02-itemimg").src = "./images/bow.png";
                break;
        }

        function starterFighter() {
            let hazard = Math.random();

            if (hazard < 0.5) {
                fighter1Hit.disabled = false;
                fighter1Heal.disabled = false;
                if(fighter1Yield){
                    fighter1Yield.disabled = false;
                }
            } else {
                fighter2Hit.disabled = false;
                fighter2Heal.disabled = false;
                if(fighter2Yield){
                    fighter2Yield.disabled = false;
                }
            }
            document.getElementById("starter").innerHTML = "";
            document.getElementById("starter").className = "moves-log";
            document.getElementById("starter").removeEventListener("click", starterFighter);
        }
    }

    export {fighter1}
    export {fighter2}

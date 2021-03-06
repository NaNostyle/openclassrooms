class Robot {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.maxSpeed = 3;
        this.xPos = 0;
        this.yPos = 0;
    }
    sePresenter() {
        console.log("Bonjour, je m'apelle " + this.name + " j'ai " + this.hp + " points de vie. Je me déplace à " + this.maxSpeed + " cases par seconde. Je suis à la case de coordonnées (" + this.xPos + ";" + this.yPos + ").");
    }
    seDeplacer(direction, distance) { 
    //    déplacer le robot vers la droite si direction est droite
       if (direction == "droite") {
            this.xPos += distance;
       }
       if (direction == "gauche") {
           this.xPos -= distance
       }
       if (direction == "haut") {
           this.yPos += distance
       }
       if (direction == "bas") {
           this.yPos -= distance
       }
    }

}

var robots = [new Robot("Superman"), new Robot("Batman"), new Robot("Joker"), new Robot("Robin")]

function main() {
    // var robot1 = new Robot("Superman");
    // var robot2 = new Robot("Batman");
    // robot1.sePresenter();
    // robot2.sePresenter();
    // console.log(robot1)
    // console.log(robot2)
    // robots[0].seDeplacer("gauche",3);
    robots.seDeplacer("haut", 2)
    robots.forEach(function (robots) {
        robots.sePresenter()
    });
}

main();
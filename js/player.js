class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex1 = "players/player" + this.index;
        database.ref(playerIndex1).set({
            name: this.name,
            distance: this.distance,
            
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    updateScore() {
        var playerIndex = "score/player" + this.index;
        database.ref(playerIndex).set({
            score:this.score
        });
    }

     getScoreInfo() {
        var scoreInfoRef = database.ref('score');
        scoreInfoRef.on("value", (data) => {
            allScore = data.val();
        })
    }

    
}

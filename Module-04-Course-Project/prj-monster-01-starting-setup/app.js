function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterH: 100,
            humanH: 100,
            round: 0,
            winner: -1,
            logs: [],
        };
    },

    methods: {
        newGame() {
            this.humanH = 100;
            this.monsterH = 100;
            this.round = 0;
            this.winner = -1;
            this.logs = [];
        },

        attack() {
            this.round++;
            this.monsterH -= getRandom(5, 12);
            this.humanH -= getRandom(8, 15);
        },

        specialAttack() {
            this.round++;
            this.monsterH -= getRandom(10, 25);
            this.humanH -= getRandom(8, 15);
        },

        heal() {
            this.round++;
            const healVal = getRandom(8, 20);
            if (healVal + this.humanH > 100) {
                this.humanH = 100;
            } else {
                this.humanH += healVal;
            }
            this.humanH -= getRandom(8, 15);
        },

        surender() {
            this.winner = 1;
            this.addLog('You', 'Surrender', 0);
        },

        addLog(who, what, value) {
            this.logs.unshift([who, what, value]);
        },
    },

    computed: {
        monsterBarStyles() {
            if (this.monsterH <= 0) {
                return { width: '0%' };
            }
            return { width: this.monsterH + '%' };
        },

        humanBarStyles() {
            if (this.humanH <= 0) {
                return { width: '0%' };
            }
            return { width: this.humanH + '%' };
        },

        specialAvail() {
            return this.round % 3 !== 0;
        },
    },

    watch: {
        monsterH(value) {
            this.addLog('You', 'Attack', value - this.monsterH);
            if (value <= 0 && this.humanH <= 0) {
                this.winner = 0;
            } else if (value <= 0) {
                this.winner = 2;
            }
        },

        humanH(value) {
            const diff = value - this.humanH;
            if (diff >= 0) {
                this.addLog('Monster', 'Attack', diff);
            } else {
                this.addLog('You', 'Heal', -diff);
            }
            if (value <= 0 && this.monsterH <= 0) {
                this.winner = 0;
            } else if (value <= 0) {
                this.winner = 1;
            }
        },
    },
});

app.mount('#game');

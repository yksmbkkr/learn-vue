Vue.createApp({
    data() {
        return {
            goals: [],
            enteredvalue: '',
        };
    },

    methods: {
        addGoal() {
            this.goals.push(this.enteredvalue);
        },
    },
}).mount('#app');

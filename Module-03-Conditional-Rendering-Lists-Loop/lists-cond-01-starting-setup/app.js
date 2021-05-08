const app = Vue.createApp({
    data() {
        return { goals: [], hasGoal: false, currentGoal: '' };
    },
    watch: {
        goals(value) {
            if (value.length > 0) {
                this.hasGoal = true;
            } else {
                this.hasGoal = false;
            }
        },
    },
    methods: {
        addGoal() {
            this.goals.push(this.currentGoal);
            this.currentGoal = '';
        },
        removeGoal(idx) {
            this.goals.splice(idx, 1);
        },
    },
});

app.mount('#user-goals');

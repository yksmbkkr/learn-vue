const app = Vue.createApp({
    data() {
        return {
            coursegoal: 'Finish Course and Learn VUE !',
            vueLink: 'https://vuejs.org/',
            cgA: 'Learn Vue',
            // cgB: '<u>Master Vue</u>',
            cgB: 'Master Vue',
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.cgA;
            } else {
                return this.cgB;
            }
        },
    },
});

app.mount('#user-goal');

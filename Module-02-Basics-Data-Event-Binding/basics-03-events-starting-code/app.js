const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        addC() {
            this.counter++;
        },

        redC(num) {
            this.counter -= num;
        },

        setName(event, lastName) {
            this.name = event.target.value + lastName;
        },

        setCName(event) {
            this.confirmedName = event.target.value;
        },

        submitF(event) {
            // event.preventDefault();
            alert('submitted');
        },
    },
});

app.mount('#events');

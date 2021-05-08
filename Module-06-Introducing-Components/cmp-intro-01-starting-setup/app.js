const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'Manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ],
            // detailsVisible: false,
        };
    },
    methods: {
        // toggleDetails() {
        //     this.detailsVisible = !this.detailsVisible;
        // },
    },
});

app.component('app-friend', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsVisible: false,
            friend: {
                id: 'Manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
    },
});

app.mount('#app');

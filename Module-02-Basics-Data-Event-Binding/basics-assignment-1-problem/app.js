const app = Vue.createApp({
    data() {
        return {
            name: 'Yash',
            age: 500,
            imgUrl:
                'https://www.unilad.co.uk/cdn-cgi/image/height=700,quality=70,format=jpeg,fit=cover,dpr=1/https%3A%2F%2Fwww.unilad.co.uk%2Fwp-content%2Fuploads%2F2020%2F07%2Fcheems.jpg',
        };
    },
    methods: {
        agePlus(num) {
            return parseInt(num) + parseInt(this.age);
        },
    },
});

app.mount('#assignment');

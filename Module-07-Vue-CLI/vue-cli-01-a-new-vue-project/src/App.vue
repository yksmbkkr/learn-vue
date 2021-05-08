<template>
    <header>
        <h1>FriendList</h1>
    </header>
    <friend-new @new-added="addNewFriend"></friend-new>
    <section>
        <ul>
            <!-- <li v-for="friend in friends" :key="friend.id">
                    <h2>{{friend.name}}</h2>
                    <button @click="toggleDetails">Show Details</button>
                    <ul v-if="detailsVisible">
                        <li><strong>Phone:</strong>{{friend.phone}}</li>
                        <li><strong>Email:</strong>{{friend.email}}</li>
                    </ul>
                </li> -->
            <friend-contact
                v-for="friend in friends"
                :key="friend.key"
                :friend-data="friend"
                @delete-contact="deleteContact"
                @toggle-fav="toggleFav"
            ></friend-contact>
            <!-- <friend-contact :friend-data="friends[1]"></friend-contact> -->
        </ul>
    </section>
</template>

<script lang="ts">
export default {
    data() {
        return {
            friends: [
                {
                    id: "Manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com",
                    isFav: false
                },
                {
                    id: "Julie",
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com",
                    isFav: true
                },
                {
                    id: "Maria",
                    name: "Maria Jones",
                    phone: "09876 543 123",
                    email: "maria@localhost.com",
                    isFav: false
                }
            ]
        };
    },

    methods: {
        toggleFav(fid) {
            const f = this.friends.find(friend => friend.id === fid);
            f.isFav = !f.isFav;
        },
        addNewFriend(friend) {
            this.friends.unshift({
                id: new Date().toISOString(),
                name: friend.name,
                phone: friend.phone,
                email: friend.email,
                isFav: false
            });
        },
        deleteContact(fid) {
            this.friends = this.friends.filter(friend => friend.id !== fid);
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
    font: inherit;
    padding: 0.15rem;
}
#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div {
    margin: 1rem 0;
}
</style>

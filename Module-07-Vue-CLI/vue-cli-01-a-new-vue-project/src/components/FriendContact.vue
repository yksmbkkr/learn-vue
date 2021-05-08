<template>
    <li>
        <h2>
            {{ friendData.name }} <span v-if="friendData.isFav">(Fav)</span>
        </h2>
        <button @click="toggleDetails">Show Details</button>
        <button @click="toggleFav">Toggle Favorite</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong>{{ friendData.phone }}</li>
            <li><strong>Email:</strong>{{ friendData.email }}</li>
        </ul>
        <button @click="$emit('delete-contact', friendData.id)">
            Delete
        </button>
    </li>
</template>

<script>
export default {
    props: ["friendData"],
    emits: ["toggle-fav", "delete-contact"],
    // emits: {
    //     "toggle-fav": function(id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsVisible: false,
            friend: {
                id: "Manuel",
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com"
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },

        toggleFav() {
            this.$emit("toggle-fav", this.friendData?.id);
        }
    }
};
</script>

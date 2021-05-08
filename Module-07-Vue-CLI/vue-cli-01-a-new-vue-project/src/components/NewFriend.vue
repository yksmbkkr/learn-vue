<template>
    <section>
        <form>
            <div>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    v-model="name"
                />
            </div>
            <div>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    v-model="phone"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    v-model="email"
                />
            </div>
            <button @click.prevent="addNewFriend">Add</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ["new-added"],
    data() {
        return {
            name: "",
            phone: "",
            email: ""
        };
    },
    methods: {
        addNewFriend() {
            this.$emit("new-added", {
                name: this.name,
                phone: this.phone,
                email: this.email
            });
        }
    }
};
</script>

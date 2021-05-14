<template>
    <div>
        <the-header></the-header>
        <!-- <badge-list></badge-list>
        <user-info
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        ></user-info> -->
        <button @click="setComp('active-goals')">ActiveGoals</button>
        <button @click="setComp('manage-goals')">ManageGoals</button>
        <!-- <active-goals
            v-if="selectedComponent === 'active-goals'"
        ></active-goals>
        <manage-goals
            v-if="selectedComponent === 'manage-goals'"
        ></manage-goals> -->
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
    <!-- <course-goals>
        <template #default="slotProps">
            <h2>{{ slotProps.item }}</h2>
            <p>{{ slotProps["another-prop"] }} {{ slotProps.yetAnother }}</p>
        </template>
    </course-goals> -->
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManagGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
    components: {
        "the-header": TheHeader,
        ActiveGoals,
        ManageGoals
        // BadgeList,
        // UserInfo
    },
    data() {
        return {
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin"
            },
            selectedComponent: "active-goals"
        };
    },
    methods: {
        setComp(cmp) {
            console.log(cmp);
            this.selectedComponent = cmp;
            console.log(this.selectedComponent);
            console.log(this.selectedComponent === "active-goals");
        }
    }
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>

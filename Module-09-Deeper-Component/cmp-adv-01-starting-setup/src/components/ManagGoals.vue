<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" class="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
    </div>
</template>

<script>
export default {
    methods: {
        setGoal() {
            const g = this.$refs.goal.value;
            if (g === "") {
                alert("No empty");
            }
        }
    }
};
</script>

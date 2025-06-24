<template>
    <div class="board-card p-4">
        <h2 class="text-2xl font-bold text-center mb-4">EXPERIENCES</h2>
        <div v-for="exp in experiences" :key="exp.id" class="experience-entry mb-4">
            <div class="font-bold text-lg">{{ exp.role }} @ {{ exp.organization }}</div>
            <div class="text-sm italic text-gray-600">{{ exp.period }}</div>
            <p class="mt-1">{{ exp.description }}</p>
        </div>
    </div>
</template>

<script setup>
const experiences = [
    {
        id: 1,
        period: '2024.01 – 2025.06',
        role: 'Full-Stack Developer',
        organization: 'Black Hole Creation',
        description: 'Developed a full-stack trading system using Vue.js and Node.js. Migrated legacy COBOL financial modules to a modern architecture.',
    },
    {
        id: 2,
        period: '2023.07 – 2023.09',
        role: 'AI Research Intern Mentor',
        organization: 'Internal R&D Project',
        description: 'Led a summer intern to apply AI to legacy spec parsing. Developed an auto-spec generator integrated with Fastify APIs.',
    },
    // 可繼續新增更多經歷
]
</script>

<style scoped>
.board-card {
    background-color: #f5deb3;
    border: 4px solid #8b5e3c;
    border-radius: 12px;
    box-shadow: inset 0 0 5px #5c3b1f;
}

.experience-entry {
    padding-bottom: 0.5rem;
    border-bottom: 2px dashed #c2a26b;
}
</style>
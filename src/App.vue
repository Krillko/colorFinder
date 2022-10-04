<template>
  <main>
    <LoadReferences />
    <ReferenceInput />
    <SaveReference />

    <FoundColors />
    <MatchInput />
    <MatchedColors />
  </main>
</template>

<script setup>
import ReferenceInput from '@/components/ReferenceInput.vue'
import FoundColors from '@/components/FoundColors.vue'
import MatchInput from '@/components/MatchInput.vue'
import MatchedColors from '@/components/MatchedColors.vue'
import SaveReference from '@/components/SaveReference.vue'
import LoadReferences from '@/components/LoadReferences.vue'
</script>

<style scoped lang="postcss">

</style>

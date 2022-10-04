<template>
  <main class="flex w-full items-start">
    <div class="first basis-1/3 p-8 ml-8">
      <MatchInput />
      <ReferenceColors />
    </div>
    <div class="second basis-1/3 p-8">
      <FoundColors />
    </div>
    <div class="third basis-1/3 mr-8 mt-8 stdbox">
      <ReferenceInput />
      <LoadReferences />
      <SaveReference />
    </div>
  </main>
</template>

<script setup>
import ReferenceInput from '@/components/ReferenceInput.vue'
import FoundColors from '@/components/FoundColors.vue'
import MatchInput from '@/components/MatchInput.vue'
import ReferenceColors from '@/components/ReferenceColors.vue'
import SaveReference from '@/components/SaveReference.vue'
import LoadReferences from '@/components/LoadReferences.vue'
</script>

<style scoped lang="postcss">

</style>

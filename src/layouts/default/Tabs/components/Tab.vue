<template>
  <div class="tab-wrapper c-base">
    <div class="tab-content" :style="tabStyle(info.fullPath, activeTab)" @click="go(info.fullPath)">
      <span>{{ info.title }}</span>
      <button v-if="showClose" class="close_btn" @click.stop="close(info)">
        <SvgIcon icon="ep:close-bold" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tab } from '../TabsType'
import { useThemeStoreWithOut } from '@/store/modules/theme'

interface Props {
  info: Tab
  activeTab: string
  showClose: boolean
}
interface Emit {
  (e: 'go', tab: string): void
  (e: 'close', tab: Tab): void
}

defineProps<Props>()
const emit = defineEmits<Emit>()
const themeStore = useThemeStoreWithOut()

const go = (path: string) => {
  emit('go', path)
}
const close = (tab: Tab) => {
  emit('close', tab)
}
const tabStyle = (path, activePath) => {
  if (path === activePath) {
    return {
      border: `1px solid ${themeStore.themeColor}`
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  &-wrapper {
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
  &-content {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    font-weight: bold;
    border: 1px solid #a1a3ae;
    @apply border-base bg-base border-1px;
    border-radius: 4px;
    position: relative;
  }
  &-active {
    border: 1px solid #dcee62;
  }
}
.close_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @apply border-base bg-base border-1px;
  border-radius: 3px;
  height: 18px;
  width: 18px;
  font-size: 14px;
  outline: none;
  border: none;
  position: relative;
  padding: 0;
  margin-left: 6px;
}
</style>

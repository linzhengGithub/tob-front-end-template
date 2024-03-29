import { type ComputedRef, computed, unref } from 'vue'
import type { EmitType, TableBasicProps } from '../types'
import { addActionColumn, transformColumns } from '../helper'

export function useColumns(props: ComputedRef<TableBasicProps>, emit: EmitType) {
  const { columns, actionColumn } = props.value

  const actionColumnRef = computed(() => {
    return unref(actionColumn)
  })

  // setup table columns
  const getColumns = computed(() => {
    // 操作列
    addActionColumn(columns, unref(actionColumnRef), emit)
    // 每一列
    transformColumns(columns, emit)

    return columns
  })

  return {
    getColumns,
  }
}

import { parseAsString, useQueryStates } from 'next-usequerystate'

type SortParams = {
  column?: string
  direction?: string
}

export function useTableSort({ column = '', direction = 'asc' }: SortParams) {
  const [sort, setSort] = useQueryStates(
    {
      column: parseAsString.withDefault(column),
      direction: parseAsString.withDefault(direction),
    },
    {
      history: 'replace',
    }
  )

  function handleChangeSort(value: SortParams) {
    setSort(value)
  }

  return { sort, handleChangeSort }
}

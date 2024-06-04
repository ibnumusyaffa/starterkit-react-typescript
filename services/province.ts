import axios from '@/lib/axios'

type Item = {
  id: number
  name: string
}

export async function loadProvince(search: string) {
  const response = await axios.get(`/master/provinces`, {
    params: {
      keyword: search,
    },
  })

  const result = response.data.data as Item[]

  const options = result.map((item) => ({
    label: item.name,
    value: item.id,
  }))

  return {
    options: options,
    hasMore: false,
  }
}

import axios from '@/lib/axios'

type AdditionalType2 = {
  province_id?: number
}

type Item = {
  id: number
  name: string
}

export async function loadRegency(
  search: string,
  prevOptions: unknown,
  additional: AdditionalType2 | undefined
) {
  if (!additional?.province_id) {
    return {
      options: [],
      hasMore: false,
      additional: {
        province_id: additional?.province_id,
      },
    }
  }
  const response = await axios.get(`/master/regencies`, {
    params: {
      keyword: search,
      province_id: additional?.province_id,
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
    additional: {
      province_id: additional?.province_id,
    },
  }
}

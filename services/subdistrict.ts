import axios from '@/lib/axios'

type AdditionalType2 = {
  regency_id?: number
}

type Item = {
  id: number
  name: string
  regency_name?: string
  province_name?: string
}

export async function loadSubdistrict(
  search: string,
  prevOptions: unknown,
  additional: AdditionalType2 | undefined
) {
  const response = await axios.get(`/master/subdistricts`, {
    params: {
      keyword: search,
      regency_id: additional?.regency_id,
      pagesize: 10,
    },
  })

  const result = response.data.data as Item[]

  const options = result.map((item) => {
    // const regencyName = item.regency_name ? `, ${item.regency_name}` : ''
    // const provinceName = item.province_name ? `, ${item.province_name}` : ''
    return {
      label:  item.name,
      value: item.id,
    }
  })

  return {
    options: options,
    hasMore: false,
    additional: {
      regency_id: additional?.regency_id,
    },
  }
}

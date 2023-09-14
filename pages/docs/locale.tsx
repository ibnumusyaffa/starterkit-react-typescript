import React from 'react'
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales'

function Page() {
  const t = useI18n()
  const changeLocale = useChangeLocale()

  const locale = useCurrentLocale()
  return (
    <div>
      {locale}
      <p>
        Hello:{' '}
        {t('welcome', {
          name: 'John',
        })}
      </p>
      <div>
        <button onClick={() => changeLocale('id')}>Change to id</button>
      </div>
    </div>
  )
}

export default Page

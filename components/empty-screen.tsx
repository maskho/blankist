import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight, IconBlankist } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <IconBlankist className="size-24 mx-auto" />
        <h1 className="text-lg font-semibold text-center">Hai Bro & Sis 👋</h1>
        <h2 className="text-lg font-semibold">
          Ringkas Bacaan dengan Blankist
        </h2>
        <p className="leading-normal text-muted-foreground">
          Blankist adalah aplikasi berbasis AI untuk meringkas bacaan. Harap
          diingat, hasil mungkin tidak selalu akurat. Tetap riset sendiri dan
          konsultasikan dengan ahli atau guru untuk memastikan keakuratan.
        </p>
        <p className="leading-normal text-muted-foreground">
          Email kami di{' '}
          <ExternalLink href="mailto:sa@kobar.co ">sa@kobar.co</ExternalLink>
          untuk saran dan pertanyaan. Selamat membaca!
        </p>
      </div>
    </div>
  )
}

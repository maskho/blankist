'use client'

import React from 'react'
import { CameraFeed } from '@/components/camera/camera-feed'

const Page = () => {
  const handleSendFile = (file: string) => {
    console.log('Captured file:', file)
    // You can handle the captured file here, e.g., send it to a server
  }

  return (
    <main className="flex flex-col">
      <div>
        <CameraFeed sendFile={handleSendFile} />
      </div>
    </main>
  )
}

export default Page

'use client'

import React from 'react'
import { CameraFeed } from '@/components/camera/camera-feed'

const Page = () => {
  const handleSendFile = (file: string) => {
    console.log('Captured file:', file)
    // You can handle the captured file here, e.g., send it to a server
  }

  return (
    <main className="flex flex-col p-4">
      <div>
        <h1>Web API Camera with React and Nextjs! &nbsp; </h1>
      </div>

      <div>
        <p>
          In this app you will be able to interact with the camera api and
          select one of the few avaialble cameras from given device.
        </p>
      </div>

      <div>
        <CameraFeed sendFile={handleSendFile} />
      </div>
    </main>
  )
}

export default Page

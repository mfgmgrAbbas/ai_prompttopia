"use client"

import React from 'react'

import { SessionProvider } from 'next-auth/react'


const Provider = () => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
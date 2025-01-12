'use client'

import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

function Page({}: Props) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])
  
  return (
    <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      className='border p-4 rounded background:bg-slate-300/75'
    >
      <button onClick={() => router.back()}>Close this</button>
      <h1>Intercepted Detail Page</h1>
    </dialog>
  )
}

export default Page
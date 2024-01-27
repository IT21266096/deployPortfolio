'use client';
import Image from 'next/image'
import Area from './components/area'
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen">
        <Area/>
      </main>
    </NextUIProvider>
  )
}

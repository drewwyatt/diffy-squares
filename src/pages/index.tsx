import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import StartingNumbers from '../components/starting-numbers'

const Canvas = dynamic(() => import('../components/canvas'), { ssr: false })

const Page: FC = () => (
  <div>
    <StartingNumbers />
    <fieldset>
      <legend>canvas</legend>
      <Canvas />
    </fieldset>
  </div>
)
export default Page

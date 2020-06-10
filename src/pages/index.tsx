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
    <style global jsx>{`
      html,
      body {
        background: #22212c;
      }

      * {
        color: #f8f8f2;
      }
    `}</style>
  </div>
)
export default Page

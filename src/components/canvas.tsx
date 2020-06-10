import React, { FC } from 'react'
import { Stage } from '@inlet/react-pixi'
import Rectangle from './rectangle'

const Canvas: FC = () => (
  <Stage>
    <Rectangle x={100} y={100} width={500} height={300} fill={0xff0000} />
  </Stage>
)

export default Canvas

import React, { FC } from 'react'
import { Stage } from '@inlet/react-pixi'
import Rectangle from './rectangle'

const Canvas: FC = () => (
  <Stage>
    <Rectangle x={100} y={100} width={100} height={100} fill={0xff0000} />
  </Stage>
)

export default Canvas

import React, { FC, useCallback, useMemo, useState } from 'react'
import { Graphics, SCALE_MODES } from 'pixi.js'
import { Sprite, useApp } from '@inlet/react-pixi'

type Props = {
  x: number
  y: number
  width: number
  height: number
  fill: number
}

const Rectangle: FC<Props> = ({ width, height, fill: initialFill, ...props }) => {
  const app = useApp()
  const [fill, setFill] = useState(initialFill)
  const graphics = useMemo(() => new Graphics(), [])
  const texture = useMemo(() => {
    graphics.clear()
    graphics.beginFill(fill)
    graphics.drawRect(0, 0, width, height)
    graphics.endFill()
    return app.renderer.generateTexture(graphics, SCALE_MODES.LINEAR, 0.5)
  }, [app, graphics, fill, width, height])

  const click = useCallback(() => {
    setFill(f => (f === initialFill ? 0x00ff00 : initialFill))
  }, [initialFill, setFill])

  return (
    <Sprite
      {...props}
      click={click}
      height={height}
      interactive
      texture={texture}
      width={width}
    />
  )
}

export default Rectangle

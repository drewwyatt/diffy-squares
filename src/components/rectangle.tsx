import React, { FC, useCallback, useMemo } from 'react'
import { Graphics, SCALE_MODES } from 'pixi.js'
import { Sprite, useApp } from '@inlet/react-pixi'

type Props = {
  x: number
  y: number
  width: number
  height: number
  fill: number
}

const Rectangle: FC<Props> = ({ width, height, fill, ...props }) => {
  const app = useApp()
  const graphics = useMemo(() => new Graphics(), [])
  const texture = useMemo(() => {
    graphics.clear()
    graphics.beginFill(fill)
    graphics.drawRect(0, 0, width, height)
    graphics.endFill()
    return app.renderer.generateTexture(graphics, SCALE_MODES.LINEAR, 0.5)
  }, [app, graphics, fill, width, height])

  const click = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('click!')
  }, [])

  return (
    <Sprite
      {...props}
      interactive
      click={click}
      texture={texture}
      height={height}
      width={width}
    />
  )
}

export default Rectangle

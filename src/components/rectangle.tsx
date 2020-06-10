import { Graphics } from 'pixi.js'
import { PixiComponent } from '@inlet/react-pixi'

type Props = {
  x: number
  y: number
  width: number
  height: number
  fill: number
}

const Rectangle = PixiComponent<Props, Graphics>('Rectangle', {
  create: () => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, width, height, fill } = props
    instance.clear()
    instance.beginFill(fill)
    instance.drawRect(x, y, width, height)
    instance.endFill()
  },
})

export default Rectangle

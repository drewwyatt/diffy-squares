import { adjust } from 'ramda'
import React, { ChangeEvent, FC, useCallback, useState } from 'react'

type Numbers = [number, number, number, number]

const StartingNumbers: FC = () => {
  const [vals, setVals] = useState<Numbers>([0, 0, 0, 0])
  const updateIdx = useCallback(
    (idx: keyof Numbers) => (e: ChangeEvent<HTMLInputElement>) => {
      setVals(adjust(idx as number, () => Number(e.target.value)) as any)
    },
    [setVals],
  )
  return (
    <fieldset>
      <legend>Starting Numbers</legend>
      <input type="number" value={vals[0]} onChange={updateIdx(0)} />
      <input type="number" value={vals[1]} onChange={updateIdx(1)} />
      <input type="number" value={vals[2]} onChange={updateIdx(2)} />
      <input type="number" value={vals[3]} onChange={updateIdx(3)} />
    </fieldset>
  )
}

export default StartingNumbers

import Complex from './complex'

const spring = (tension, friction, endPosition, startingVelocity) => t => {
  const lsr = Complex(friction * friction - 4 * tension).sqrt()

  const m = Complex(-1)
    .div(2)
    .div(lsr)

  const z1 = Complex(2 * startingVelocity).mul(
    lsr
      .mul(-1)
      .add(-friction)
      .mul(t)
      .mul(0.5)
      .exp()
  )

  const z2 = Complex(-2 * startingVelocity).mul(
    lsr
      .add(-friction)
      .mul(t)
      .mul(0.5)
      .exp()
  )

  const a = Complex(-friction)
    .mul(endPosition)
    .mul(
      lsr
        .mul(-1)
        .add(-friction)
        .mul(t)
        .mul(0.5)
        .exp()
    )

  const b = Complex(friction)
    .mul(endPosition)
    .mul(
      lsr
        .add(-friction)
        .mul(t)
        .mul(0.5)
        .exp()
    )

  const c = lsr.mul(endPosition).mul(
    lsr
      .mul(-1)
      .add(-friction)
      .mul(t)
      .mul(0.5)
      .exp()
  )
  const d = lsr.mul(endPosition).mul(
    lsr
      .add(-friction)
      .mul(t)
      .mul(0.5)
      .exp()
  )

  const f = lsr.mul(endPosition).mul(-2)

  const res = Complex(0)
    .add(z1)
    .add(z2)
    .add(a)
    .add(b)
    .add(c)
    .add(d)
    .add(f)
    .mul(m)

  return res.valueOf()
}

export const presets = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}

const transformProperties = [
  'translateY',
  'translateX',
  'scale',
  'scaleX',
  'scaleY'
]

const getSpringValue = ({
  from,
  to,
  tension,
  friction,
  startingVelocity = 0,
  t
}) => {
  const f = spring(tension, friction, to - from, startingVelocity)

  return from + f(t)
}

export const generateKeyframes = (springs, time = 1) => {
  const otherSprings = springs.filter(
    s => !transformProperties.includes(s.property)
  )

  const transformSprings = springs.filter(s =>
    transformProperties.includes(s.property)
  )

  let keyframesString = ''
  for (let i = 0; i <= 100; i++) {
    keyframesString = keyframesString + `${i}% {`
    keyframesString = keyframesString + '\n'

    if (transformSprings.length > 0) {
      keyframesString = keyframesString + ` transform: `
      for (let j = 0; j < transformSprings.length; j++) {
        const { property, unit = '' } = transformSprings[j]

        const t = (i * time) / 100
        const springValue = getSpringValue({
          ...transformSprings[j],
          t
        })

        keyframesString =
          keyframesString + `${property}(${springValue}${unit}) `
      }

      keyframesString = keyframesString + ';\n'
    }

    for (let j = 0; j < otherSprings.length; j++) {
      const { property, unit = '' } = otherSprings[j]

      const t = (i * time) / 100
      const springValue = getSpringValue({
        ...otherSprings[j],
        t
      })

      keyframesString = keyframesString + `${property}: ${springValue}${unit};`
      keyframesString = keyframesString + '\n'
    }

    keyframesString = keyframesString + `}`
    keyframesString = keyframesString + '\n'
    keyframesString = keyframesString + '\n'
  }

  return keyframesString
}

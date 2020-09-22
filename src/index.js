import Complex from './complex'

/*
  Solution to:

  f(0) = x0
  f'(0) = v0
  f''(t) = -k*(f(t) - x1) - μ*f'(t)

  μ: friction coeficient
  v0: startingVelocity
  k: stiffness/tension
  x0: starting position
  x1: end position
*/

const spring = (tension, friction, startPositon, endPosition, startingVelocity) => t => {
  const distance = endPosition - startPositon
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
    .mul(distance)
    .mul(
      lsr
        .mul(-1)
        .add(-friction)
        .mul(t)
        .mul(0.5)
        .exp()
    )

  const b = Complex(friction)
    .mul(distance)
    .mul(
      lsr
        .add(-friction)
        .mul(t)
        .mul(0.5)
        .exp()
    )

  const c = lsr.mul(distance).mul(
    lsr
      .mul(-1)
      .add(-friction)
      .mul(t)
      .mul(0.5)
      .exp()
  )
  const d = lsr.mul(distance).mul(
    lsr
      .add(-friction)
      .mul(t)
      .mul(0.5)
      .exp()
  )

  const f = lsr.mul(distance).mul(-2)

  const res = Complex(0)
    .add(z1)
    .add(z2)
    .add(a)
    .add(b)
    .add(c)
    .add(d)
    .add(f)
    .mul(m)

  return res.valueOf() + startPositon
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
  'perspective',
  'translateY',
  'translateX',
  'translateZ',
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
  const f = spring(tension, friction, from, to, startingVelocity)

  return f(t)
}

export const generateKeyframes = (springs, { time = 1 } = {}) => {
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
  }

  return keyframesString
}

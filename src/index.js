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

const spring = (
  tension,
  friction,
  startPositon,
  endPosition,
  startingVelocity
) => {
  const distance = endPosition - startPositon

  const lsr = new Complex(friction * friction - 4 * tension).sqrt()

  const m = new Complex(-1).div(2).div(lsr)

  const f = lsr.mul(distance).mul(-2)

  const p0 = lsr.mul(-1).add(-friction)

  const z0 = new Complex(2 * startingVelocity)

  const a0 = new Complex(-friction).mul(distance)

  const c0 = lsr.mul(distance)

  return (t) => {
    const p1 = p0.mul(t).mul(0.5).exp()

    const z1 = z0.mul(p1)
    const z2 = new Complex(-z1.re, z1.im)

    const a = a0.mul(p1)
    const b = new Complex(-a.re, a.im)

    const c = c0.mul(p1)
    const d = new Complex(-c.re, c.im)

    const res = z1.add(z2).add(a).add(b).add(c).add(d).add(f).mul(m)

    return res.valueOf() + startPositon
  }
}

export const presets = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 },
}

const transformProperties = [
  'perspective',
  'translateY',
  'translateX',
  'translateZ',
  'scale',
  'scaleX',
  'scaleY',
]

const getSpringFunction = ({
  from,
  to,
  tension,
  friction,
  startingVelocity = 0,
}) => {
  return spring(tension, friction, from, to, startingVelocity)
}

export const generateKeyframes = (springs, { time = 1 } = {}) => {
  const otherSprings = springs
    .filter((s) => !transformProperties.includes(s.property))
    .map((o) => ({ ...o, f: getSpringFunction({ ...o }) }))

  const transformSprings = springs
    .filter((s) => transformProperties.includes(s.property))
    .map((o) => ({ ...o, f: getSpringFunction({ ...o }) }))

  let keyframesString = ''
  for (let i = 0; i <= 100; i++) {
    keyframesString = keyframesString + `${i}% {`
    keyframesString = keyframesString + '\n'

    if (transformSprings.length > 0) {
      keyframesString = keyframesString + ` transform: `
      for (let j = 0; j < transformSprings.length; j++) {
        const { property, unit = '' } = transformSprings[j]

        const t = (i * time) / 100
        const { f } = transformSprings[j]
        const springValue = f(t)

        keyframesString =
          keyframesString + `${property}(${springValue}${unit}) `
      }

      keyframesString = keyframesString + ';\n'
    }

    for (let j = 0; j < otherSprings.length; j++) {
      const { property, unit = '' } = otherSprings[j]

      const t = (i * time) / 100

      const { f } = otherSprings[j]
      const springValue = f(t)

      keyframesString = keyframesString + `${property}: ${springValue}${unit};`
      keyframesString = keyframesString + '\n'
    }

    keyframesString = keyframesString + `}`
    keyframesString = keyframesString + '\n'
  }

  return keyframesString
}

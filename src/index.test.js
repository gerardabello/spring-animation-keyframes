import { generateKeyframes, presets } from '.'

const cases = [
  [
    [
      {
        tension: 180,
        friction: 12,
        from: 0,
        to: 100,
        unit: 'px',
        property: 'translateX',
      },
      {
        ...presets.stiff,
        from: 1,
        to: 0,
        property: 'opacity',
      },
    ],
    {
      time: 0.8,
    }
  ],
  [
    [
      {
        tension: 180,
        friction: 12,
        from: 0,
        to: 100,
        unit: 'px',
        property: 'translateX',
      },
      {
        tension: 150,
        friction: 12,
        from: -100,
        to: 100,
        unit: '%',
        property: 'translateY',
      },
      {
        ...presets.default,
        from: 1,
        to: 0,
        property: 'opacity',
      },
    ],
    {},
  ],
  [
    [
      {
        tension: 180,
        friction: 12,
        from: 0,
        to: 0,
        startingVelocity: -200,
        unit: 'px',
        property: 'translateZ',
      },
      {
        tension: 150,
        friction: 12,
        from: 100,
        to: 100,
        unit: 'px',
        property: 'perspective',
      },
    ],
    {},
  ],
]

test.each(cases)('test case %#', (springs, options) => {
  const keyframes = generateKeyframes(
    springs, options
  )
  expect(keyframes).toMatchSnapshot()
})

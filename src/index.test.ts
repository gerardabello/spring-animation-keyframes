import { generateKeyframes, presets, Spring } from '.'

const cases: [Spring[], { time?: number }][] = [
  [
    [
      {
        tension: 280,
        friction: 60,
        from: 30,
        to: 0,
        unit: "px",
        property: "translateY",
      },
      {
        tension: 280,
        friction: 100,
        from: 0,
        to: 1,
        unit: "",
        property: "opacity",
      },
    ],
    { time: 2 }
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
  [
    [
      {
        tension: 180,
        friction: 12,
        from: 1,
        to: 0,
        property: 'grayscale',
      },
    ],
    {},
  ],
]

test.each(cases)('test case %#', (springs: Spring[], options: { time?: number }) => {
  const keyframes = generateKeyframes(
    springs, options
  )
  expect(keyframes).toMatchSnapshot()
})

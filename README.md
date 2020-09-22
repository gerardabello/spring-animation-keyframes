# Spring animation keyframes

Generates a keyframe list to be used inside the css `@keyframes` rule, using physically based spring motion.

Similar and inspired by react-spring, but with the objective of not relying on a Javascript runtime. That has the advantage of a much more performant animation, even when running blocking javascript. As the keyframes are pre-generated, this library does not work for dynamic animations, for example involving drag-and-drop.


## Install
```
yarn add spring-animation-keyframes
```

## Usage
```javascript
import { generateKeyframes, presets } from 'spring-animation-keyframes'

const keyframes = generateKeyframes([
  {
    tension: 180,
    friction: 12,
    from: 0,
    to: 100,
    unit: 'px',
    property: 'translateX',
  },
  {
    ...presets.stiff, // presets include tension and friction.
    from: 1,
    to: 0,
    property: 'opacity',
  },
],
{
  // Length of the animation. Note that this does not change the animation,
  // it only defines how many seconds of animation to generate. It should
  // be a value sufficiently long so that the "spring" had time to settle.
  // For non-extreme values of tension and friction, the default should be
  // enough.
  time: 0.8 // default: 1
})
```

This will generate something like:
```
0% {
  transform: translateX(0px);
  opacity: 1;
}

1% {
  transform: translateX(1px);
  opacity: 0.99;
}

2% {
  transform: translateX(3px);
  opacity: 0.95;
}

...
```

When using this animation, make sure to use `linear` interpolation and a duration of the same value of the `time` argument of `generateKeyframes`, like this:

```css
animation: spring-animation 0.8s linear;
```

### Example with styled-components
```javascript
const appearBottom = keyframes`${
  generateKeyframes([
    {
      tension: 180,
      friction: 20,
      from: 30,
      to: 0,
      unit: 'px',
      property: 'translateY',
    },
    {
      tension: 200,
      friction: 40,
      from: 0,
      to: 1,
      property: 'opacity',
    },
  ])
}`

export const Wrapper = styled.div`
  animation: ${appearBottom} 1s linear;
`
```

## Presets
`default:   { tension: 170, friction: 26  }`

`gentle:    { tension: 120, friction: 14  }`

`wobbly:    { tension: 180, friction: 12  }`

`stiff:     { tension: 210, friction: 20  }`

`slow:      { tension: 280, friction: 60  }`

`molasses:  { tension: 280, friction: 120 }`

## Theory

All the animations produced by this library follow the following spring equations:

```
f(0) = x0
f'(0) = v0
f''(t) = -k*(f(t) - (x1 - x0)) - μ*f'(t)

f(t): position
f'(t): velocity
f''(t): acceleration
μ: friction coeficient
v0: starting velocity
k: stiffness/tension
x0: starting position
x1: end position
```

What this library outputs are the values of `f(t)`, by using a pre-calculated solution to the differential equation.

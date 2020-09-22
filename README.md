# Spring animation keyframes

Generates a keyframe list to be used inside the css `@keyframes` rule, using physically based spring equations.

Similar and inspired by react-spring, but with the objective of not relying on a Javascript runtime. That has the advantage of a much more performant animation, even when running blocking javascript. As the keyframes are pre-generated, this library does not work for dynamic animations, for example involving drag-and-drop.

## Install
```
yarn add spring-animation-keyframes
```

## Usage
```javascript
import { generateKeyframes, presets } from 'spring-animation-keyframes'

generateKeyframes([
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
  time = 0.8 // default: 1
})
```

This will generate something like:
```css
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

export const Wrap = styled.div`
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


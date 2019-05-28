# Spring animation keyframes
```
yarn add spring-animation-keyframes
```

## Usage
```javascript
  generateKeyframes([
    { tension: 180, friction: 12, from: 0, to: 100, property: 'left' }
  ])
```

### Example with styled-components
```javascript
const appearBottom = keyframes`${generateKeyframes([
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
])}`

export const Wrap = styled.div`
  animation: ${appearBottom} 1s linear;
`
```

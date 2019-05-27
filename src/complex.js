const hypot = (x, y) => {
  let a = Math.abs(x)
  let b = Math.abs(y)

  if (a < 3000 && b < 3000) {
    return Math.sqrt(a * a + b * b)
  }

  if (a < b) {
    a = b
    b = x / y
  } else {
    b = y / x
  }
  return a * Math.sqrt(1 + b * b)
}

const parse = (a, b) => {
  const z = { re: 0, im: 0 }

  if (a == null) {
    z.re = z.im = 0
  } else if (b != null) {
    z.re = a
    z.im = b
  } else {
    switch (typeof a) {
      case 'object':
        z.im = a.im
        z.re = a.re
        break
      case 'number':
        z.im = 0
        z.re = a
        break

      default:
        throw Error('Wrong params in Complex constructor')
    }
  }

  return z
}

function Complex(a, b) {
  if (!(this instanceof Complex)) {
    return new Complex(a, b)
  }

  const z = parse(a, b)

  this.re = z.re
  this.im = z.im
}

Complex.prototype = {
  re: 0,
  im: 0,

  add: function(a) {
    const z = new Complex(a)

    return new Complex(this.re + z.re, this.im + z.im)
  },

  mul: function(a) {
    const z = new Complex(a)

    return new Complex(
      this.re * z.re - this.im * z.im,
      this.re * z.im + this.im * z.re
    )
  },

  div: function(n) {
    const z = new Complex(n)

    const a = this.re
    const b = this.im

    const c = z.re
    const d = z.im
    let t
    let x

    if (d === 0) {
      // Divisor is real
      return new Complex(a / c, b / c)
    }

    if (Math.abs(c) < Math.abs(d)) {
      x = c / d
      t = c * x + d

      return new Complex((a * x + b) / t, (b * x - a) / t)
    }

    x = d / c
    t = d * x + c

    return new Complex((a + b * x) / t, (b - a * x) / t)
  },

  sqrt: function() {
    const a = this.re
    const b = this.im
    const r = this.abs()

    let re
    let im

    if (a >= 0) {
      if (b === 0) {
        return new Complex(Math.sqrt(a), 0)
      }

      re = 0.5 * Math.sqrt(2.0 * (r + a))
    } else {
      re = Math.abs(b) / Math.sqrt(2 * (r - a))
    }

    if (a <= 0) {
      im = 0.5 * Math.sqrt(2.0 * (r - a))
    } else {
      im = Math.abs(b) / Math.sqrt(2 * (r + a))
    }

    return new Complex(re, b < 0 ? -im : im)
  },

  exp: function() {
    const tmp = Math.exp(this.re)

    return new Complex(tmp * Math.cos(this.im), tmp * Math.sin(this.im))
  },

  abs: function() {
    return hypot(this.re, this.im)
  },

  valueOf: function() {
    if (this.im === 0) {
      return this.re
    }
    return null
  },

  isZero: function() {
    return this.re === 0 && this.im === 0
  },

  isInfinite: function() {
    return !(this.isNaN() || this.isFinite())
  },

  isNaN: function() {
    return isNaN(this.re) || isNaN(this.im)
  },

  isFinite: function() {
    return isFinite(this.re) && isFinite(this.im)
  }
}

export default Complex

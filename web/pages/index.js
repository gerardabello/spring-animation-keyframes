import Head from 'next/head'

import { generateKeyframes, presets } from "spring-animation-keyframes";

function Animated({ name, springs, children, delay = 0 }) {
  return <>
    <style jsx>{
      `
      @keyframes ${name} {${generateKeyframes(
        springs,
        { time: 2 }
      )}
    }
    
    .anim-${name} {
      animation: ${name} 2s linear both ${delay}s;
    }

       `
    }</style>

    <div className={`anim-${name}`}>
      {children}
    </div>

  </>
}

function SpringExample({ }) {
  return <>
    <style jsx>{
      `
      @keyframes example-spring {${generateKeyframes(
        [

          {
            tension: 160,
            friction: 10,
            from: 0,
            to: 0,
            startingVelocity: 500,
            unit: 'vw',
            property: 'translateX',
          },

        ]
        ,
        { time: 4 }
      )}
    }
    
    .example-spring {
      animation: example-spring 4s linear infinite;
    }
    .box {
      background: lightgray;
    border: 2px solid black;
      width: min-content;
    padding: 4px 8px;
    margin-bottom: 10px;
    }
    `
    }</style>

    <div className={`example-spring`}>
      <div className="box"><em>SPRING</em></div>

    </div>

  </>
}

function EaseExample({ }) {
  return <>
    <style jsx>{
      `
      @keyframes example-ease {
    0% {
      transform: translateX(0vw);
    }

    10% {
      transform: translateX(30vw);
    }
    20% {
      transform: translateX(0vw);
    }
    100% {
      transform: translateX(0vw);
    }
        }

  .box {
      background: lightgray;
    border: 2px solid black;
      width: min-content;
    padding: 4px 8px;
    margin-bottom: 10px;
    }
    
    .example-ease {
      animation: example-ease 4s ease infinite;
    }
    `
    }</style>

    <div className={`example-ease`}>
      <div className="box"><em>EASE</em></div>
    </div>

  </>
}


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Spring Animation Keyframes</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL@-15..0,300..800,0..1&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Animated name="title" springs={[
          {
            ...presets.wobbly,
            from: -30,
            to: 0,
            unit: 'vw',
            property: 'translateX',
          },
          {
            ...presets.wobbly,
            from: 0,
            to: 100,
            unit: '%',
            property: 'opacity',
          }
        ]}>
          <h1>Spring Animation Keyframes</h1>
        </Animated>

        <Animated name="rest" delay={0.5} springs={[
          {
            ...presets.default,
            from: 50,
            to: 0,
            unit: 'px',
            property: 'translateY',


          },
          {
            ...presets.default,
            from: 0,
            to: 100,
            unit: '%',
            property: 'opacity',
          }
        ]}>
          <h2>Why use it?</h2>
          <ul>
            <li><h3>Physics based</h3><p>Animations that follow spring physics <em>feel</em> more realistic and organic.</p>
              <div>
                <div>
                  <SpringExample />


                </div>
                <div>
                  <EaseExample />
                </div>
              </div>

            </li>
            <li><h3>Smooth in all circumstances</h3><p>Not everyone has a fast device. This library let's the browser rendering engine run the animation, instead of running it in a JS function, and that ensures the animation runs as smooth as possible.</p></li>
            <li><h3>Supports SSR and SSG</h3><p>JS is only needed to generate the keyframes, you can do that on the server or on the client. Unless your animations depend on runtime data, you can even generate them at compile time.</p></li>
            <li><h3>Very small bundle size</h3><p>If you decide to generate the keyframes on the client, the bundle size is really small, only 1.3 kB (gzipped).</p></li>
            <li><h3>Works with every framework</h3><p>The output of this library is just a string, you can use it with almost anywhere.</p></li>
          </ul>
          <h2>Limitations</h2>
          <ul>
            <li><h3>No support for dynamic animations</h3><p>Dynamic animations (for example drag-and-drop, following the user's mouse, etc.) are not supported. The goal of this library is to pre-calculate all the keyframes for an animation, so anything that can modify the keyframes while the animation is running should use a JS-based animation library like react-spring.</p></li>
          </ul>

          <h2>How does it work?</h2>


          <p>
            All the animations produced by this library follow the following spring equations:
          </p>

          <pre>f(0) = x0</pre>
          <pre>f'(0) = v0</pre>
          <pre>f''(t) = -k*(f(t) - x1) - μ*f'(t)</pre>
          <p>
            What this library outputs are the values of f(t), by using a pre-calculated solution to the differential equation.
          </p>

        </Animated>
      </main>
      <style jsx global>{`
        html,
        body {
    font-size: 18px;
        }
    
    * {
    
    
        font-family: 'Recursive', sans-serif;
    
        --mono: "MONO" 0;
        --casl: "CASL" 0;
        --wght: "wght" 400;
        --slnt: "slnt" 0;
        --CRSV: "CRSV" 0.5;
        
        font-variation-settings: var(--mono), var(--casl), var(--wght), var(--slnt), var(--CRSV);
    }
    
    main {
      margin: 0 auto;
    max-width: 720px;
    }
    
    ul {
      list-style: none;
padding: 0;
    }
    
    pre {
      font-family: monospace;
      margin: 4px 0;
    }

        em {
    

        --casl: "CASL" 1;
        --slnt: "slnt" -15;

    }
    
        h1,h2,h3,h4,h5,h6 {
    

        --mono: "MONO" 0;
        --casl: "CASL" 1;
        --wght: "wght" 800;
        --slnt: "slnt" -15;
        --CRSV: "CRSV" 0.5;

    }

        h1 {
    font-size: 5rem;
    }

        h2 {
    font-size: 3rem;
    }

        h3 {
    font-size: 2rem;
    }

        h4{
    font-size: 1rem;
    }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

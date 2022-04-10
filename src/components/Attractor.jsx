import React, { useEffect, useRef } from "react"
import { Engine, Render, Runner, Bodies, World } from "matter-js"

export const Attractor = (props) => {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())
  const currEngine = engine.current

  useEffect(() => {
    const cw = window.innerWidth - 128
    const ch = window.innerHeight - 128
    const render = Render.create({
      element: scene.current,
      engine: currEngine,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    })

    Runner.run(engine)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(currEngine.world)
      Engine.clear(currEngine)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = (e) => {
    const ball = Bodies.circle(e.clientX, e.clientY, 10 + Math.random() * 30, {
      mass: 10,
      restitution: 0.9,
      friction: 0.005,
      render: {
        sprite: {
          texture: "./img/bloom-preview.png",
          xScale: 0.02,
          yScale: 0.02,
        },
        fillStyle: "#0000ff",
      },
    })
    World.add(currEngine.world, [ball])
  }

  return (
    <div>
      <div
        ref={scene}
        onMouseMove={handleAddCircle}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const HeartFirefly = () => {
    const [hearts, setHearts] = useState([])

    const addHeart = (x, y) => {
        const randomSize = Math.random() * 20 + 10
        const randomColor = `rgb(${Math.random() * 255},${
            Math.random() * 255
        },${Math.random() * 255})`

        setHearts((prevHearts) => [
            ...prevHearts,
            {
                size: randomSize,
                color: randomColor,
                x: x,
                y: y,
                velocityX: Math.random() * 4 - 2,
                velocityY: Math.random() * 4 - 2,
            },
        ])
    }

    const handleMouseClick = (event) => {
        addHeart(event.clientX, event.clientY)
    }

    const moveHearts = () => {
        setHearts((prevHearts) =>
            prevHearts.map((heart) => ({
                ...heart,
                x: heart.x + heart.velocityX,
                y: heart.y + heart.velocityY,
            }))
        )
    }

    useEffect(() => {
        const animationFrame = requestAnimationFrame(moveHearts)

        return () => cancelAnimationFrame(animationFrame)
    }, [hearts])

    return (
        <div
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                zIndex: 0,
                overflow: 'hidden',
                display: 'grid',
                placeItems: 'center',
            }}
            onClick={handleMouseClick}
        >
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={0}
                gravity={0.1}
                initialVelocityX={0}
                initialVelocityY={0}
                colors={['#ff0000']}
                confettiSource={{ x: 0, y: 0, w: 0, h: 0 }}
                recycleDelay={10000}
                wind={0}
                opacity={1}
                ticks={0}
                explosionSpeed={0.1}
            />
            {hearts.map((heart, index) => (
                <span
                    key={index}
                    style={{
                        display: 'block',
                        position: 'absolute',
                        left: heart.x,
                        top: heart.y,
                        fontSize: heart.size,
                        color: heart.color,
                        zIndex: 1000,
                    }}
                >
                    ❤️
                </span>
            ))}
        </div>
    )
}

export default HeartFirefly

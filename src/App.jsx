import { useEffect, useRef, useState } from 'react'
import HeartConfetti from './HeartConfetti'

// Agrega las palabras que necesites ;)
const phrases = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Pookie please',
    'Just think about it',
    "If you say no, I'll be very sad",
    "Don't do this to me",
    "I'll be very very sad",
    "I'll be very very very sad",
    "Ok fine, I'll stop asking...",
    "You're breaking my heart ;(",
]
function App() {
    const [noCount, setNoCount] = useState(0)
    const [yesPressed, setYesPressed] = useState(false)
    const audioRef = useRef(null)
    const yesButtonSize = noCount * 40 + 20
    const roundButton = noCount * 4 + 4

    const handleClick = () => {
        setNoCount(noCount + 1)
    }

    const getNoButtonText = () => phrases[Math.min(noCount, phrases.length - 1)]

    useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.volume = 0.2
    }, [audioRef, yesPressed])

    return (
        <main className='w-full h-[100dvh] flex items-center justify-center overflow-hidden select-none '>
            {!yesPressed ? (
                <div className='flex flex-col gap-4 items-center'>
                    {/* Cambia con la imagen que quieras */}
                    <img
                        src='https://media.tenor.com/mxg1RwQmzQQAAAAi/peach-goma-love-pat-head-cheek.gif'
                        alt=''
                    />
                    <h1 className='text-2xl font-semibold'>
                        Will you be my valentine?
                    </h1>
                    <div className='flex flex-col gap-4 w-auto items-center sm:flex-row sm:gap-10'>
                        <button
                            className='px-4 py-2 bg-[#e95468] rounded font-bold text-white h-full leading-none'
                            style={{
                                fontSize: yesButtonSize,
                                borderRadius: roundButton,
                            }}
                            onClick={() => setYesPressed(true)}
                        >
                            Si
                        </button>
                        <button
                            className=' bg-[#909090] rounded font-bold text-white px-4 py-2 leading-none'
                            onClick={handleClick}
                        >
                            {getNoButtonText()}
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <audio ref={audioRef} autoPlay volume={0.9}>
                        <source src='/1.mp3' type='audio/mp3' />
                    </audio>
                    {/* Cambia la imagen que quieras cuando acepte */}
                    <div className='flex flex-col gap-4 items-center overflow-hidden w-screen'>
                        <HeartConfetti />
                        <img
                            src='https://c.tenor.com/3yinSke0rykAAAAC/tenor.gif'
                            alt=''
                            className='rounded'
                        />
                        <h1 className='text-2xl font-semibold'>Yeahh!!</h1>
                    </div>
                </>
            )}
        </main>
    )
}

export default App

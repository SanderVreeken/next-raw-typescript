import { useState } from 'react'
import { IconContext } from 'react-icons'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from '../styles/Carousel.module.scss'

interface Props {
    slides: any[]
}

export default function Carousel({ slides }: Props) {
    const [animation, setAnimation] = useState<string>('')
    const [slideIndex, setSlideIndex] = useState(0)

    const onAnimationEnd = () => {
        if (animation === 'left') {
            if (slideIndex > 0) {
                setSlideIndex(slideIndex - 1)
            } else {
                setSlideIndex(slides.length - 1)
            }
        } else {
            if (slideIndex === slides.length - 1) {
                setSlideIndex(0)
            } else {
                setSlideIndex(slideIndex + 1)
            }
        }
        setAnimation('')
    }

    const renderAnimationClass = () => animation === 'left' ? `${styles.animationLeft}` : `${styles.animationRight}`

    const startStopAnimation = (type: 'left' | 'right') => {
        setAnimation(type)
    }

    return (
        <div className={styles.carousel} role='carousel'>
            <span className={animation ? `${renderAnimationClass()}` : ''} onAnimationEnd={() => onAnimationEnd()}>
                <span role='left'>
                    {slideIndex > 0 ? slides[slideIndex - 1] : slides[slides.length - 1]}
                </span>
                <span role='main'>
                    {slides[slideIndex]}
                </span>
                <span role='right'>
                    {slideIndex === slides.length - 1 ? slides[0] : slides[slideIndex + 1]}
                </span>
            </span>
            <span role='arrows'>
                <IconContext.Provider value={{ color: 'black', size: '36px' }}>
                    <div onClick={() => startStopAnimation('left')}>
                        <BsChevronLeft />   
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: 'black', size: '36px' }}>
                <div onClick={() => startStopAnimation('right')}>
                        <BsChevronRight />   
                    </div>
                </IconContext.Provider>
            </span>
            <span role='navigation'>
                {slides.map((slide, index) => (
                    <div style={{
                        backgroundColor: index === slideIndex ? '#2e75b5' : 'white'
                    }}></div> 
                ))}
            </span>
        </div>
    )
}
import imageUrl from "../../assets/image.png"
import styles from "./index.module.css"
import CanSvg from "../../assets/can.svg"
import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'


const data = [
    {
        name: 'Rare Wind',
        description: '#a8edea → #fed6e3',
        css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 200,
    },
    {
        name: 'Rare Wind',
        description: '#a8edea → #fed6e3',
        css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 200,
    },

]


const Profile = () => {

    const [open, setOpen] = useState(false)
    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '20%', background: 'white' },
        to: {
            size: open ? '100%' : '20%',
            background: open ? 'white' : 'white',
        },
    })
    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])


    return (
        <>
            <div className="flex flex-col items-center md:flex-row justify-around">
                <img src={imageUrl} alt="profile" className=" w-1/2 md:w-40" />
                <div className="h-24 border-slate-500 border rounded-2xl p-4 mt-4 flex items-center" >
                    <p className={styles.typewriter}> Hi ! I am Dylan. Nice to meet U</p>
                </div>
            </div>


            <div className={styles.wrapper}>

                <animated.div
                    style={{ ...rest, width: "100%", height: size }}
                    className={styles.container}
                    onClick={() => setOpen(open => !open)}>
                    <div className="flex items-center justify-center">
                        <span>What</span>
                        <img src={CanSvg} alt="can" className=" h-12 w-12" />
                        <span>I DO</span>
                    </div>
                    {transition((style, item) => (
                        <animated.div
                            className={styles.item}
                            style={{ ...style, background: item.css }}
                        >
                            <p>{item.description}</p>
                        </animated.div>
                    ))}

                </animated.div>
            </div>


        </>
    )
}


export default Profile
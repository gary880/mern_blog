import imageUrl from "../../assets/image.png"
import styles from "./index.module.css"
import CanSvg from "../../assets/can.svg"
import DockerSvg from "../../assets/docker.svg"
import ReactSvg from "../../assets/react.svg"
import NodeSvg from "../../assets/nodeJS.svg"
import MongodbSvg from "../../assets/mongodb.svg"
import FigmaSvg from "../../assets/figma.svg"
import SwiftSvg from "../../assets/swift.svg"
import JestSvg from "../../assets/jest.svg"
import GitSvg from "../../assets/git.svg"
import TypescriptSvg from "../../assets/typescript.svg"
import NginxSvg from "../../assets/nginx.svg"
import { useState } from 'react'
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
        name: 'Frontend',
        svg: [TypescriptSvg, ReactSvg, SwiftSvg, JestSvg],
    },
    {
        name: 'Backend',
        svg: [NodeSvg, DockerSvg, MongodbSvg, NginxSvg],
    },
    {
        name: 'Others',
        svg: [FigmaSvg, GitSvg],
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
            <div className="flex flex-col items-center md:flex-row justify-around mb-4">
                <img src={imageUrl} alt="profile" className=" w-1/3 md:w-40" />
                <div className="h-24  rounded-2xl p-4 mt-2 flex items-center" >
                    <p className={styles.typewriter}> Hi ! I am Dylan. Nice to meet U</p>
                </div>
            </div>


            <div className={styles.wrapper}>

                <animated.div
                    style={{ ...rest, width: "100%", height: size }}
                    className={styles.container}
                    onClick={() => setOpen(open => !open)}>
                    <div className="flex items-center justify-center rounded-md border-2 border-black hover:bg-slate-200">
                        <span className="font-bold" >I</span>
                        <img src={CanSvg} alt="can" className=" h-12 w-12" />
                        <span className="font-bold" >DO</span>
                    </div>
                    {transition((style, item) => (
                        <animated.div
                            className={styles.item}
                            style={{ ...style, background: 'white' }}
                        >
                            <div className={styles.itemContent}>
                                <h2 className=" font-bold">{item.name}</h2>
                                <div className="flex justify-center">
                                    {item.svg.map((icon, index) => (
                                        <img
                                            key={index}
                                            width={40}
                                            height={40}
                                            src={icon}
                                            alt={item.name}
                                            className="mx-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        </animated.div>
                    ))}

                </animated.div>
            </div>


        </>
    )
}


export default Profile
import imageUrl from "../../assets/image.png"
import styles from "./index.module.css"



const Profile = () => {
    return (
        <>
            <div className="flex justify-center">
                <img src={imageUrl} alt="profile" />
            </div>
            <div className="h-24 border-slate-500 border rounded-2xl p-4 mt-4" >
                <p className={styles.typewriter}> Hi ! I am Dylan. Nice to meet U</p>
            </div>
        </>
    )
}


export default Profile
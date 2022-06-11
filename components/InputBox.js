import {useSession} from 'next-auth/client'
import Image from 'next/image'
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {useRef ,useState} from  'react'
import {db} from "../firebase"
import firebase from "firebase"


function InputBox() {
 
        const [session] = useSession();
        const inputRef = useRef(null);
        const filepickerRef = useRef(null);
        const [imageToPost ,setImageToPost] = useState(null);
        const sendPost = (e) => {
                e.preventDefault();
        

        if(!inputRef.current.value) return ;

        db.collection('posts').add({
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                timestamp: firebase.firestore.FieldValue.serverTimestampstamp()

        })

        inputRef.current.value = "" ;

}

        const addImageToPost =(e) => {
                const reader = new FileReader();
                if (e.target.files[0]) {
                        reader.readAsDataURL(e.target.files[0]);
                }

                reader.onload = (readerEvent) => {
                        setImageToPost(readerEvent.target.result);
                }

        }
    return (


        <div className="bg-white p-2 rounded-2xl shadow-md  text-gray-500 fond-medium mt-6">
                <div className="flex space-x-4 p-4 items-center">
                <Image  
                    className = "rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                    />   

                    <form className="flex flex-1">
                            <input 
                            className="rounded-full h-12 bg-blue-50 flex-grow px-5 focus:outline-none"
                            type="text" ref={inputRef} placeholder={`Have anything on ya mind, ${session.user.name}`} />
                    </form>    
                    
                    <button hidden onClick={sendPost} type='submit'>Submit</button>
                </div>

            <div className="flex justify-evenly p-3 border-t">
                    <div       
                                className="inputIcon">
                            <VideoCameraIcon className="h-7 text-red-500" />
                            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>    
                    </div>

                    <div className="inputIcon">
                            <EmojiHappyIcon className="h-7 text-yellow-300" />
                            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>    
                    </div>
                    
                    <div onClick= {() => filepickerRef.current.click()}
                        className="inputIcon">
                            <CameraIcon className="h-7 text-red-500" />
                            <p className="text-xs sm:text-sm xl:text-base">Record</p> 
                            <input  type="file" ref ={filepickerRef} onChange={addImageToPost}  hidden />   
                    </div>

                   
                
            </div>
        </div>
    )
}

export default InputBox

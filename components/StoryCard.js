import Image from "next/image"

function StoryCard({name,src, profile }) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 cursor-pointer overflow-x p-3 lg:w-32 lg:h-56
                        transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">

           <Image src={profile}
            width={40}
            height={40}
            layout="fixed"
            objectFit="cover"
            className="absolute opacity-0  lg:opacity-100 rounded-full z-50 top-10"

           />
           <Image src={src}
          
            layout="fill"
    
            className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"

           />

           <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncates">{name}</p>

        </div>
    )
}

export default StoryCard
import StoryCard from '../components/StoryCard'

const stories =[
    {
        name:"Elon Musk",
        src: "https://links.papareact.com/4zn1",
        profile: "https://links.papareact.com/kxk1",
    } ,
    
    {
        name:"Jeff Bezoz",
        src: "https://links.papareact.com/k2j1",
        profile: "https://links.papareact.com/f0p1",
    } ,
    
    {
        name:"Mark Suckerpunch",
        src: "https://links.papareact.com/xql1",
        profile: "https://links.papareact.com/snf",
    } ,
    
    {
        name:"Bill Gates",
        src: "https://links.papareact.com/4u41",
        profile: "https://links.papareact.com/zvy1",
    } ,
    


]


function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">

            {stories.map(story =>(

                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
    ))}


        </div>
    )
}

export default Stories

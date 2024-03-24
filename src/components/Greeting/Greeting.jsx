import singImg from "../../assets/images/sign-bl-2.png";
import GreetingCard from "../GreetingCard/GreetingCard";
const cardInfo = [
    {
        id:1,
        image: "./src/assets/images/objective.png",
        title: "OBJECTIVE OF BGO",
        desc: "The main objective of Bangladesh Geography Olympiad (BGO) is to disseminate the importance of geographical knowledge to interested students nationally."
    },
    {
        id:2,
        image: "./src/assets/images/vision.png",
        title: "VISION",
        desc: "Encouraging young students to know about sustainable development with geographical theories and methodologies."
    },
    {
        id:3,
        image: "./src/assets/images/mission.png",
        title: "MISSION",
        desc: "Bangladesh Geography Olympiad (BGO) is to disseminate the modern geographical skills through hands-on trainings and organizing geography events to tackle climate and environmental challenges."
    }
];
function Greeting(){
    return (
        <div className="my-5 pt-20">
            <div className="w-11/12 mx-auto flex gap-10 flex-col lg:flex-row">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl text-blue-500 pb-5 font-bold">Greetings from Bangladesh Geography Olympiad !!!</h2>
                    <hr />
                    <p className="py-5 ">Welcome to the official website of Bangladesh Geography Olympiad (BGO). It is our intension to organize nationwide several events each year to make interest in geography and environment among young students. All the events will be arranged during January-February each year. School and College students will be able to participate in the events. Moreover, the selected candidates from different evets will be awarded with credentials. The BGOC will select candidates from Higher Secondary level (16 to 19 years) every year for International Geography Olympiad Competition. This year the event has been scheduled in Indonesia by August (http://www.geoolympiad.org/2023/).</p>
                    <img className="" src={singImg} />
                </div>
                <div className="lg:w-1/2 flex flex-col gap-5">
                    {cardInfo.map(cards => <GreetingCard key={cards.id} cradInfo={cards}></GreetingCard>)}                      
                </div>
            </div>
        </div>
    );
}

export default Greeting;
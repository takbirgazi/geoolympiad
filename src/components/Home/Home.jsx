import { Helmet } from "react-helmet";
import Greeting from "../Greeting/Greeting";

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home - Bangladesh Geography Olympiad</title>
            </Helmet>
            <Greeting></Greeting>
        </div>
    );
}

export default Home;
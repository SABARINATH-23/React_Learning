import Vote1 from "./vote1";
import Vote2 from "./Vote2";

const Conditional = ()=>{


    let vote = 10;
    // if(vote > 18)
    // {
    //     return <Vote1/>
    // }
    // else
    // {
    //     return <Vote2/>
    // }

    return(
        <>
            {
                // vote > 18 ? <Vote1/>:<Vote2/>
                vote < 18 &&<Vote2/>
            }


        </>
    )
}
export default Conditional;
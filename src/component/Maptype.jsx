
function Maptypes(){

    return(

        <>
        <select id="options" className="rounded-md p-1 ">
            <option selected value="hybrid">hybrid</option>
            <option  value="satellite">satellite</option>
            <option value="roadmap">roadmap</option>
            <option value="terrain">terrian</option>
        </select>
        </>
    );
}

export default Maptypes
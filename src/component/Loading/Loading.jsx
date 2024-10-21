import {PropagateLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <PropagateLoader color="#ffffff" size="20" />
        </div>
    )
}
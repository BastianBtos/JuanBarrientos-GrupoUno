import {PuffLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[100vh]">
            <PuffLoader color="#ffffff" size="100" />
        </div>
    )
}
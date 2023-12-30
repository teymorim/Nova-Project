import { useEffect, useState } from "react";

function useSetTimer(){
    const [isLoading , setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        } , 1500)
    } , [])
    return isLoading ;
}
export default useSetTimer; 
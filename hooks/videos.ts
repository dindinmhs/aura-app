import { VideoType } from "@/types/video";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppWrite = <T>(fn : ()=>Promise<T>) => {
    const [data, setData] = useState<T>()
    const [isLoading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fn()
            setData(response)
        } catch (error:any) {
            Alert.alert('Error', error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const refetch = () => fetchData()

    return { data, isLoading, refetch }
};

export default useAppWrite
import axios from 'axios' 
const GetApiData = async() => {
    try {
        const response=await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=2`)
        return response.data.Search
    } catch (error) {
        console.log('error:', error.message)
        
    }
}

export default GetApiData

import axios from "axios";

export const getBlogPost = async () => {
    const res = await axios.get("https://dev-shopracks.pantheonsite.io/wp-content/uploads/2022/01/book-keeping.jpeg");
    console.log(res)
}

export const regUser = async (user) =>{
    const data = await JSON.stringify(user)
    
    const res = await axios.post("https://damp-cliffs-57150.herokuapp.com/",data,{
        headers: {
            "Content-type": "application/json"
        }
    })

    return res;
}

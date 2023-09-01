import axios from "axios";

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer 5vmU1phIzzWlXdVKjBykYcRPDtnMBwGKPWMHGZ6wh9-SEZmgGj-q0MyB5JxAi192i1E_BGWI29W7PusJHkTZs1Pk7CVJ6F-YtvJBizm_OjY6lbkgD-ouasGNJtPxZHYx'
    }
})






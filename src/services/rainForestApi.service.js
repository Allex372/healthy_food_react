import React from "react";
import axios from 'axios';


class RainForestApiService {
    static async getData(){
        try {
            const result = await axios.get('https://api.rainforestapi.com/request?api_key=demo&amazon_domain=amazon.com&type=product&asin=B073JYC4XM')
            return result.data.sponsored_products.slice(0,6)
        } catch (e) {
            console.log(e)
        }
    }
}

export default RainForestApiService;

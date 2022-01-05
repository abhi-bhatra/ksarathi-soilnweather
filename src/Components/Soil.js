import React from 'react';
import axios from "axios";

function Soil() {
    const [post, setPost] = React.useState([]);
    const fetchData = React.useCallback(() => {
      navigator.geolocation.getCurrentPosition(position => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude; 
        
        axios.get(`https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${lat}&lng=${long}`, {headers: {'x-api-key': '4e01913f5204a97c2e44ff85c406b6bb8ebde8b8a63d4037210cc700c3b2350d','Content-type': 'application/json'}}).then((response) => {
        const APIResponse = response.data;
        console.log(APIResponse.data);
        setPost(APIResponse.data);
      })
      .catch((error) => {
        console.log(error);
      })
      });
    }, [])

    React.useEffect(() => {
      fetchData();
      }, [fetchData]);

    if (!post) return null;

    return (
        <div>
      <h1>Soil Moisture and Temperature</h1>
      {post.map((item, idx) => (
        <p key={idx}>{item.soil_moisture} and 
        <br />
        {item.soil_temperature}</p>
      ))}
    </div>
    );
}

export default Soil;

// scantime: "2021-12-22 12:52:24Z"
// soil_moisture: 36.33333206176758
// soil_temperature: 3.4500061035156477

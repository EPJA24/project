import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Container, Inp, Submit} from './styles/InputField';
import Preview from "./Preview";
import Confirm from "./Confirm";

const APIkey = "AIzaSyDsbK8Nl5tjtl70JHB76R3_1t7Ispn59yw";


export const InputField = () => {
    const [dots, setDots] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [name,setName] = useState("");
    const [id,setId] = useState("");
    const [data,setData] = useState("");
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Handle hover end
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const sendName = (name: string) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${APIkey}`)
            .then(r => {
                console.log(r)
                setId(r['data']['items'][0]['id'])
                setData(r['data']['items'][0]['volumeInfo']['title'])
                setImageUrl(r['data']['items'][0]['volumeInfo']['imageLinks']['smallThumbnail'])
            })

    }
    useEffect(() => {

        const interval = setInterval(() => {
            setDots(prev => (prev.length < 3 ? prev + '.' : '')); // Reset after 3 dots
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (

        <Container>
            <div style={{margin: '0.2vw'}}> Please, write a name of book{dots} </div>
        <Inp isGlowing={isHovered} type="text"
              placeholder={"Enter here"}
              onChange={(e) => setName(e.target.value)} />
            <Submit
                onClick={() => sendName(name)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
               Submit
            </Submit>
            <Preview data={data} imageUrl={imageUrl}/>
            <Confirm id={id} />
        </Container>
    );
};
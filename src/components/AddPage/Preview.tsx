import React from "react";
import {Title,BookWrapper} from "./styles/Preview";

const Preview = ({ data, imageUrl }: { data: string; imageUrl: string }) => {
    return data === '' ? (
        <div />
    ) : (
        <div>
        <Title> Book preview: </Title>
        <BookWrapper>
            <img style={{margin: "0.4vw"}} src={imageUrl} alt="123"/>
            <div style={{color: "white"}}> {data} </div>

        </BookWrapper>
        </div>
    );
};


export default Preview;
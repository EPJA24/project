import React from 'react'
import  { MainContainer, LeftSection, RightSection } from "../../components/AddPage/styles/MainPage";
import {LogoAndTitle} from "../MainPage/logo";
import {InputField} from "../../components/AddPage/InputField";

const AddPage = () => {
    return (
        <MainContainer data-testid='maincontainer'>
            <LeftSection data-testid={'leftsection'}>
                <InputField />
            </LeftSection>
            <RightSection>
                <LogoAndTitle />
            </RightSection>
        </MainContainer>
    )}

export default AddPage;
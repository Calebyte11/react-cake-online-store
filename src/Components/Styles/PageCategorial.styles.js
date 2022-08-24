import styled from "styled-components";
import { PopularListContainer } from './PopularList.styles';


//==== ENTIRE CONTAINER======
export const PageCategorialContainer = styled.div`
    width: 100%;
    /* padding: 5px; */
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;

`;



// ==== For the Primary navs list ======
export const PagePrimaryNav = styled.div`
    position: fixed;
    top: 6%;
    right: 0px;
    left: 0px;
    z-index: 999;
    padding: 8px 7px 4px 7px;
    background-color: #fff;
    height: 6%;
    /* min-width: 99%; */
    min-height: 55px;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);

   & > ul {
        display: flex;
        flex-direction: row;
        height: 40px;
        margin-left: 0px;
        /* margin-top: 6%; */
        padding: 2px;
        overflow-x: scroll;
        gap: 17px;
   }
`;

// ===== list of individual PriNavs ====
export const PriNavList = styled.li`
    background: #e8e8e8;
    min-width: 95px;
    height: 32px;
    list-style: none;
    z-index: 1;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* position: relative; */
    overflow: hidden;

    & > h3{
        font-size: 16px;
        font-family: inherit;
        font-weight: 600;
        color: ${ ({active}) => active ? '#ff6464' : 'inherit'};
        display: inline-block;
        white-space: nowrap;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 87px;
        margin: auto;
        padding: 0px 2px 0px 2px;
    }

    & > span {
        width: 40px;
        border-bottom: 5px solid #ff6464;
        display: ${ ({active}) => active ? 'block' : 'none' };
        border-radius: 10px;
    }
`;



// =========== For the 2 Column list ================

export const TwoColumnListContainer = styled(PopularListContainer)`
    margin-top: 53px;
    font-size: 18px;
    font-weight: 700;
    z-index: 333;
    border-radius: 0px;
    padding-left: 0px;
    width: 100%;
    min-height: 1vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    /* top: 34%; */
    left: 0px;
    right: 0px;


    & > ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 0px auto 0px auto;
        padding: 0px;
        padding-left: 0px;
        overflow-x: hidden;
        overflow-y: scroll;
        flex-wrap: wrap;
        min-height: 100%;
        column-count: 2;
        column-gap: 0px;
        /* background-color: aliceblue; */


        & > li {
            background: #fff;
            min-width: 153px;
            width: 47%;
            height: 248px;
            list-style: none;
            margin: 7px auto 7px auto;
            z-index: 1;
            border-radius: 8px;
            position: relative;


            // === the discount tag(if any) ====
            & > h5{
                position: absolute;
                top: -15px;
                right: -5px;
                margin-right: 5%;
                color: #ff6464;
                border-radius: 3px;
                background: #ffdfdf;
                padding: 1px 5px 1px 5px;
                font-weight: 500;
            }

            //==== product image ======
            & > img{
                height: 57%;
                min-height: 57%;
                border-radius: inherit;
            }

            //==== price and slashed price ====
            & > div {

                & > div {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    height: 27px;
                    gap: 4px;

                    & > h4{
                        font-size: 15px;
                    }

                    & > h5{
                        color: #a0a4a8;
                        font-size: 12px;
                        font-weight: 500;
                        text-decoration: line-through;
                        text-decoration-color: #3c4043;
                    }
                }

                & > section {


                    & > span{
                        font-size: 13px;
                        color: #6570a7;
                        font-weight: 400;
                        width: 100%;
                    }
                }
            }
        }
    }
`;
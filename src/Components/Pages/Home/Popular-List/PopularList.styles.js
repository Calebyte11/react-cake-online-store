import styled from "styled-components";

export const PopularListContainer = styled.div`
    margin-top: -5px;
    background-color: #fff;
    border-radius: 20px;
    width: 98%;
    font-size: 17px;
    font-weight: 500;
    padding: 0px 7px;
    z-index: 333;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;

    & > section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 10px;

        & > button {
            background-color: transparent;
            border: none;
            font-family: inherit;
            font-size: 13px;
            font-weight: 400;
            color: #ff6464;
            margin-right: 5px;
        }

    }

    & > ul {
        display: flex;
        flex-direction: row;
        margin-left: 0px;
        padding-left: 2px;
        overflow-x: scroll;
        margin-top: 3px;



        & > li {
            background: #fff;
            min-width: 270px;
            height: 215px;
            list-style: none;
            margin: 10px 15px 25px 10px;
            z-index: 1;
            border-radius: 7px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
            overflow-y: hidden;

            & > img{
                width: 95%;
                height: 135px;
                margin: 6px auto 5px auto;
                border-radius: inherit;
            }

            & > div{
                display : flex;
                flex-direction: column;
                padding: 0px 9px 0px 9px;
                margin-top: 10px;


                & > section {
                    display: flex;
                    flex-direction: row;
                    height: 30px;
                    align-items: center;
                    justify-content: space-between;




                    & > div {
                        height: 40px;
                        display: flex;
                        flex-direction: column;
                        overflow-y: hidden;
                        width: 170px;
                        gap: 1px;
                        justify-content: center;

                        & > h4{
                            height: 0px;
                            margin-top: 8px;
                            font-size: 15px;
                            font-weight: 400;
                            text-transform: capitalize;
                        }

                        & > h6{
                            height: 0px;
                            margin-top: -3px;
                            color: #a0a4a8;
                            font-size: 14px;
                            font-weight: 500;
                        }

                    }

                    /* & > button {
                        background: transparent;
                        border: none;
                        outline: none;
                        margin-top: -15px;
                        font-size : 16px;
                        color: ${(props) => (props.liked ? "#ff6464" : "#4f4f4f")};
                    } */

                    & > div > section {
                        
                        & > button {
                            text-align: start;
                            padding-left: 0px;
                            font-size : 14px;
                            border: none;
                            outline: none;
                            background: transparent;
                            color: #f6a609;
                        }
                    
                        & > span {
                            margin-left: 10px;
                            font-size: 14px;
                            color: #6570a7;
                            font-weight: 400;
                            width: 100%;
                        }
                    }
                    & > h5 {
                        background: #cacccf;
                        margin-bottom: 30px;
                        margin-right: 5px;
                        padding: 2px 5px;
                        border-radius: 45%;
                        font-style: italic;
                        font-size: 14px;
                        font-weight: 700;
                    }


                }
            }
        }

    }
`;

export const FavButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin-top: -15px;
    font-size : 16px;
    color: ${(props) => (props.liked ? "#ff6464" : "#4f4f4f")};
`;

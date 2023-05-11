import styled from "styled-components";

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.black};
    padding: 5px;
    max-width: 400px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.silver};
`;
 
export const LabelText = styled.span`
    display: inline-block;
    margin: 5px;
    padding: 5px;
    max-width: 150px;
    width: 100%;
`;

export const Button = styled.button`
    font-size: 15px;
    width: 100%;
    border: 1px solid;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.violetEggplant};

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.violetEggplant};
    margin: 0 auto;
    padding: 5px;
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    padding-top: 20px;
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.color.violetEggplant};
    padding: 10px 0px;
    margin-bottom: 10px;
    max-width: 600px;
    width: 100%;
`;


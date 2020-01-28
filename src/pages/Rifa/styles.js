import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #e6f2ff;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 60px;
    width: 100%;
    background-color: #4d79ff;

    span{
        font-size: 28px;
        margin-right: 100px;
        color: #fff;
    }
    input{
        margin-left: 100px;
        padding: 10px 5px;
        border-radius: 4px;
        border: none;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
`;

export const PriceBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    height: 400px;
    width: 300px;
    border: 1px solid #c3c3c3;

    flex-direction: column;

    h2{
        margin-top: 20px;
    }

    div{
        text-align: center;
        width: 250px;
        margin: 10px 0px; 
        padding: 15px 0px;
        border: 1px solid #c3c3c3;
    }
`;

export const Buggy = styled.img`
    height: 400px;

`;

export const BuggyBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Descricao = styled.div`
    margin-top: 20px;
    p{
       
    }
`;

export const RifaBox = styled.div`
    margin-top: 40px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #c3c3c3;
    width: 600px;
    padding: 20px 0px;
    margin-bottom: 50px;
    
`;

export const HeaderRifa = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #c3c3c3;
    padding: 10px 10px;
    
    width: 480px;
    span{
        font-size: 20px;
        font-weight: bold;
    }
`;

export const Cards = styled.div`
    width: 500px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    height: 80px;
    width: 80px;
    margin: 10px 10px;
    color: rgba(0,0,0, 0.8);
    font-weight: bold;
    background-color: #99ff99;
`;

export const CardItemReservado = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    height: 80px;
    width: 80px;
    margin: 10px 10px;
    color: rgba(0,0,0, 0.8);
    font-weight: bold;
    background-color: #ffff66;
`;

export const CardItemPago = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    height: 80px;
    width: 80px;
    margin: 10px 10px;
    color: rgba(0,0,0, 0.8);
    font-weight: bold;
    background-color: #ff3333;
`;

export const ButtonFinalizar = styled.button`
    border: none;
    background-color: #00b300;
    color: #fff;
    border-radius: 4px;
    padding: 10px 20px;
    /* font-weight: bold; */
    text-transform: uppercase;

    &:hover{
        background-color: #009900;
    }
`;

export const Legenda = styled.div`
    
    div{
        margin: 5px 0px;
        display: flex;
        align-items: center;
    }
    span{
        margin-left: 10px;
    }

`; 
export const LegendaRed = styled.div`
    background-color: #ff3333;
    height: 20px;
    width: 20px;
        
`; 
export const LegendaGreen = styled.div`
    background-color: #99ff99;
    height: 20px;
    width: 20px;
    
`; 
export const LegendaYellow = styled.div`
    background-color: #ffff66;
    height: 20px;
    width: 20px;
        
`; 



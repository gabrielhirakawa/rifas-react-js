import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, Header, Content, Buggy, PriceBox, Descricao, 
    BuggyBox, RifaBox, HeaderRifa, Cards, CardItem, CardItemPago, 
    CardItemReservado, ButtonFinalizar,
    Legenda, LegendaGreen, LegendaRed, LegendaYellow
} from './styles';
import buggy from '../../assets/buggy.jpg';

export default function Rifa() {
    const [rifas, setRifas] = useState([]);
    const [status, setStatus] = useState(false);
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const vetor = [
            { id: '01', status: 'free' },
            { id: '02', status: 'free' },
            { id: '03', status: 'pago' },
            { id: '04', status: 'free' },
            { id: '05', status: 'free' },
            { id: '06', status: 'free' },
            { id: '07', status: 'free' },
            { id: '08', status: 'free' },
            { id: '09', status: 'pago' },
            { id: '10', status: 'free' },
            { id: '11', status: 'free' },
            { id: '12', status: 'free' },
            { id: '13', status: 'free' },
            { id: '14', status: 'free' },
            { id: '15', status: 'free' },
            

        ];
        setRifas(vetor);
    }, [])


    async function alterStatus(id) {
        const vetor = rifas;
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].id == id && vetor[i].status == 'free') {
                vetor[i].status = 'reservado';
            }
            else if (vetor[i].id == id && vetor[i].status == 'reservado') {
                vetor[i].status = 'free';
            }
        }
        var valor = 0;
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].status == 'reservado') {
                valor += 200;
            }
        }
        setValorTotal(valor);
        setRifas(vetor);
        setStatus(!status);
        console.log('vetor', rifas);
    }



    return (
        <Container>
            <Header>
                <input placeholder="Buscar" />
                <span>RIFAS <strong>GALILEU</strong></span>
            </Header>
            <Content>
                <BuggyBox>
                    <Buggy src={buggy} alt="bugy" />
                    <PriceBox>
                        <h2>R$ 200,00</h2>
                        <div>Números: <strong>15</strong></div>
                        <div>Reservados: <strong>2</strong></div>
                        <div>Restam: <strong>13</strong></div>
                    </PriceBox>
                </BuggyBox>
                <Descricao>
                    <h2>Descrição</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla quam, elementum eget iaculis ut, imperdiet at nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    </p>
                </Descricao>
            </Content>
            <RifaBox>
                <HeaderRifa>
                    <span>{`R$: ${valorTotal},00`}</span>
                    <ButtonFinalizar onClick={()=> toast.success('PARABÉNS GAYZÃO')}>Finalizar</ButtonFinalizar>
                </HeaderRifa>
                <Cards value={status}>
                    {
                        rifas.map(item => {
                            switch (item.status) {
                                case 'free':
                                    return (<CardItem key={item.id} onClick={() => alterStatus(item.id)}>{item.id}</CardItem>)
                                case 'reservado':
                                    return (<CardItemReservado key={item.id} onClick={() => alterStatus(item.id)}>{item.id}</CardItemReservado>)
                                case 'pago':
                                    return (<CardItemPago key={item.id} onClick={() => toast.error('Este número já foi pago')}>{item.id}</CardItemPago>)
                            }
                        })
                    }
                </Cards>
                {/* <Cards>
                    <CardItem><span>06</span></CardItem>
                    <CardItem><span>07</span></CardItem>
                    <CardItem><span>08</span></CardItem>
                    <CardItem><span>09</span></CardItem>
                    <CardItem><span>10</span></CardItem>
                </Cards>
                <Cards>
                    <CardItem><span>11</span></CardItem>
                    <CardItem><span>12</span></CardItem>
                    <CardItem><span>13</span></CardItem>
                    <CardItem><span>14</span></CardItem>
                    <CardItem><span>15</span></CardItem>
                </Cards> */}
                <Legenda>
                    <div>
                        <LegendaGreen/><span>Disponivel</span>
                    </div>
                    <div>
                        <LegendaRed/><span>Indisponivel</span>
                    </div>
                    <div>
                        <LegendaYellow/><span>Selecionado</span>
                    </div>
                </Legenda>
            </RifaBox>


        </Container >

    );
}

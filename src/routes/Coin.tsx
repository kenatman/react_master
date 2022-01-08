import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceInfo);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || `Loading...`} </Title>
      </Header>
      {isLoading ? <Loader>LOADING....</Loader> : null}
    </Container>
  );
};

export default Coin;

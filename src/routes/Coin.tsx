import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { fetchInfo, fetchTickers } from "../api";
import Chart from "./Chart";
import Price from "./Price";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
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

const OverView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  /*   const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<IInfo>();
  const [priceInfo, setPriceInfo] = useState<IPriceInfo>(); */

  /*  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setIsLoading(false);
    })();
  }, [coinId]); */

  const { isLoading: isInfoLoading, data: info } = useQuery<IInfo>(
    ["info", coinId],
    () => fetchInfo(coinId)
  );
  const { isLoading: isTickersLoading, data: tickers } = useQuery<IPriceInfo>(
    ["tickers", coinId],
    () => fetchTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );

  const isLoading = isInfoLoading || isTickersLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : isLoading ? `LOADING...` : info?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : isLoading ? `LOADING...` : info?.name}{" "}
        </Title>
      </Header>
      {isLoading ? (
        <Loader>LOADING....</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>Rank :</span>
              <span>{info?.rank}</span>
            </OverViewItem>

            <OverViewItem>
              <span>Symbol : </span>
              <span>${info?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Price : </span>
              <span>{tickers?.quotes.USD.price.toFixed(3)}</span>
            </OverViewItem>
          </OverView>
          <Description>{info?.description}</Description>
          <OverView>
            <OverViewItem>
              <span>Total Supply : </span>
              <span>{tickers?.total_supply}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Max Supply : </span>
              <span>{tickers?.max_supply}</span>
            </OverViewItem>
          </OverView>
          <Tabs>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
          </Tabs>
          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
};

export default Coin;

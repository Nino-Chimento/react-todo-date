import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_ADD_CARD,
  ACTION_ADD_WISH,
  ACTION_REMOVE_CARD,
  ACTION_REMOVE_WISH,
} from "../redux/actions";
import { selectorCard, selectorLikeCard } from "../redux/selectors";

const Home: FC = () => {
  const [data, setData] = useState([]);
  const selectCart = useSelector(selectorCard);
  const selectWish = useSelector(selectorLikeCard);
  let idSelectCart: string[] = [];
  let idSelectWish: string[] = [];
  selectCart.forEach((card: any) => {
    idSelectCart = [...idSelectCart, card.uuid];
  });
  selectWish.forEach((card: any) => {
    idSelectWish = [...idSelectWish, card.uuid];
  });

  const url: string =
    "https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0&accept-language=it&x-musement-currency=EUR&x-musement-version=3.4.0";
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, []);

  const addToCart = (obj: any) =>
    dispatch({ type: ACTION_ADD_CARD, payload: obj });

  const removeToCart = (obj: any) =>
    dispatch({ type: ACTION_REMOVE_CARD, payload: obj });

  const addToWish = (obj: any) =>
    dispatch({ type: ACTION_ADD_WISH, payload: obj });

  const removeToWish = (obj: any) =>
    dispatch({ type: ACTION_REMOVE_WISH, payload: obj });

  const StyledWrap = Styled.div`
    width:80%;
    margin:auto;
    display:flex;
    flex-wrap: wrap;
    margin-top:80px;
  `;

  const StyledButton = Styled.div`
        width:40%;
        height:30px;
        margin:auto;

  `;

  const StyledHeader = Styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background-color: lightgrey;
    z-index:1;
  `;

  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>

      <StyledWrap>
        {data &&
          data.map((card: any, index: number) => (
            <div key={card.uuid}>
              <Card
                handleStart={
                  idSelectWish.includes(card.uuid)
                    ? () => removeToWish(card)
                    : () => addToWish(card)
                }
                colorIcon={idSelectWish.includes(card.uuid)}
                src={card.cover_image_url}
                title={card.title}
                description={card.description}
                price={card.original_retail_price.formatted_value}
              />
              <StyledButton key={index}>
                {idSelectCart.includes(card.uuid) && (
                  <Button
                    handleClick={() => removeToCart(card)}
                    variant="primary"
                  >
                    {" "}
                    REMOVE TO CART{" "}
                  </Button>
                )}
                <Button handleClick={() => addToCart(card)} variant="secondary">
                  {" "}
                  ADD TO CART{" "}
                </Button>
              </StyledButton>
            </div>
          ))}
      </StyledWrap>
    </>
  );
};

export default Home;

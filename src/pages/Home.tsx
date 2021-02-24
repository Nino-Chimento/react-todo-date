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
} from "../redux/actions";
import { selectorCard } from "../redux/selectors";
import { IsInArray } from "../utils/Utility";

const Home: FC = () => {
  const [data, setData] = useState([]);
  const selectCart = useSelector(selectorCard);

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

  const AddToWish = (obj: any) =>
    dispatch({ type: ACTION_ADD_WISH, payload: obj });

  const StyledWrap = Styled.div`
    width:80%;
    margin:auto;
    display:flex;
    flex-wrap: wrap;
  `;

  const StyledButton = Styled.div`
        width:40%;
        height:30px;
        margin:auto;

  `;

  return (
    <>
      <Header />
      <StyledWrap>
        {data &&
          data.map((card: any, index: number) => (
            <>
              <div key={index}>
                <Card
                  handleStart={() => AddToWish(card)}
                  src={card.cover_image_url}
                  title={card.title}
                  description={card.description}
                  price={card.original_retail_price.formatted_value}
                />
                <StyledButton>
                  {IsInArray(selectCart, card) && (
                    <Button
                      handleClick={() => removeToCart(card)}
                      variant="primary"
                    >
                      {" "}
                      REMOVE TO CART{" "}
                    </Button>
                  )}
                  <Button
                    handleClick={() => addToCart(card)}
                    variant="secondary"
                  >
                    {" "}
                    ADD TO CART{" "}
                  </Button>
                </StyledButton>
              </div>
            </>
          ))}
      </StyledWrap>
    </>
  );
};

export default Home;

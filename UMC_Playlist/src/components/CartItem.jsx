import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../constants/icons";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";
import styled from "styled-components";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <Article>
      <img src={img} alt={`${title} 이미지`} />
      <ItemInfo>
        <h4>
          {title} | {singer}
        </h4>
        <h4 className="item-price">{price}원</h4>
      </ItemInfo>
      <AmountContainer>
        <AmountButton onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </AmountButton>
        <p className="amount">{amount}</p>
        <AmountButton
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </AmountButton>
      </AmountContainer>
    </Article>
  );
};

const Article = styled.article`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

const ItemInfo = styled.div`
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .item-price {
    color: #645cff;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .amount {
    margin: 0;
  }
`;

const AmountButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #645cff;
  }
`;

export default CartItem;

import React from "react";
import classes from "./SearchAfterClickItem.module.css";
import SvgArrow from "../../SvgArrow/SvgArrow";
import { Link } from "react-router-dom";
import CartContext from "../../../store/cart/Cart-context";
import { useContext } from "react";

const SearchAfterClickItem = ({ searchItemAfterClickData }) => {
  const cartContextCtx = useContext(CartContext);
  const IncreseItem = (itemId) => {
    cartContextCtx.onAddItems(itemId);
  };
  const DecreaseItem = (itemId) => {
    cartContextCtx.onRemoveItem(itemId);
  };
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {searchItemAfterClickData.map((item, index) => {
          const category = Object.keys(item)[0];
          const items = item[category];
          return (
            <div className={classes.items} key={index}>
              <h1>{category}</h1>
              {items.map((each_item, index_j) => {
                return (
                  <div className={classes.item} key={index_j}>
                    <Link to={each_item.link} className={classes.item_part1}>
                      <h1 className={classes.item_part1_hotal}>
                        {each_item.hotal}
                      </h1>
                      <div className={classes.item_part1_star}>
                        <img src="/swiggey/Search/logo/rating.jpg" alt="" />
                        {each_item.star}
                        {"   ...   "}
                        {each_item.Dtime}
                      </div>
                      <div className={classes.svgarrow}>
                        <SvgArrow />
                      </div>
                    </Link>
                    <div className={classes.item_part2}>{each_item.time}</div>
                    <div className={classes.item_part3}>
                      <div className={classes.item_part3_left}>
                        <div className={classes.item_part3_name}>
                          <img src="/swiggey/Search/logo/veg.png" alt="" />
                          {each_item.name}
                        </div>
                        <div className={classes.item_part3_price}>
                          {each_item.price}
                        </div>
                        <div className={classes.item_part3_para}>
                          {each_item.para}
                        </div>
                      </div>
                      <div className={classes.item_part3_right}>
                        <img src={each_item.image} alt="" />
                        {cartContextCtx.addItems.length !== 0 &&
                        cartContextCtx.addItems.some(
                          (item) => item.itemId === each_item.itemId
                        ) ? (
                          <div className={classes.item_quantity}>
                            <div
                              className={classes.item_quantity_less}
                              onClick={() => {
                                DecreaseItem(each_item.itemId);
                              }}
                            >
                              -
                            </div>
                            <div className={classes.item_quantity_number}>
                              {
                                cartContextCtx.addItems.find(
                                  (item) => item.itemId === each_item.itemId
                                ).quantity
                              }
                            </div>
                            <div
                              className={classes.item_quantity_more}
                              onClick={() => {
                                IncreseItem(each_item.itemId);
                              }}
                            >
                              +
                            </div>
                          </div>
                        ) : (
                          <div
                            className={classes.addButton}
                            onClick={() => {
                              IncreseItem(each_item.itemId);
                            }}
                          >
                            ADD
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchAfterClickItem;

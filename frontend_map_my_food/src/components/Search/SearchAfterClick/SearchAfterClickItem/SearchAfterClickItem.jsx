import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SearchAfterClickItem.module.css";
import SvgArrow from "../../../ui/Svg/SvgArrow";
import CartContext from "../../../store/cart/Cart-context";

const SearchAfterClickItem = ({ searchItemAfterClickData }) => {
  const cartContextCtx = useContext(CartContext);
  const IncreseItem = (itemId, RestaurantId) => {
    cartContextCtx.onAddItems(RestaurantId, itemId);
  };
  const DecreaseItem = (itemId, RestaurantId) => {
    cartContextCtx.onRemoveItem(RestaurantId, itemId);
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
                    <Link
                      to={each_item.RestaurantId}
                      className={classes.item_part1}
                    >
                      <h1 className={classes.item_part1_hotal}>
                        {each_item.Restaurant}
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
                    <div className={classes.item_part2}>
                      Opens next at {each_item.opening_hours}, tomorrow
                    </div>
                    <div className={classes.item_part3}>
                      <div className={classes.item_part3_left}>
                        <div className={classes.item_part3_name}>
                          {each_item.veg == "true" && (
                            <img src="/swiggey/Search/logo/veg.png" alt="" />
                          )}
                          {each_item.veg == "false" && (
                            <img src="/swiggey/Search/logo/nonveg.jpg" alt="" />
                          )}
                          {each_item.name}
                        </div>
                        <div className={classes.item_part3_price}>
                          {each_item.price}
                        </div>
                        <div className={classes.item_part3_para}>
                          {each_item.description}
                        </div>
                      </div>
                      <div className={classes.item_part3_right}>
                        <img
                          src={`${import.meta.env.VITE_REACT_BACKEND_URL}${
                            each_item.image
                          }`}
                          alt=""
                          onError={(event) => {
                            event.target.onerror = null;
                            event.target.src = each_item.image;
                          }}
                        />
                        {cartContextCtx.addItems.length !== 0 &&
                        cartContextCtx.addItems.some(
                          (item) => item.itemId === each_item.itemId
                        ) ? (
                          <div className={classes.item_quantity}>
                            <div
                              className={classes.item_quantity_less}
                              onClick={() => {
                                DecreaseItem(
                                  each_item.itemId,
                                  each_item.RestaurantId
                                );
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
                                IncreseItem(
                                  each_item.itemId,
                                  each_item.RestaurantId
                                );
                              }}
                            >
                              +
                            </div>
                          </div>
                        ) : (
                          <div
                            className={classes.addButton}
                            onClick={() => {
                              IncreseItem(
                                each_item.itemId,
                                each_item.RestaurantId
                              );
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

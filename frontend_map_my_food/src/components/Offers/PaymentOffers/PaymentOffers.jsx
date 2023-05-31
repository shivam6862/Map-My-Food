import React, { useEffect, useState } from "react";
import classes from "./PaymentOffers.module.css";
import OfferHeader from "../OfferHeader/OfferHeader";
import PaymentOffersMore from "./PaymentOffersMore/PaymentOffersMore";
import usePaymentOffers from "../../hook/usePaymentOffers";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useLocationLocalStorage } from "../../hook/LocationLocalStorage";

const PaymentOffers = () => {
  const { fetchPincode } = useLocationLocalStorage();
  const { data } = usePaymentOffers();
  const [datas, setDatas] = useState([]);
  const [isMore, setIsMore] = useState(false);
  const [offerData, setOfferData] = useState({});
  const [isCopy, setIsCopy] = useState(-1);
  const [dataIndex, setDataIndex] = useState();
  const [isLoading, setisLoading] = useState(true);
  const locationPincode = fetchPincode();
  useEffect(() => {
    const fetchData = async () => {
      const result = await data(locationPincode);
      setDatas(result);
      setisLoading(false);
    };
    fetchData();
  }, [locationPincode]);
  return (
    <div className={classes.container}>
      <OfferHeader />
      {isMore && (
        <PaymentOffersMore
          data={offerData}
          setIsMore={setIsMore}
          setIsCopy={setIsCopy}
          isCopy={isCopy}
          dataIndex={dataIndex}
        />
      )}
      {isLoading && (
        <div className={classes.loadingSpinner}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div className={classes.lower_container}>
          <div className={classes.box}>
            <h1>All offers </h1>
          </div>
          <div className={classes.datas}>
            {datas.map((data, index) => (
              <div className={classes.data} key={index}>
                <div className={classes.part1}>
                  <div className={classes.image}>
                    <img src={data.couponLogo} alt="" />
                  </div>
                  <div className={classes.company}>
                    <h1>{data.company}</h1>
                  </div>
                </div>
                <div className={classes.part2}>
                  <h1>{data.heading}</h1>
                  <p>{data.para}</p>
                </div>
                <div
                  className={classes.part3}
                  onClick={() => {
                    setIsMore(true);
                    setOfferData(data);
                    setDataIndex(index);
                  }}
                >
                  + MORE
                </div>
                <div
                  className={classes.part4}
                  onClick={() => {
                    setIsCopy(index);
                  }}
                >
                  {isCopy != index ? "COPY CODE" : "COPIED"}
                  <div className={classes.code_number}>{data.code}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOffers;

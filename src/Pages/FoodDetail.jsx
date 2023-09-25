import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosFood from "../Services/apiFood";
import CartButton from "../Components/CartButton";

const FoodDetail = () => {

    const navigateToFoodPage = useNavigate()

    const [detail , setDetail] = useState({});
    const { id } = useParams();

    const callApi = async() => {
        axiosFood.detail(id).then((res) => {
            const data = res
            setDetail(data)
        })
    }

    useEffect(() => {
        callApi();
      }, []);

    return (
        <div className="flex flex-col min-h-screen pb-5">
          <div
            className="w-screen h-[80px] flex justify-end items-center pr-4 gap-3
                    sm:pr-5
                "
          >
            <div
              className="flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
              onClick={() => navigateToFoodPage("/")}
            >
              <button
                id="botButton"
                className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
              >
                <i className="bx bx-x"></i>
              </button>
              <p className="font-Poppins">Back to Food Page</p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:flex lg:items-center lg:justify-center mb-4">
              <img
                src={detail.pic}
                alt=""
                className="w-full lg:w-[50vw] lg:h-[490px] object-cover drop-shadow-xl"
              />
            </div>
            <div className="w-screen h-fit bg-[#F1F8FF] pt-5 px-5 lg:h-[490px] lg:w-[50vw] drop-shadow-xl">
              <section className="px-5 md:w-[75%] lg:w-full ">
                <div className="flex flex-1  justify-between items-center mb-5">
                  <div>
                    <span className="font-Poppins">Food</span>
                  </div>
                  <button className="flex items-center bg-button2 w-[100px] px-4 py-2 rounded-xl">
                    <p className="text-button me-1 font-Poppins">Share </p>
                    <i className="bx bx-share-alt text-[20px] text-button"></i>
                  </button>
                </div>
    
                <div className="mb-10">
                  <h1 className="mb-5 font-bold text-4xl font-Lora">{detail.title}</h1>
                  <p className="mt-2 text-[18px] text-justify">
                    {" "}
                    {detail.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Price : Rp. {detail.price}</p>
                    <button className="px-3 py-2 bg-button text-white rounded-lg hover:opacity-80"><i class='bx bx-cart'></i> Order Food</button>
                </div>
              </section>
            </div>
          </div>
          <CartButton />
        </div>
      );
}

export default FoodDetail

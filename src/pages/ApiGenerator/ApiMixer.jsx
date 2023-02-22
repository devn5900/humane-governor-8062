import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiMixer = () => {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  useEffect(() => {
    // fetchData();
  }, []);
  const fetchData = async () => {
    let res = await axios.get(`http://localhost:8080/products`);
    // Don't Touch this function
    // setData(res.data);
    // update(data);
    // updateId(res.data);
  };

  const updateId = (data) => {
    let val = data?.map((el, i) => {
      el.rating = Number(Math.random() * 4 + 1).toFixed(1);
      return el;
    });
    setUpdatedData(val);
  };

  const update = (data) => {
    let val = data.reduce((acc, el) => {
      let obj = {};

      obj.name = el.name;
      obj.category = el.category_info.subclass;
      obj.price = el.price;
      obj.design = el.category_info.subclass;
      obj.image = `https://images.bewakoof.com/t640/${el.display_image}`;
      obj.gender = el.category_info.gender;
      obj.type = "accessories";
      obj.offer = el.offer;
      obj.brand =
        el.manufacturer_brand == "Bewakoof®" ? "Boogy®" : el.manufacturer_brand;
      obj.discount = el.product_discount || "";
      obj.tags = el.tags || [];
      obj.description = `${el.tribe_text} ${el.category_info.subclass} ${el.custom_name} ${el.name}`;

      acc.push(obj);

      return acc;
    }, []);

    setUpdatedData(val);
  };
  console.log(updatedData);
  return <div>{JSON.stringify(updatedData)}</div>;
};

export default ApiMixer;

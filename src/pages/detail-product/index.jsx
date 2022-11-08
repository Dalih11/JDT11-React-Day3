import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Button } from "antd";

const DetailProduct = () => {
  const [product, setProducts] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const fetchProducts = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data?.data?.product }; console.log(payload);
      setProducts(payload || {});
    } catch (error) {
      alert(error)
    }
  };
  useEffect(() => {
    if (param.id) {
      fetchProducts(param.id)
    }
  }, [param.id])

  return (
    <>
      <center>
        <div className="text-center">
          <h1>DetailProduct</h1>
        </div>
        <p>Nama Produk: {product?.name}</p>
        <p>Harga:{product?.price}</p>
        <p>Yang Jual: {product?.ownerId?.name}</p>
        <Button type="primary" onClick={() => navigate(-1)}>Pulang</Button>
      </center>
    </>

  );
};

export default DetailProduct
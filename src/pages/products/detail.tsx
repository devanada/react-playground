import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Layout from "@/components/layout";
import { getDetailProduct } from "@/utils/apis/products/api";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailProduct(+params.id!);
      setProduct(result);
    } catch (error: any) {
      toast.error(error.toString());
    }
  }

  return (
    <Layout>
      <img />
    </Layout>
  );
}

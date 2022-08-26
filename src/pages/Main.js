import { useState, useEffect } from 'react';
import ChannelTalk from '../components/ChannelTalk';
import { getDocs, collection } from 'firebase/firestore';
import { dbService } from '../util/fbase';
import { useStore } from '../store/zustand';
import styled from 'styled-components';
import Item from '../components/Item';
import Footer from '../components/Footer';

function Main() {
  const [dbProductsData, setProductsData] = useState([]);
  const { cur_product, setting } = useStore();

  const getData = async () => {
    const dbData = await getDocs(collection(dbService, 'products'));
    dbData.forEach((doc) => setProductsData((prev) => [doc.data(), ...prev]));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <BoundaryLine />
      <BackgroundContainer>
        {dbProductsData.length === 0
          ? null
          : dbProductsData
              .slice(0)
              .map((item, idx) => <Item key={idx} data={item} />)}
      </BackgroundContainer>
      <ChannelTalk />
      <BoundaryLine />
      <Footer />
    </div>
  );
}

const BackgroundContainer = styled.div`
  width: 900px;
  height: auto;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

const BoundaryLine = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export default Main;

import { useState } from 'react';
import Header from '../components/Header';
import ChannelTalk from '../components/ChannelTalk';
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { dbService } from '../util/fbase';
import { useEffect } from 'react';
import Item from '../components/Item';

function Main() {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resData = [];
      await getDocs(collection(dbService, 'products')).then((res) => {
        res.forEach((doc) => resData.push(doc.data()));
      });
      setDbData([...dbData, ...resData]);
    };
    getData();
  }, []);

  return (
    <div>
      <BackgroundContainer>
        {dbData.length === 0
          ? null
          : dbData.map((item, idx) => <Item key={idx} data={item} />)}
      </BackgroundContainer>

      <ChannelTalk />
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

export default Main;
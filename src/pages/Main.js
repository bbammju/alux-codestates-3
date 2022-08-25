import { useState } from 'react';
import Header from '../components/Header';
import ChannelTalk from '../components/ChannelTalk';
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { dbService } from '../util/fbase';
import { useEffect } from 'react';

function Main() {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resData = [];
      let result = await getDocs(collection(dbService, 'products')).then(
        (res) => {
          res.forEach((doc) => resData.push(doc.data()));
        }
      );
      setDbData([...dbData, ...resData]);
    };
    getData();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <ChannelTalk />
    </div>
  );
}

export default Main;

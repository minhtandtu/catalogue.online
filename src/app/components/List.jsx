import React from "react";
import GridList from "./GridList";
const List = ({ data }) => {
  function convertData(data) {
    const data2 = [];

    data.forEach((item) => {
      const existingItem = data2.find(
        (element) => element.NHOMGO === item.NHOMGO
      );

      if (existingItem) {
        existingItem.THONGTIN.push({
          ANH: item.ANH,
          MA: item.MA,
          KHUON: item.KHUON,
          TEN: item.TEN,
          STATUS: item.STATUS,
        });
      } else {
        data2.push({
          NHOMGO: item.NHOMGO,
          THONGTIN: [
            {
              ANH: item.ANH,
              MA: item.MA,
              KHUON: item.KHUON,
              TEN: item.TEN,
              STATUS: item.STATUS,
            },
          ],
        });
      }
    });
    return data2;
  }
  const data2 = convertData(data);

  return (
    <div>
      {data2.map((item, index) => {
        return (
          <GridList
            key={index}
            category={item.NHOMGO}
            data={item.THONGTIN}
          ></GridList>
        );
      })}
    </div>
  );
};

export default List;

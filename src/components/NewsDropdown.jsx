import React, { useState } from "react";
import { Select, Row, Col, Typography, Avatar } from "antd";
const { Option } = Select;

const SearchBox = ({ simplified, setNewsCategory, data }) => {
  const [dropDown, setDropDown] = useState(false);
  const [name, setName] = useState("");
  const handleClick = () => {
    setDropDown(!dropDown);
  };
  let arr = [];
  return (
    <>
      {!simplified && (
        <Col span={24} style={{ marginBottom: 50 }}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            <Option value="Cryptocurrency"></Option>
            {data?.data?.coins.map((coin) => (
              <Option className="option" value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
    </>
  );
};

export default SearchBox;

//   const filterByAbility = (e) => {
//     // console.log(singleData?.abilities);
//     if (singleData?.abilities?.length > 0) {
//       const d = singleData?.abilities.map((obj) => arr.push(obj.ability.name));
//       arr.filter((i) => i.name === e.target.outerText);
//     }
//   };
//   //  obj.abilities.map((ability) => {
//   //         ability.filter((a) => a.name === e.target.outerText);
//   const handleDropDown = (e) => {
//     setName(e.target.outerText);
//     setDropDown(!dropDown);
//     filterByAbility(e);
//   };

//   // useEffect(() => {}, [singleData]);

//   return (
//     <div className="flex flex-col relative w-full">
//       <div className="bg-white w-72 flex flex-row rounded-lg py-4 shadow-xl justify-between ">
//         <div className="flex flex-row w-full justify-between px-8 ">
//           <div className="flex flex-row gap-4">
//             <img src="./img/pokemon.png" alt="" className="w-6 h-6" />
//             <h3 className="font-bold text-lg text-gray-600">
//               {name === "" ? PokeType : name}
//             </h3>
//           </div>
//           <button className="" onClick={handleClick}>
//             <svg
//               style={{ width: 20, height: 20 }}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 384 512"
//             >
//               <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="absolute overflow-scroll h-44 rounded-lg  shadow-xl top-12 z-50 pb-4">
//         {dropDown &&
//           options.length > 0 &&
//           options.map((type) => {
//             return (
//               <div className="bg-white text-gray-600  w-72 ">
//                 <button
//                   className="text-md py-2 w-full  text-left px-20 hover:bg-red-100"
//                   onClick={(e) => handleDropDown(e)}
//                 >
//                   {type.name}
//                 </button>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

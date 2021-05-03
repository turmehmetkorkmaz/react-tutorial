import { Child4 } from "./Child4";

const data = [
  { title: "samsung", price: 35 },
  { title: "sony", price: 45 },
  { title: "iphone", price: 55 },
  { title: "huawei", price: 65 },
];
const Parent4 = ({ val }) => {
  console.log(val);
  const parentFnc = (e) => {
    const val = e.target.value;
    console.log(val * 2);
  };

  return (
    <div className="parent">
        <div>{val}</div>
      {/* {data.map((p, i) => (
        <Child4 product={p} key={i} fnc={parentFnc} />
      ))} */}
    </div>
  );
};
export default Parent4;

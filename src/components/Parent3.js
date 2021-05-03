import { Child3 } from "./Child3";

const data = [
  { title: "samsung", price: 35 },
  { title: "sony", price: 45 },
  { title: "iphone", price: 55 },
  { title: "huawei", price: 65 },
];
const Parent3 = () => {
  const parentFnc = (e) => {
    const val = e.target.value;
    console.log(val * 2);
  };

  return (
    <div className="parent">
      {data.map((p, i) => (
        <Child3 product={p} key={i} fnc={parentFnc} />
      ))}
    </div>
  );
};
export default Parent3;

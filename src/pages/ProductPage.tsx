import { useEffect, useState } from "react";

const ProductPage = () => {
  const [count, setCount] = useState<number>(30);
  const [result, setResult] = useState<number>(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    console.log(result);
    if (count > 0) {
      let x = setTimeout(() => {
        handleCount();
        clearTimeout(x);
      }, 1000);
    }
  }, [count]);

  return (
    <div>
      <div className="border m-5 w-[300px] h-[100px] p-4 text-[26px] font-bold">
        {count}
      </div>
      <div className="border m-5 w-[300px] h-[100px]">
        <button
          className="m-5 px-10 py-3 bg-blue-950 text-white rounded-md"
          onClick={() => {
            if (count >= 25) {
              setResult(3);
            } else if (count <= 26 && count >= 20) {
              setResult(2);
            } else {
              setResult(1);
            }

            console.log("I am Clicked");
            console.log(result);
          }}
          disabled={count <= 0}
        >
          Stop
        </button>

        {result}
      </div>
    </div>
  );
};

export default ProductPage;

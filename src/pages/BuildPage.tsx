const BuildPage = () => {
  const data = Array.from({ length: 10 }, () => {
    return {
      id: Math.floor(Math.random() * 100),
      title: `Page ${Math.random().toFixed(2)}`,
      score: Math.round(Math.random() * 1000),
    };
  });

  console.log((500 / 1000) * 280);
  return (
    <div>
      <div className="m-5 px-5 pb-2 bg-slate-100 h-[300px] w-[800px]">
        <div className="flex items-end h-full gap-2">
          {data?.map((el) => (
            <div>
              <div
                key={el.id}
                className={` bg-neutral-800 w-[10px]`}
                style={{ height: `${(el.score / 1000) * 280}px` }}
              />
              <p className="text-[10px]">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildPage;


const isChristmasSeason = () => {
  const today = new Date();
  const month = today.getMonth(); 
  const day = today.getDate();
  return month === 11 && day >= 2 && day <= 31;
};



export default function Loader() {

    const showChristmas = isChristmasSeason();

  return (
    <div>
        <div className="flex flex-col items-center">
            <img
              src={showChristmas ? "/hero/chrilogo.png" :"/image 1.svg"}
              alt="Loading..."
              className={showChristmas  ? "w-[220px]  animate-pulse mb-8" : "w-40 h-40 animate-pulse mb-8"}
            />
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
          </div>
    </div>
  )
}

import data from "./data"
function SeriesCompletedTests() {
  return (
    <>
      <nav aria-label="breadcrumb" className="flex-none">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item">Test Series</li>
          <li className="breadcrumb-item active" aria-current="page">Completed Tests</li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-[20px] lg:gap-[30px]">
        {
          data.tests.map((test, i) =>
            <div key={i} className="bg-white rounded-[10px] p-[10px] shadow flex flex-col gap-[10px] cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-lg">
              <img src={ `/images/${test.image}` } className="max-w-full rounded-[10px] border border-solid border-gray-300" />
              <div className="flex flex-col">
                <div className="font-bold text-[20px] text-center">{test.topic}</div>
                <div className="text-center text-[16px] text-gray-500">{test.test_name}</div>
                <div className="flex justify-center my-[10px]">
                  <div className="flex flex-col px-[20px] border-0 border-solid border-r border-gray-300">
                    <div className="font-bold text-[18px] text-center">{test.no_of_questions}</div>
                    <div className="text-[14px] text-gray-400 text-center">Questions</div>
                  </div>
                  <div className="flex flex-col px-[20px]">
                    <div className="font-bold text-[18px] text-center">{test.duration} Mins</div>
                    <div className="text-[14px] text-gray-400 text-center">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  )
}
export default SeriesCompletedTests
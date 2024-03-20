import categories from "../utils/categories.json";
const Interested = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col p-5 border-2 mt-7 w-1/3 rounded-xl items-center">
        <h1 className="text-xl font-bold">Please mark your interests!</h1>
        <h5 className="text-xs mt-3 font-medium text-center w-9/12">
          We will keep you notified.
        </h5>
        <div className="w-full px-4">
          <h1 className="font-medium text-sm text-left mt-4 mb-2">
            My saved interests!
          </h1>
          <form class="align-middle">
            {categories.map((category, index) => {
              return (
                <div key={index}>
                  <input
                    class="peer w-4 h-4 focus:outline-none checked:bg-black appearance-none rounded-sm border bg-gray-300 checked:rounded-sm mr-1"
                    type="checkbox"
                    name={category}
                  />
                  <label for={category} className="text-xs font-medium">
                    {category.toUpperCase()}
                  </label>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Interested;

import categories from "../utils/categories.json";
import { useState } from "react";
// import Pagination from "./Pagination";

const Interested = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const endPageIndex = currentPage * itemsPerPage;
  const statePageIndex = endPageIndex - itemsPerPage;

  const currentPageItems = categories.slice(statePageIndex, endPageIndex);
  console.log(currentPageItems);

  let pageItems = [];
  console.log(categories.length);

  for (let i = 1; i <= categories.length / itemsPerPage; i++) {
    pageItems.push(i);
  }

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
            {currentPageItems.map((category, index) => {
              return (
                <div class="mt-3 flex items-center" key={index}>
                  <input
                    class="peer w-4 h-4 focus:outline-none checked:bg-black appearance-none rounded-sm border bg-gray-300 checked:rounded-sm mr-2"
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
          <div class="mt-3">
            <button
              class="tracking-tighter  text-gray-400 active:text-black"
              onClick={() => {
                if (currentPage > 2) {
                  setCurrentPage(currentPage - 2);
                }
              }}
            >
              {"<<"}
            </button>
            <button
              class="ml-2 mr-1  text-gray-400 active:text-black"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              {"<"}
            </button>

            {pageItems.map((i) => {
              return (
                <button
                  class=" text-gray-400 active:text-black"
                  className={
                    i === currentPage
                      ? "active ml-1 mr-1"
                      : "ml-1 mr-1  text-gray-400"
                  }
                  onClick={() => {
                    setCurrentPage(i);
                  }}
                >
                  {i}
                </button>
              );
            })}

            <button
              class="ml-2 mr-1  text-gray-400 active:text-black"
              onClick={() => {
                if (currentPage < pageItems.length) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              {">"}
            </button>
            <button
              class="tracking-tighter  text-gray-400 active:text-black"
              onClick={() => {
                if (currentPage < pageItems.length - 1) {
                  setCurrentPage(currentPage + 2);
                }
              }}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Interested;

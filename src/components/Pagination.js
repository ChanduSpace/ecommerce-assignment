import categories from "../utils/categories.json";
import { useState } from "react";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  let pageItems = [];
  console.log(categories.length);
  console.log(props.currentPage);
  for (let i = 1; i <= categories.length / props.itemsPerPage; i++) {
    pageItems.push(i);
  }

  return (
    <div>
      <button class="tracking-tighter text-gray-500">{"<<"}</button>
      <button class="ml-2 mr-1">{"<"}</button>

      {pageItems.map((i) => {
        return (
          <button
            class="ml-1 mr-1  text-gray-400"
            onClick={(i) => {
              setCurrentPage(i);
            }}
          >
            {i}
          </button>
        );
      })}

      <button class="ml-2 mr-1">{">"}</button>
      <button class="tracking-tighter">{">>"}</button>
    </div>
  );
};
export default Pagination;

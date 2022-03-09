import React from "react";

export default function Search() {
  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="mb-3 xl:w-3/6">
          <div className="input-group relative flex flex-nowrap items-stretch w-full mb-4 h-12">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              placeholder="Search doctor or speciality..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 border-blue-600 hover:border-blue-800 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-48 m-4">
          <select
            className="form-select appearance-none
              block
              w-48
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Select speciality</option>
            <option value="1">Cardiology</option>
            <option value="2">Child Health</option>
            <option value="3">Dermatology</option>
            <option value="1">Family Medicine</option>
            <option value="2">Gastroenterology</option>
            <option value="3">General Surgery</option>
            <option value="1">Medical Genetics</option>
            <option value="2">Respirology</option>
            <option value="3">Vascular Surgery</option>
            <option value="3">Occupational Medicine</option>
            <option value="1">Neurology</option>
            <option value="2">Diagnostic and Therapeutic Radiology</option>
            <option value="3">Infectious Diseases</option>
          </select>
        </div>

        <div className="mb-3 xl:w-48 m-4">
          <select
            className="form-select appearance-none
              block
              w-48
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
          >
            <option selected>Select city</option>
            <option value="Estevan">Estevan</option>
            <option value="Martensille">Martensille</option>
            <option value="Melfort">Melfort</option>
            <option value="Melville">Melville</option>
            <option value="Maoose Jaw">Maoose Jaw</option>
            <option value="Regina">Regina</option>
            <option value="Saskatoon">Saskatoon</option>
            <option value="Warman">Warman</option>
            <option value="Yorkton">Yorkton</option>
          </select>
        </div>
      </div>
    </>
  );
}

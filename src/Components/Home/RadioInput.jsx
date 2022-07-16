const RadioInput = () => {
  return (
    <div class="flex justify-center items-center gap-6 sm:flex-row flex-col">
      <div className="flex justify-center items-center gap-3">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white  checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inlineRadioOptions"
            id="freelance"
            value="option1"
          />
          <label
            class="form-check-label inline-block text-input text-[1rem] sm:text-lg font-medium"
            for="freelance"
          >
            Freelance
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white  checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inlineRadioOptions"
            id="full-time"
            value="option2"
          />
          <label
            class="form-check-label inline-block text-input text-[1rem] sm:text-lg font-medium"
            for="full-time"
          >
            Full time
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white  checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
            type="radio"
            name="inlineRadioOptions"
            id="part-time"
            value="option3"
          />
          <label
            class="form-check-label inline-block text-input text-[1rem] sm:text-lg font-medium"
            for="part-time"
          >
            Part time
          </label>
        </div>
      </div>
      <button className="bg-orange border uppercase border-orange py-4 px-16 rounded-md text-white text-lg font-medium hover:bg-white transform transition-colors ease-in-out duration-300 hover:text-orange">
        let's go
      </button>
    </div>
  );
};

export default RadioInput;

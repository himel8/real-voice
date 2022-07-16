import RadioInput from "./RadioInput";

const SearchForm = () => {
  return (
    <section className="bg-[#e6eaec] custom900:mx-16 py-4 sm:py-0">
      <form
        action=""
        className="flex justify-center items-center gap-16 flex-wrap pr-[1px]"
      >
        <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
          <input
            className="shadow appearance-none border rounded w-full   text-input leading-tight focus:outline-none focus:shadow-outline placeholder:text-input border-[#d5d9da] pl-8 pr-4 py-5 text-xl"
            id="username"
            type="text"
            placeholder="Keywords or Title"
          />
          <input
            className="shadow appearance-none border rounded w-full text-input leading-tight focus:outline-none focus:shadow-outline placeholder:text-input border-[#d5d9da] pl-8 py-5 text-xl relative"
            id="username"
            type="text"
            placeholder="Location"
          />
          <select
            className="form-select appearance shadow border rounded w-full  text-input leading-tight focus:outline-none focus:shadow-outline placeholder:text-input border-[#d5d9da] pl-8 py-5 text-lg"
            id="username"
            type="text"
            placeholder="Username"
          >
            <option selected>Categories</option>
            <option value="1">Accounting</option>
            <option value="2">Arts Design</option>
            <option value="3">Construction</option>
            <option value="4">Education Training</option>
            <option value="5">Facilities</option>
            <option value="6">Finance</option>
          </select>
        </div>
        <RadioInput />
      </form>
    </section>
  );
};

export default SearchForm;

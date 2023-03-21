function Search() {
  return (
    <div>
        <div>
            <h3>Your job title, keyword or company?</h3>
            <input type="text" placeholder="Start typing"></input>
        </div>
        <div>
            <select name="jobType" id="jobType">
                {/* TODO refactor into foreach loop */}
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
                <option value="job">Job</option>
            </select>
        </div>
        <div>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Search
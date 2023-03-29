// assets
import search from '../assets/search-icon.png';

function Filter() {
  return (
    <aside id="filter">
        <h2>Filter By</h2>

        <div className="search">
            <input type="text" placeholder='Search by Keywords' />
            <img src={search} alt="click to search for jobs by keywords" />
        </div>

        <div className='categories'>
            <h3>Caategories</h3>
        </div>

    </aside>
  )
}

export default Filter
import chevron from '../assets/chevron-right.png';
import bookmark from '../assets/bookmark.png';

function JobListing() {
  return (
    <section id="jobListings">
        <div>
            <h2>New Job Listing</h2>
            {/* TODO - refactor below into a component */}
            <a href='#'><p>Explore all jobs</p> <img src={chevron} alt="chevron right" /></a>
        </div>

        <ul>
            {/* TODO - refactor to use real jobs from https://fakerjs.dev/guide/ */}
            <li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <h3>Developer & expert in java c++</h3>
                <div>
                    <p>Fulltime</p>
                    <p>18 July 2018 by slack</p>
                </div>
                <div>
                    <p>Spain, Barcelona</p>
                    <p>Developer, Coder</p>
                </div>
                <div>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <button>APPLY</button>
                </div>
            </li>
            <li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <h3>Developer & expert in java c++</h3>
                <div>
                    <p>Fulltime</p>
                    <p>18 July 2018 by slack</p>
                </div>
                <div>
                    <p>Spain, Barcelona</p>
                    <p>Developer, Coder</p>
                </div>
                <div>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <button>APPLY</button>
                </div>
            </li>
            <li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <h3>Developer & expert in java c++</h3>
                <div>
                    <p>Fulltime</p>
                    <p>18 July 2018 by slack</p>
                </div>
                <div>
                    <p>Spain, Barcelona</p>
                    <p>Developer, Coder</p>
                </div>
                <div>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <button>APPLY</button>
                </div>
            </li>
            <li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <h3>Developer & expert in java c++</h3>
                <div>
                    <p>Fulltime</p>
                    <p>18 July 2018 by slack</p>
                </div>
                <div>
                    <p>Spain, Barcelona</p>
                    <p>Developer, Coder</p>
                </div>
                <div>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <button>APPLY</button>
                </div>
            </li>
            <li>
                <img src='https://unsplash.it/30/30' alt="job posting company logo"/>
                <h3>Developer & expert in java c++</h3>
                <div>
                    <p>Fulltime</p>
                    <p>18 July 2018 by slack</p>
                </div>
                <div>
                    <p>Spain, Barcelona</p>
                    <p>Developer, Coder</p>
                </div>
                <div>
                    <button>
                        <img src={bookmark} alt="save this job to your favorites" />
                    </button>
                    <button>APPLY</button>
                </div>
            </li>
        </ul>

        <aside>
            <p>Do you want to post a job for your company? <span>We can help.</span></p>
            <button>Click here</button>
        </aside>
    </section>
  )
}

export default JobListing
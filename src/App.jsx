import { workingHistory } from "./Data/workingHistory";
import { Card } from "./Components";

function App() {
  return (
    <>
      {/* <Badge /> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Alex Shavkuta</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Full Stack Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal font-small text-slate-200 tracking-tight">
                I build large scale projects with performance and best practices
                in mind.
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="group flex items-center py-3 active"
                      href="#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/*   
              Short description of who i am
              Working History
              Projects
              Contact Me
            */}
            <div>
              <div className="text-slate-200 text-2xl font-bold mb-3 text-center">
                Working History
              </div>
              {workingHistory.map((current, index) => {
                return <Card key={index} {...current} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

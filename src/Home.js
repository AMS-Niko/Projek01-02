import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

    {/* Header Section Start */}
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a href="#home" className="block py-6 text-lg font-bold text-red-600">Justice League</a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className="absolute right-4 block lg:hidden">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              
              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                    <li className="group">
                        <a href="#home" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                            Beranda
                        </a>
                    </li>
                    <li className="group">
                        <a href="#about" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                            About US
                        </a>
                    </li>
                    <li className="group">
                        <a href="#portfolio" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                            Portfolio
                        </a>
                    </li>
                    <li className="group">
                        <a href="#clients" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">Clients</a>
                    </li>
                    <li className="group">
                        <a href="#blog" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">Blog</a>
                    </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    </header>
    {/* Header Section End */}

    {/* Hero Section Start */}
    <section id="home" className="pt-36">
        <div className="container">
            <div className="flex flex-col">
                <div className="w-full self-center px-4 xl:w-1/2">

                    <h1 className="text-base font-semibold text-primary md:text-sl">
                        Hello Everyone 🦇,   
                        <span className="block font-bold text-dark text-4xl mt-1">
                            Justice League
                        </span>
                    </h1>

                    <h2 className="font-light text-slate-500 text-lg mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </h2>

                    <p className="font-serif text-blue-950 mb-5 leading-relaxed">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque tempore nisi possimus. 
                    </p>

                    <a href="#" className="text-sm text-white font-thin  bg-blue-500 py-2 px-5 rounded-full hover:shadow-lg hover:opacity-85">
                        Contact Us
                    </a>
                </div>
                <div className="w-full self-end px-4 xl:w-1/2">
                    <div className="relative mt-10 lg:mt-9 lg:right-0">
                        <img src="dist/img/JusticeLeague.png" alt="Bruce Wayne" className="max-w-full mx-auto"/>  
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Hero Section End */}

    {/* About Section Start */}
    <section id="about" className="pt-36 pb-32">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full px-4 mb-10 lg:w-1/2">
                    <h4 className="font-bold uppercase text-primary text-lg mb-3">
                        About Us
                    </h4>
                    <h2 className="font-light text-dark text-3xl mb-4 max-w-ml lg:text-4xl">
                        Gotham
                    </h2>
                    <p className="font-medium text-base text-slate-500 max-w-xl lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, eius pariatur asperiores natus velit illo expedita eligendi voluptatem reprehenderit repellat deleniti quo dolorum quae nam provident? Distinctio exercitationem labore alias.</p>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                    <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Call Us</h3>
                    <p className="font-medium text-base text-slate-500 max-w-xl mb-6 lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum magnam harum quasi excepturi labore placeat fugit tenetur animi recusandae itaque quaerat, fugiat, vitae ratione cumque asperiores qui inventore dolorem consectetur.
                    </p>
                    <div className="flex items-center">
                        {/* Wonder Woman */}
                        <a href="https://youtu.be/5lGoQhFb4NM?si=2oE4ieQGTL5OSBkQ" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" className="fill-current" height="100" viewBox="0 0 40 40">
                                <path fill="#ffeea3" d="M5.026,18.5c-0.431,0-0.768-0.177-1.001-0.527L2.973,16.5h7.001c0.449,0,0.776,0.164,1.001,0.501 l1.06,1.499H5.026z"></path><path fill="#f5c276" d="M9.974,17c0.351,0,0.493,0.141,0.6,0.301L11.068,18H5.026c-0.264,0-0.444-0.094-0.603-0.332 L3.945,17H9.974 M9.974,16H2l1.609,2.25C3.943,18.75,4.443,19,5.026,19H13l-1.609-2.276C11.057,16.224,10.557,16,9.974,16L9.974,16 z"></path><path fill="#ffeea3" d="M27.966,18.5l1.052-1.487c0.232-0.349,0.56-0.513,1.009-0.513h7.001l-1.043,1.459 c-0.243,0.364-0.58,0.541-1.011,0.541H27.966z"></path><path fill="#f5c276" d="M36.056,17l-0.497,0.695C35.418,17.906,35.238,18,34.974,18h-6.042l0.51-0.721 C29.533,17.141,29.675,17,30.026,17H36.056 M38,16h-7.974c-0.583,0-1.083,0.224-1.417,0.724L27,19h7.974 c0.583,0,1.083-0.25,1.417-0.75L38,16L38,16z"></path><g><path fill="#ffeea3" d="M20.026,23.988l-0.087,0.154l-0.404,0.609L16.519,30l-3.555-6.126 c-0.463-0.917-1.253-1.374-2.401-1.374H8c-0.431,0-0.768-0.178-1.001-0.528L5.963,20.5h5.104c1.453,0,2.518,0.602,3.254,1.839 l2.161,3.645L20,19.988l3.519,5.996l2.161-3.646c0.736-1.237,1.801-1.838,3.254-1.838h5.104l-1.029,1.462 C32.768,22.322,32.431,22.5,32,22.5h-2.563c-1.148,0-1.938,0.458-2.415,1.399L23.481,30L20.026,23.988z"></path><path fill="#f5c276" d="M20,20.976l2.658,4.53l0.858,1.462l0.865-1.458l1.728-2.915C26.748,21.522,27.672,21,28.934,21h4.14 l-0.489,0.695C32.444,21.906,32.264,22,32,22h-2.563c-1.325,0-2.283,0.554-2.847,1.646L23.483,29l-2.585-4.499l-0.878-1.527 L20,23.011l-0.021-0.037l-0.878,1.527L16.517,29l-3.107-5.354C12.845,22.554,11.888,22,10.562,22H8 c-0.264,0-0.444-0.094-0.599-0.326L6.926,21h4.14c1.262,0,2.185,0.522,2.823,1.593l1.729,2.917l0.865,1.458l0.858-1.462L20,20.976 M20,19l-3.521,6l-1.729-2.917C13.925,20.697,12.68,20,11.066,20H5l1.583,2.25C6.917,22.75,7.417,23,8,23h2.562 c0.913,0,1.556,0.31,1.969,1.125L16.521,31l3.448-6L20,25.056L20.031,25l3.448,6l3.99-6.875C27.881,23.31,28.525,23,29.437,23H32 c0.583,0,1.083-0.25,1.417-0.75L35,20h-6.066c-1.614,0-2.858,0.697-3.684,2.083L23.521,25L20,19L20,19z"></path></g><g><path fill="#ffeea3" d="M20,16.003l-3.492,6.022l-3.672-5.96c-0.62-1.023-1.515-1.566-2.586-1.566H3 c-0.431,0-0.768-0.178-1.001-0.528L0.963,12.5h9.634c1.959,0,3.194,1.571,3.756,2.507l1.97,3.175L20,11.98l3.678,6.202l1.966-3.169 c0.565-0.943,1.801-2.514,3.76-2.514h9.634l-1.029,1.462C37.768,14.322,37.431,14.5,37,14.5h-7.25 c-1.071,0-1.966,0.542-2.588,1.569l-3.67,5.957L20,16.003z"></path><path fill="#f5c276" d="M20,12.961l2.827,4.768l0.841,1.418l0.869-1.401l1.539-2.481C26.584,14.419,27.691,13,29.403,13 h8.671l-0.489,0.695C37.444,13.906,37.264,14,37,14h-7.25c-1.237,0-2.308,0.643-3.012,1.803l-3.233,5.248l-2.64-4.553L20,15.007 l-0.865,1.492l-2.64,4.553l-3.229-5.242C12.558,14.643,11.487,14,10.25,14H3c-0.264,0-0.444-0.094-0.599-0.325L1.926,13h8.67 c1.713,0,2.82,1.419,3.335,2.277l1.531,2.469l0.869,1.401l0.841-1.418L20,12.961 M20,11l-3.688,6.219l-1.531-2.469 C13.844,13.188,12.389,12,10.597,12H0l1.583,2.25C1.917,14.75,2.417,15,3,15h7.25c0.913,0,1.646,0.479,2.161,1.328L16.521,23L20,17 l3.479,6l4.11-6.672C28.104,15.479,28.837,15,29.75,15H37c0.583,0,1.083-0.25,1.417-0.75L40,12H29.403 c-1.792,0-3.247,1.188-4.185,2.75l-1.531,2.469L20,11L20,11z"></path></g>
                            </svg>
                        </a>
                        {/* The Batman */}
                        <a href="https://youtu.be/LDG9bisJEaI?si=JBvuOepEYH7LNwvc" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" className="fill-current" viewBox="0 0 30 30">
                                <path d="M 0.34765625 11 C -0.00634375 11 -0.12173438 11.478812 0.19726562 11.632812 C 1.9542656 12.475813 4.5126563 14.197328 4.2226562 16.986328 C 4.1666562 17.517328 4.6163906 17.974422 5.1503906 17.982422 C 7.7463906 18.019422 13.92 18.58 15 23 C 16.08 18.58 22.253609 18.018469 24.849609 17.980469 C 25.383609 17.972469 25.832344 17.516375 25.777344 16.984375 C 25.487344 14.195375 28.045734 12.474859 29.802734 11.630859 C 30.122734 11.477859 30.006344 11 29.652344 11 L 20.773438 11 C 20.338437 11 19.958516 11.293797 19.853516 11.716797 C 19.656516 12.512797 19.240047 13.71 18.498047 13.875 C 17.436047 14.125 16.394531 14.512219 16.269531 13.824219 C 16.269531 13.276219 16.146406 12.593031 16.066406 12.207031 C 16.048406 12.121031 15.926438 12.113266 15.898438 12.197266 L 15.5625 13.1875 C 15.5625 13.1875 15.438 13 15 13 C 14.563 13 14.4375 13.1875 14.4375 13.1875 L 14.101562 12.197266 C 14.073563 12.113266 13.951594 12.121031 13.933594 12.207031 C 13.853594 12.593031 13.730469 13.276219 13.730469 13.824219 C 13.605469 14.512219 12.563953 14.125 11.501953 13.875 C 10.759953 13.711 10.343484 12.513797 10.146484 11.716797 C 10.041484 11.293797 9.6635156 11 9.2285156 11 L 0.34765625 11 z"></path>
                            </svg>
                        </a>
                        {/* The Flash */}
                        <a href="https://youtu.be/r51cYVZWKdY?si=Nj92aYNpb1G3BLcB" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" className="fill-current" y="0px" width="100" height="25" viewBox="0 0 100 100">
                                <path d="M45.985,98.028c-3.183,0-6.195-1.188-8.516-3.35 c-5.153-4.081-13.793-11.727-15.298-18.154c-0.223-0.95-0.859-8.882-1.421-13.637c-3.18-1.712-5.769-3.135-6.239-6.893 L11.05,28.307c-0.39-3.116,1.501-6.062,4.496-7.006c0.635-0.2,1.291-0.301,1.953-0.301c1.293,0,2.526,0.381,3.565,1.062 c4.02-11.896,17.871-19.106,30.938-19.106c13.073,0,27.511,5.851,31.531,17.747C84.573,20.022,85.213,21,86.506,21 c0.66,0,1.315,0.101,1.947,0.299c3.001,0.945,4.892,3.892,4.502,7.008l-3.461,27.688c-0.47,3.758-2.73,6.928-5.91,8.64 c-0.562,4.755-1.527,10.938-1.749,11.889c-1.506,6.43-10.146,14.075-15.299,18.155c-2.321,2.162-5.333,3.35-8.515,3.35H45.985z" opacity=".35"></path><path fill="#f2f2f2" d="M43.985,96.028c-3.183,0-6.195-1.188-8.516-3.35c-5.153-4.081-13.793-11.727-15.298-18.154 c-0.223-0.95-1.188-7.135-1.75-11.89c-3.18-1.712-5.44-4.882-5.911-8.64L9.05,26.307c-0.39-3.116,1.501-6.062,4.496-7.006 c0.635-0.2,1.291-0.301,1.953-0.301c1.293,0,2.526,0.381,3.565,1.062C23.084,8.165,36.933,1.972,50,1.972 c13.073,0,26.921,6.193,30.941,18.09C81.98,19.381,83.213,19,84.506,19c0.66,0,1.315,0.101,1.947,0.299 c3.001,0.945,4.892,3.892,4.502,7.008l-3.461,27.688c-0.47,3.758-2.73,6.928-5.91,8.64c-0.562,4.755-1.527,10.938-1.749,11.889 c-1.506,6.43-10.146,14.075-15.299,18.155c-2.321,2.162-5.333,3.35-8.515,3.35H43.985z"></path><path fill="#ffc7a3" d="M40.985,88.028c-1.202,0-2.332-0.468-3.182-1.318L26.318,75.225c-0.85-0.85-1.318-1.98-1.318-3.182 V63c0-0.829,0-19.524,0-20V28.528c0-12.75,12.959-18.557,25-18.557c9.666,0,25,5.038,25,18.557V43c0,0.477,0,19.171,0,20v9.043 c0,1.202-0.468,2.332-1.318,3.182L62.197,86.71c-0.85,0.85-1.98,1.318-3.182,1.318H40.985z"></path><polygon fill="#40396e" points="52,77 48,77 45,74 55,74" opacity=".35"></polygon><polygon fill="#40396e" points="48,68 52,68 59,71 41,71" opacity=".35"></polygon><path fill="#de5147" d="M50,9.972c-12.419,0-25,5.807-25,18.557V38v7.5V63v3v6.043c0,1.202,0.468,2.332,1.318,3.182L43,90 c0,0,1.503-0.564,1.671-0.24C47,90,53,90,55.196,90.001C55.425,89.607,57,90,57,90l16.682-14.775c0.85-0.85,1.318-1.98,1.318-3.182 V66v-3V45.5V38v-9.472C75,15.779,62.419,9.972,50,9.972z M31,39c17,0,17,13,17,13s-10,4-17,4C29,52,28,45,31,39z M55.191,84 L55.191,84c-1.038-1.792-2.971-3-5.191-3s-4.153,1.208-5.191,3h0c-1.728,0-3.313-0.957-4.118-2.486L32,65c8-5,18-8,18-8s10,3,18,8 l-8.692,16.514C58.504,83.043,56.918,84,55.191,84z M69,56c-7,0-17-4-17-4s0-13,17-13C72,45,71,52,69,56z"></path><g><path fill="#f2f2f2" d="M43,50.455c0,0-3.653,0-6.364,0S33,48,33,48s0.909-2.455,4.545-2.455 C40.256,45.545,43,50.455,43,50.455z"></path><circle cx="37.909" cy="48" r="2.455" fill="#40396e"></circle><path fill="#40396e" d="M44,49c1.333,0,2.005-1.625,1.047-2.552C44.476,45.896,43.79,45.369,43,45 c-3.379-1.69-5.449-2.759-7.138-2.759C32.482,42.241,31,45,31,45s0.013-0.004,0.037-0.011c2.3-0.658,4.769-0.316,6.811,0.928 C40.093,47.285,43.01,49,44,49L44,49z"></path><path fill="#f2f2f2" d="M62.459,45.545c3.633,0,4.541,2.452,4.541,2.452s-0.925,2.452-3.633,2.452s-6.358,0-6.358,0 S59.75,45.545,62.459,45.545z"></path><circle cx="62.096" cy="47.998" r="2.452" fill="#40396e"></circle><path fill="#40396e" d="M56.009,49c0.99,0,3.907-1.715,6.152-3.083c2.042-1.244,4.511-1.586,6.811-0.928 C68.996,44.996,69.009,45,69.009,45s-1.482-2.759-4.862-2.759c-1.689,0-3.759,1.069-7.138,2.759 c-0.79,0.369-1.476,0.896-2.047,1.448C54.004,47.375,54.676,49,56.009,49L56.009,49z"></path><path fill="#f9b84f" d="M26,58l-2.155-0.5c-2.482,0-4.576-1.848-4.884-4.312L15.5,25.5l10.33,15.996L26,58z"></path><path fill="#f9b84f" d="M74.006,58l2.155-0.5c2.482,0,4.576-1.848,4.884-4.312L84.506,25.5l-10.33,15.996L74.006,58z"></path><path fill="none" stroke="#40396e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M50,8.472c-11.328,0-24.315,5.514-25.5,17.028c-0.327,3.173-0.26,9.414-0.155,16.707L15.5,25.5l3.461,27.688 c0.308,2.463,2.402,4.312,4.884,4.312H24.5c0,3,1.772,14.57,2,15.543c1.244,5.314,13.243,14.728,13.243,14.728 c1.125,1.125,2.651,1.757,4.243,1.757h6.009h0.011"></path><path fill="none" stroke="#40396e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M50.006,8.472c11.328,0,24.315,5.514,25.5,17.028c0.327,3.173,0.26,9.414,0.155,16.707L84.506,25.5l-3.461,27.688 c-0.308,2.463-2.402,4.312-4.884,4.312h-0.655c0,3-1.772,14.57-2,15.543c-1.244,5.314-13.243,14.728-13.243,14.728 c-1.125,1.125-2.651,1.757-4.243,1.757h-6.009H50"></path></g>
                            </svg>
                        </a>
                        {/* Superman */}
                        <a href="https://youtu.be/0WWzgGyAH6Y?si=4cSDkyoFWxgaqzJa" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="fill-current" width="100" height="20" viewBox="0 0 48 48">
                                <path fill="#C62828" d="M0 15L8 7 40 7 48 15 24 43z"></path><path fill="#FFEB3B" d="M33 15c-.1-3.4-3.8-6-9.7-6-5.9-.1-8.4 2.8-8.4 2.8s-4.5 4.9 10 4.9 14 5.8 14 5.8l6.3-7.5L41 10.8V15H33zM13 9H8.8l-6.1 6.1.2.2L6 18.9C7.7 11.8 13 9 13 9zM17.3 32.1l.2.2 6.5 7.6 5.6-6.6.9-1.2C30.6 32.2 24.8 34 17.3 32.1z"></path><path fill="#FFEB3B" d="M34.1 11.2c.5-.5 1-2.2 1-2.2h-3C32 9 33.4 10.1 34.1 11.2zM23.5 29c14 .7 9.8-3.4 9.8-3.4s-.5-.8-11-1.4c-10.5-.6-13.2-1.8-13.2-1.8l5.2 6.1C15.8 26.9 20.7 25.9 23.5 29z"></path>
                            </svg>
                        </a>
                        
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* About Section End */}

    {/* Portfolio Section Start */}
    <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
        <div className="container">

            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4">Projek Terbaru</h2>
                    <p className="font-medium text-md text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, labore? Asperiores dignissimos suscipit voluptate commodi aspernatur qui perferendis vero laborum!</p>
                </div>
            </div>

            <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="dist/img/portfolio/hero-image.webp" alt="landing Page" width="w-full"/>
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                        Back in Time by Flash
                    </h3>
                    <p className="font-medium text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                    </p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="dist/img/portfolio/Batman_v_Doomsday_20.webp" alt="landing Page" width="w-full"/>
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                        Save the world from Doomsday
                    </h3>
                    <p className="font-medium text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                    </p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="dist/img/portfolio/3.jpg" alt="landing Page" width="w-full"/>
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                        Save the World from Steppenwolf
                    </h3>
                    <p className="font-medium text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                    </p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src="dist/img/portfolio/4.jpg" alt="landing Page" width="w-full" />
                    </div>
                    <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                        Save Gotham from Bane
                    </h3>
                    <p className="font-medium text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                    </p>
                </div>
            </div>
        </div>
    </section>
    {/* Portfolio Section End */}
 

    {/* Client Section Start */}
    <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
            <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-4">Clients</h4>
                    <p className="font-light text-md text-secondary text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ipsa.</p>
                </div>
            </div>

            <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                    {/* Globe */}
                    <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                    </a>

                    {/* Gotham */}
                    <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="366.13pt" height="366.13pt" viewBox="0 0 366.13 366.13" version="1.1">
                    <defs>
                    <clipPath id="clip1">
                      <path d="M 0 0 L 366.128906 0 L 366.128906 366.128906 L 0 366.128906 Z M 0 0 "/>
                    </clipPath>
                    </defs>
                    <g id="surface1">
                    <g clip-path="url(#clip1)" clip-rule="nonzero">
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 0 183.027344 C 0 284 82.066406 366.128906 183.136719 366.128906 C 283.984375 366.128906 366.132813 284 366.132813 183.027344 C 366.132813 82.191406 283.984375 0 183.136719 0 C 82.066406 0 0 82.191406 0 183.027344 M 19.789063 183.027344 C 19.789063 93.101563 93.0625 19.808594 183.136719 19.808594 C 273.054688 19.808594 346.367188 93.101563 346.367188 183.027344 C 346.367188 273.050781 273.054688 346.359375 183.136719 346.359375 C 93.0625 346.359375 19.789063 273.050781 19.789063 183.027344 "/>
</g>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 74.625 177.675781 L 73.078125 177.203125 C 73.191406 176.945313 73.273438 176.6875 73.273438 176.390625 C 73.273438 175.503906 72.761719 174.714844 71.921875 174.117188 C 70.984375 173.558594 69.804688 173.085938 68.386719 172.660156 C 66.972656 172.230469 65.449219 171.886719 63.734375 171.652344 C 62.105469 171.4375 60.515625 171.304688 59.0625 171.304688 C 57.21875 171.304688 55.351563 171.609375 53.535156 172.183594 C 51.730469 172.695313 50.148438 173.472656 48.75 174.539063 C 47.292969 175.828125 46.15625 177.242188 45.296875 179.023438 C 44.441406 180.933594 43.992188 183.007813 43.992188 185.648438 C 43.992188 188.242188 44.441406 190.234375 45.296875 192.25 C 46.15625 193.964844 47.292969 195.484375 48.75 196.6875 C 50.148438 197.691406 51.730469 198.507813 53.546875 199.113281 C 55.375 199.710938 57.242188 200.007813 59.0625 200.007813 C 61.890625 200.007813 64.441406 199.710938 66.710938 199.195313 C 68.964844 198.683594 70.894531 198.164063 72.480469 197.566406 L 72.480469 190.921875 L 62.941406 190.921875 C 62.234375 190.921875 61.71875 191.09375 61.378906 191.4375 C 61.054688 191.777344 60.800781 192.546875 60.6875 193.496094 L 59.3125 193.496094 L 59.3125 183.589844 L 60.6875 183.589844 C 60.800781 184.574219 61.054688 185.046875 61.378906 185.21875 C 61.71875 185.476563 62.234375 185.601563 62.941406 185.601563 L 81.570313 185.601563 L 81.570313 186.953125 C 80.601563 187.078125 79.984375 187.296875 79.722656 187.535156 C 79.46875 187.765625 79.296875 188.242188 79.296875 188.910156 L 79.296875 197.566406 C 79.296875 198.085938 79.515625 198.382813 79.8125 198.507813 C 80.066406 198.722656 80.433594 198.851563 80.867188 199.113281 L 80.867188 200.441406 C 79.164063 201.554688 77.476563 202.5 75.675781 203.308594 C 73.808594 204.101563 72.011719 204.75 70.144531 205.175781 C 68.257813 205.601563 66.394531 205.816406 64.503906 205.953125 C 62.703125 206.011719 60.835938 206.058594 59.0625 206.058594 C 55.546875 206.058594 52.414063 205.644531 49.566406 204.789063 C 46.6875 203.890625 44.226563 202.453125 42.164063 200.78125 C 40.175781 198.851563 38.589844 196.859375 37.449219 194.179688 C 36.339844 191.648438 35.828125 188.886719 35.828125 185.519531 C 35.828125 182.089844 36.339844 179.324219 37.449219 176.859375 C 38.589844 174.117188 40.175781 172.101563 42.164063 170.148438 C 44.226563 168.453125 46.648438 166.992188 49.523438 166.007813 C 52.414063 165.15625 55.546875 164.683594 59.0625 164.683594 C 61.226563 164.683594 63.328125 164.851563 65.296875 165.113281 C 67.289063 165.410156 69.027344 165.753906 70.617188 166.097656 C 72.117188 166.484375 73.398438 166.867188 74.429688 167.207031 C 75.457031 167.597656 76.078125 167.769531 76.324219 167.769531 C 76.785156 167.769531 77.113281 167.683594 77.34375 167.46875 C 77.605469 167.207031 77.859375 167.039063 78.117188 166.824219 L 78.980469 167.46875 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 120.535156 173.121094 C 122.90625 173.726563 124.996094 174.753906 126.933594 176.347656 C 128.859375 177.628906 130.433594 179.410156 131.625 181.574219 C 132.890625 183.71875 133.507813 186.121094 133.507813 189.160156 C 133.507813 192.164063 132.890625 194.5625 131.625 196.859375 C 130.433594 198.851563 128.859375 200.738281 126.933594 202.023438 C 124.996094 203.480469 122.90625 204.578125 120.535156 205.179688 C 118.269531 205.777344 115.929688 206.058594 113.710938 206.058594 C 111.429688 206.058594 109.160156 205.777344 106.800781 205.179688 C 104.488281 204.578125 102.320313 203.480469 100.433594 202.023438 C 98.527344 200.738281 96.984375 198.851563 95.71875 196.859375 C 94.476563 194.5625 93.878906 192.164063 93.878906 189.160156 C 93.878906 186.121094 94.476563 183.71875 95.71875 181.574219 C 96.984375 179.410156 98.527344 177.628906 100.433594 176.347656 C 102.320313 174.753906 104.488281 173.726563 106.800781 173.121094 C 109.160156 172.484375 111.429688 172.101563 113.710938 172.101563 C 115.929688 172.101563 118.269531 172.484375 120.535156 173.121094 M 109.03125 178.554688 C 107.488281 179.105469 106.070313 179.925781 104.835938 180.886719 C 103.5625 181.832031 102.582031 182.902344 101.78125 184.492188 C 101.011719 185.773438 100.625 187.339844 100.625 189.160156 C 100.625 190.835938 101.011719 192.640625 101.78125 193.875 C 102.582031 195.3125 103.5625 196.558594 104.835938 197.4375 C 106.070313 198.382813 107.488281 199.113281 109.03125 199.664063 C 110.554688 200.222656 112.113281 200.484375 113.710938 200.484375 C 115.222656 200.484375 116.773438 200.222656 118.402344 199.664063 C 119.863281 199.113281 121.265625 198.382813 122.5625 197.4375 C 123.800781 196.558594 124.808594 195.3125 125.605469 193.875 C 126.359375 192.640625 126.78125 190.835938 126.78125 189.160156 C 126.78125 187.339844 126.359375 185.773438 125.605469 184.492188 C 124.808594 182.902344 123.800781 181.832031 122.5625 180.886719 C 121.265625 179.925781 119.863281 179.105469 118.402344 178.554688 C 116.773438 178.054688 115.222656 177.847656 113.710938 177.847656 C 112.113281 177.847656 110.554688 178.054688 109.03125 178.554688 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 163.414063 204.832031 L 163.414063 205.90625 L 153.914063 205.90625 L 153.914063 204.832031 C 154.25 204.832031 154.460938 204.75 154.667969 204.535156 C 154.902344 204.363281 155.035156 204.058594 155.035156 203.699219 L 155.035156 178.808594 L 144.898438 178.808594 C 144.53125 178.808594 144.210938 178.933594 143.871094 179.152344 C 143.546875 179.410156 143.335938 179.835938 143.335938 180.457031 L 142.21875 180.457031 L 142.21875 171.691406 L 143.335938 171.691406 C 143.335938 172.3125 143.546875 172.695313 143.871094 172.914063 C 144.210938 173.121094 144.53125 173.214844 144.898438 173.214844 L 172.144531 173.214844 C 172.566406 173.214844 172.933594 173.121094 173.265625 172.914063 C 173.539063 172.695313 173.710938 172.3125 173.710938 171.691406 L 174.914063 171.691406 L 174.914063 180.457031 L 173.710938 180.457031 C 173.710938 179.835938 173.539063 179.410156 173.265625 179.152344 C 172.933594 178.933594 172.566406 178.808594 172.144531 178.808594 L 162.0625 178.808594 L 162.0625 203.699219 C 162.0625 204.449219 162.492188 204.832031 163.414063 204.832031 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 214.546875 175.363281 C 214.546875 174.542969 214.09375 174.152344 213.21875 174.152344 L 213.21875 173.121094 L 222.691406 173.121094 L 222.691406 174.152344 C 222.371094 174.152344 222.160156 174.242188 221.894531 174.414063 C 221.707031 174.628906 221.5625 174.925781 221.5625 175.363281 L 221.5625 203.699219 C 221.5625 204.058594 221.707031 204.363281 221.894531 204.535156 C 222.160156 204.75 222.371094 204.832031 222.691406 204.832031 L 222.691406 205.90625 L 213.21875 205.90625 L 213.21875 204.832031 C 214.09375 204.832031 214.546875 204.449219 214.546875 203.699219 L 214.546875 191.996094 L 194.910156 191.996094 L 194.910156 203.699219 C 194.910156 204.058594 195.054688 204.363281 195.257813 204.535156 C 195.488281 204.75 195.722656 204.832031 196.007813 204.832031 L 196.007813 205.90625 L 186.808594 205.90625 L 186.808594 204.832031 C 187.476563 204.832031 187.839844 204.449219 187.839844 203.699219 L 187.839844 175.363281 C 187.839844 174.496094 187.476563 174.152344 186.808594 174.152344 L 186.808594 173.121094 L 196.007813 173.121094 L 196.007813 174.152344 C 195.722656 174.152344 195.488281 174.242188 195.257813 174.414063 C 195.054688 174.628906 194.910156 174.925781 194.910156 175.363281 L 194.910156 185.945313 L 214.546875 185.945313 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 234.339844 204.832031 C 234.867188 204.75 235.367188 204.449219 235.644531 204.019531 C 236.007813 203.527344 236.351563 202.972656 236.652344 202.371094 L 248.734375 178.054688 C 249.035156 177.628906 249.34375 177.113281 249.574219 176.726563 C 249.785156 176.300781 249.941406 175.871094 249.941406 175.488281 C 249.941406 175.019531 249.742188 174.714844 249.464844 174.496094 C 249.121094 174.328125 248.84375 174.195313 248.460938 174.152344 L 248.460938 173.121094 L 259.59375 173.121094 L 259.59375 174.152344 C 259.261719 174.195313 258.949219 174.328125 258.640625 174.496094 C 258.34375 174.628906 258.175781 175.019531 258.175781 175.488281 C 258.175781 175.871094 258.253906 176.253906 258.410156 176.601563 C 258.550781 176.859375 258.75 177.242188 259.09375 177.800781 L 272.730469 203.136719 C 272.917969 203.652344 273.214844 204.019531 273.5625 204.1875 C 273.945313 204.402344 274.398438 204.617188 274.875 204.832031 L 274.875 205.90625 L 263.347656 205.90625 L 263.347656 204.832031 C 263.511719 204.832031 263.765625 204.75 264.007813 204.660156 C 264.238281 204.488281 264.386719 204.316406 264.386719 204.058594 C 264.386719 203.652344 264.21875 203.050781 263.917969 202.371094 L 261.382813 197.738281 L 245.394531 197.738281 L 243.015625 202.152344 C 242.613281 203.050781 242.371094 203.734375 242.371094 204.105469 C 242.371094 204.617188 242.777344 204.832031 243.609375 204.832031 L 243.609375 205.90625 L 234.339844 205.90625 Z M 259.027344 193.234375 L 253.535156 181.617188 L 247.355469 193.234375 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(59.999084%,30.198669%,27.49939%);fill-opacity:1;" d="M 285.246094 204.832031 C 285.570313 204.832031 285.847656 204.75 286.167969 204.535156 C 286.429688 204.363281 286.554688 204.058594 286.554688 203.699219 L 286.554688 175.226563 C 286.554688 174.800781 286.429688 174.496094 286.167969 174.328125 C 285.847656 174.195313 285.570313 174.152344 285.246094 174.152344 L 285.246094 173.121094 L 297.554688 173.121094 L 297.554688 174.152344 C 297.332031 174.152344 297.125 174.195313 296.871094 174.289063 C 296.613281 174.460938 296.503906 174.628906 296.503906 174.925781 C 296.503906 175.179688 296.570313 175.488281 296.757813 175.828125 C 296.957031 176.21875 297.148438 176.601563 297.378906 176.898438 L 306.773438 193.105469 L 316.289063 177.070313 C 316.566406 176.601563 316.804688 176.128906 316.980469 175.789063 C 317.121094 175.441406 317.164063 175.140625 317.164063 174.886719 C 317.164063 174.367188 316.910156 174.152344 316.367188 174.152344 L 316.367188 173.121094 L 328.492188 173.121094 L 328.492188 174.152344 C 328.167969 174.152344 327.867188 174.195313 327.578125 174.328125 C 327.394531 174.496094 327.21875 174.800781 327.21875 175.226563 L 327.21875 203.699219 C 327.21875 204.058594 327.394531 204.363281 327.578125 204.535156 C 327.867188 204.75 328.167969 204.832031 328.492188 204.832031 L 328.492188 205.90625 L 318.21875 205.90625 L 318.21875 204.832031 C 319.355469 204.832031 319.953125 204.449219 319.953125 203.699219 L 319.953125 182.902344 L 319.867188 182.902344 L 306.601563 205.90625 L 306.410156 205.90625 L 293.414063 182.859375 L 293.285156 182.859375 L 293.285156 203.699219 C 293.285156 204.449219 293.847656 204.832031 295.128906 204.832031 L 295.128906 205.90625 L 285.246094 205.90625 "/>
</g>
</svg>

                    </a>
                    
                </div>
            </div>
        </div>
    </section>

    {/* Client Section End */}

    {/* Blog Section Start */}
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">

            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4">News</h2>
                    <p className="font-medium text-md text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores nobis magni dignissimos?</p>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                        <div className="py-8 px-6">
                            <h3 className="block text-xl font-semibold text-dark">Fight On Earth</h3>
                            <p className="mb-6 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?</p>
                            <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                        <div className="py-8 px-6">
                            <h3 className="block text-xl font-semibold text-dark">Fight On Earth</h3>
                            <p className="mb-6 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?</p>
                            <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                        <div className="py-8 px-6">
                            <h3 className="block text-xl font-semibold text-dark">Fight On Earth</h3>
                            <p className="mb-6 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?</p>
                            <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




</div>
  );
}

export default App;

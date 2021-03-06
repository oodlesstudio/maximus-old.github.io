import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Home */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHome">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHome"
              aria-expanded="false"
              aria-controls="collapseHome"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5949 11.8689L12.8956 4.17522C12.8402 4.11968 12.7743 4.07561 12.7018 4.04554C12.6293 4.01548 12.5516 4 12.4731 4C12.3947 4 12.317 4.01548 12.2445 4.04554C12.172 4.07561 12.1061 4.11968 12.0507 4.17522L4.35141 11.8689C4.12711 12.0932 4 12.3979 4 12.7157C4 13.3755 4.53646 13.912 5.1963 13.912H6.00754V19.4019C6.00754 19.7327 6.27483 20 6.60568 20H11.2768V15.813H13.3704V20H18.3406C18.6715 20 18.9388 19.7327 18.9388 19.4019V13.912H19.75C20.0678 13.912 20.3724 13.7867 20.5968 13.5606C21.0622 13.0932 21.0622 12.3362 20.5949 11.8689Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Home</span>
            </button>
          </h2>
          <div
            id="collapseHome"
            className="accordion-collapse collapse"
            aria-labelledby="headingHome"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Client Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5625 11.1875V18.375H5.78125H5V19.1875V20H12.1875H19.375V19.1875V18.375H18.5938H17.8125V11.1875V4H12.1875H6.5625V11.1875ZM9.8125 6.40625V7.1875H9H8.1875V6.40625V5.625H9H9.8125V6.40625ZM13 6.40625V7.1875H12.1875H11.375V6.40625V5.625H12.1875H13V6.40625ZM16.1875 6.40625V7.1875H15.375H14.5625V6.40625V5.625H15.375H16.1875V6.40625ZM9.8125 9.59375V10.375H9H8.1875V9.59375V8.8125H9H9.8125V9.59375ZM13 9.59375V10.375H12.1875H11.375V9.59375V8.8125H12.1875H13V9.59375ZM16.1875 9.59375V10.375H15.375H14.5625V9.59375V8.8125H15.375H16.1875V9.59375ZM9.79875 12.7969L9.78125 13.5938L8.98438 13.6112L8.1875 13.6287V12.8144V12H9.00187H9.81625L9.79875 12.7969ZM12.9862 12.7969L12.9688 13.5938H12.1875H11.4062L11.3888 12.7969L11.3713 12H12.1875H13.0037L12.9862 12.7969ZM16.1875 12.8144V13.6287L15.3906 13.6112L14.5938 13.5938L14.5763 12.7969L14.5588 12H15.3731H16.1875V12.8144ZM12.9564 15.4229C13.3472 15.6411 13.6484 16.0534 13.7446 16.5021C13.7819 16.6762 13.8125 17.1688 13.8125 17.5968V18.375H12.1808H10.5491L10.5714 17.4174C10.5929 16.4964 10.601 16.4457 10.7826 16.0893C10.9801 15.7019 11.3628 15.3784 11.7728 15.2519C12.0996 15.1512 12.5986 15.2232 12.9564 15.4229Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Client Management</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5103 5.05643C10.2384 5.34703 9.1779 6.30076 8.79424 7.49904C8.63299 8.00274 8.59621 8.89563 8.71471 9.42842C9.00004 10.711 9.98118 11.7396 11.2996 12.1383C11.7502 12.2746 12.7607 12.2744 13.2146 12.138C14.39 11.7845 15.3568 10.8607 15.7169 9.74703C15.897 9.19017 15.9197 8.24916 15.7665 7.69098C15.4229 6.4386 14.5075 5.50554 13.242 5.11787C12.8301 4.9917 11.933 4.95986 11.5103 5.05643ZM9.03255 12.6277C7.98444 12.9098 7.08935 13.5229 6.47001 14.3829C6.11589 14.8747 5.94988 15.259 6.01324 15.4407C6.10252 15.6967 6.74483 16.4996 7.24934 16.9856C10.2987 19.9235 15.2259 19.607 17.8783 16.303C18.0746 16.0584 18.3091 15.73 18.3993 15.5733L18.5633 15.2885L18.4173 14.9978C18.0517 14.27 17.3898 13.5542 16.7072 13.1486C16.1245 12.8025 15.4788 12.5827 15.0233 12.5757C14.6732 12.5702 14.6167 12.5856 14.3778 12.7515C13.1667 13.5923 11.37 13.5875 10.1117 12.7401C9.77921 12.5162 9.53964 12.4912 9.03255 12.6277Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">User Management</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.8107 5.08449C5.68052 5.38838 4.91938 6.46632 5.01646 7.62549C5.1235 8.90367 6.16288 9.86719 7.44243 9.8743C7.65766 9.8755 7.88853 9.8591 7.95543 9.83787C8.0594 9.80489 8.19357 9.91554 8.87743 10.5983L9.67779 11.3973L10.537 10.5358L11.3963 9.67439L10.6333 8.87392L9.87038 8.07345L9.90336 7.64327C9.96057 6.89711 9.72253 6.24349 9.20353 5.72181C8.5859 5.1009 7.6633 4.85515 6.8107 5.08449ZM15.9665 5.07383C14.7854 5.36142 14.0025 6.46572 14.1016 7.70458L14.1366 8.14291L11.1384 11.1397L8.14019 14.1365L7.70503 14.1003C6.21304 13.9759 5 15.1093 5 16.6276C5 16.8889 5.02171 16.9517 5.15988 17.0899C5.24783 17.1778 5.37242 17.2497 5.4368 17.2497C5.50774 17.2497 5.72357 17.0881 5.98458 16.8395C6.22146 16.6138 6.47996 16.4046 6.55899 16.3746C7.06093 16.1837 7.60887 16.4918 7.66581 16.9969C7.7088 17.3783 7.65553 17.4883 7.1869 17.9858C6.92551 18.2633 6.75026 18.4957 6.75026 18.5648C6.75026 18.6283 6.82219 18.7522 6.91014 18.8401C7.0483 18.9783 7.11114 19 7.37237 19C8.89072 19 10.0241 17.787 9.89975 16.295L9.86348 15.8598L12.8603 12.8616L15.8571 9.86336L16.2954 9.89842C17.7935 10.0182 19.0021 8.88929 19.0021 7.37028C19.0021 7.10905 18.9804 7.04621 18.8422 6.90805C18.7543 6.8201 18.6297 6.74817 18.5653 6.74817C18.4944 6.74817 18.2785 6.90985 18.0175 7.15844C17.7806 7.38412 17.5221 7.59333 17.4431 7.62336C16.9412 7.81419 16.3932 7.50609 16.3363 7.00097C16.2933 6.61964 16.3466 6.50964 16.8152 6.01213C17.0766 5.73461 17.2518 5.5022 17.2518 5.43312C17.2518 5.36962 17.1799 5.24574 17.092 5.15779C16.9475 5.01333 16.8986 4.99835 16.586 5.00256C16.3957 5.00513 16.1169 5.03718 15.9665 5.07383ZM8.32675 6.60476C8.57272 6.8568 8.77395 7.10905 8.77384 7.16539C8.77362 7.35661 8.49686 8.30246 8.41454 8.39342C8.31253 8.50609 7.27178 8.79111 7.11032 8.75058C6.92195 8.70332 6.14861 7.87796 6.14861 7.72422C6.14861 7.58644 6.32998 6.87796 6.42936 6.62746C6.48942 6.47611 6.63277 6.40485 7.21517 6.23682C7.77307 6.07585 7.82837 6.09412 8.32675 6.60476ZM13.4634 13.4627L12.6026 14.3248L13.3846 15.1054L14.1666 15.8861L14.1122 16.2145C13.9939 16.9303 14.2618 17.7133 14.8139 18.2655C15.7848 19.2364 17.2968 19.2364 18.2676 18.2655C19.2385 17.2947 19.2385 15.7827 18.2676 14.8118C17.7177 14.2619 16.9381 13.9935 16.2333 14.1113L15.9118 14.1651L15.118 13.3829L14.3243 12.6006L13.4634 13.4627ZM17.424 15.7021C17.6622 15.9339 17.8703 16.1764 17.8865 16.241C17.9264 16.4 17.648 17.4171 17.5315 17.5378C17.4391 17.6337 16.5322 17.9061 16.3055 17.9061C16.2309 17.9061 16.0213 17.7407 15.7352 17.4561C15.219 16.9426 15.2156 16.9305 15.395 16.2687C15.583 15.5752 15.5422 15.6164 16.24 15.4149C16.9219 15.2179 16.9279 15.2194 17.424 15.7021Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Configuration</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Import Logs */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.11024 6.07355C3.75202 6.58039 3.61841 8.38333 4.88701 9.08447C5.16624 9.23878 5.29011 9.26834 5.65721 9.26834C6.02593 9.26834 6.14792 9.23896 6.43347 9.08129C7.58214 8.44702 7.59695 6.86425 6.4604 6.19817C6.11661 5.99668 5.47484 5.93743 5.11024 6.07355ZM9.58538 6.65045C9.28978 6.79625 9.11566 7.01411 9.03223 7.34265C8.89262 7.89249 9.10285 8.37502 9.58338 8.60763C9.84899 8.73625 9.91548 8.738 14.5045 8.737L19.1563 8.73594L19.4044 8.59538C20.0277 8.24241 20.1832 7.45983 19.7323 6.94624C19.3695 6.53308 19.6029 6.55052 14.4555 6.55208C10.3603 6.55333 9.75762 6.56552 9.58538 6.65045ZM5.02319 10.5158C4.73964 10.6392 4.32592 11.0327 4.16987 11.3273C4.06656 11.5224 4.03519 11.6907 4.03519 12.0503C4.03519 12.6062 4.16393 12.9005 4.5659 13.2636C4.91638 13.5803 5.16793 13.6752 5.65721 13.6752C6.14649 13.6752 6.39803 13.5803 6.74851 13.2636C7.15048 12.9005 7.27922 12.6062 7.27922 12.0503C7.27922 11.6907 7.24785 11.5224 7.14454 11.3273C6.98424 11.0246 6.5694 10.6351 6.27729 10.5131C6.01156 10.402 5.28098 10.4036 5.02319 10.5158ZM9.72912 11.0155C9.26303 11.1836 8.9863 11.5691 8.9863 12.0503C8.9863 12.5542 9.3174 12.9792 9.8143 13.113C9.97917 13.1574 11.5642 13.1733 14.6439 13.1615L19.2281 13.144L19.4815 12.9762C19.7691 12.7858 20 12.3736 20 12.0503C20 11.727 19.7691 11.3148 19.4815 11.1243L19.2281 10.9566L14.5987 10.9427C10.7826 10.9313 9.92723 10.944 9.72912 11.0155ZM5.18111 14.8826C3.76127 15.4139 3.57953 17.1537 4.86501 17.9093C5.11799 18.0581 5.22436 18.0811 5.65721 18.0811C6.09005 18.0811 6.19642 18.0581 6.4494 17.9093C7.33941 17.3862 7.57383 16.3092 6.97662 15.4875C6.58852 14.9536 5.74808 14.6704 5.18111 14.8826ZM9.5782 15.4944C9.26547 15.6492 9.08942 15.8736 9.01261 16.2155C8.94242 16.528 9.05467 16.9975 9.24909 17.2044C9.58557 17.5626 9.39396 17.5499 14.4649 17.5499C19.6015 17.5499 19.3697 17.5673 19.7323 17.1543C20.1832 16.6407 20.0277 15.8581 19.4044 15.5052L19.1563 15.3646L14.5004 15.3636C9.88936 15.3627 9.84187 15.3639 9.5782 15.4944Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Import Logs</span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Run Recon */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5695 4.08614C12.0082 4.20668 11.2339 4.60488 10.7916 5.00039C9.47811 6.1751 9.09912 8.14766 9.88714 9.7075C10.291 10.5068 10.8788 11.0956 11.6623 11.4855C12.2444 11.7752 12.7615 11.8935 13.4452 11.8933C14.5256 11.893 15.4583 11.4983 16.237 10.7119C17.4743 9.46261 17.7328 7.53278 16.8694 5.99052C16.591 5.49311 15.7564 4.6907 15.2592 4.44237C14.4208 4.02365 13.4557 3.8958 12.5695 4.08614ZM10.2551 12.5954C9.48474 12.7998 8.76991 13.2856 8.35695 13.8852L8.12375 14.2238L9.07998 15.8908L10.0362 17.5577L12.0691 17.559C14.3935 17.5605 14.6741 17.5247 15.4742 17.1238C16.0064 16.8571 19.2972 14.5074 19.5909 14.1844C19.9781 13.7584 19.6708 13.1214 19.0782 13.1214C18.9483 13.1214 18.5699 13.359 17.6893 13.9936C15.8807 15.2969 15.6728 15.4371 15.4082 15.5314C15.2318 15.5943 14.8045 15.6187 13.8446 15.6207C12.6009 15.6232 12.5142 15.6158 12.359 15.4937C12.1479 15.3277 12.1327 14.9976 12.3276 14.8159C12.4514 14.7006 12.5651 14.6902 13.897 14.6727L15.3328 14.6539L15.4837 14.4783C15.6454 14.2902 15.6846 13.9573 15.5701 13.7434C15.4324 13.486 15.1959 13.4341 14.1596 13.4341H13.1789L12.939 13.2174C12.2646 12.6081 11.1662 12.3535 10.2551 12.5954ZM5.37613 14.5999C4.73967 14.9654 4.16964 15.3073 4.10946 15.3598C4.04929 15.4122 4 15.5329 4 15.6279C4 15.8105 6.25066 19.7806 6.43424 19.9218C6.48873 19.9637 6.59106 19.9989 6.66156 20C6.82056 20.0025 9.05708 18.7322 9.20739 18.5541C9.26763 18.4828 9.31686 18.3662 9.31686 18.295C9.31686 18.128 7.10054 14.2608 6.8985 14.0753C6.81424 13.9978 6.69759 13.9347 6.63929 13.935C6.58099 13.9352 6.01259 14.2345 5.37613 14.5999Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Run Recon</span>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Daily Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.65555 3.09912C5.37206 3.22255 5.07582 3.58248 5.02517 3.86506C5.00276 3.98989 4.99361 7.74341 5.00474 12.2062C5.02489 20.2758 5.0258 20.3215 5.17029 20.5149C5.25019 20.622 5.40306 20.7748 5.51008 20.8547C5.70304 20.9988 5.75411 21 11.753 21C17.7519 21 17.803 20.9988 17.9959 20.8547C18.103 20.7748 18.2558 20.622 18.3357 20.5149C18.4794 20.3226 18.4812 20.2541 18.4998 14.4808L18.5186 8.64122L16.0637 8.621L13.6087 8.60078L13.3427 8.39775C12.8882 8.05099 12.8802 7.99815 12.8802 5.36233V3L9.37532 3.00275C6.62086 3.00493 5.82442 3.02557 5.65555 3.09912ZM14.0074 5.2544V7.50881H16.279H18.5506L16.297 5.2544C15.0575 4.01448 14.0354 3 14.0254 3C14.0155 3 14.0074 4.01448 14.0074 5.2544ZM16.2618 14.8356V18.7808H15.1346H14.0074V14.8356V10.8904H15.1346H16.2618V14.8356ZM12.8802 15.9628V18.7808H11.753H10.6258V15.9628V13.1448H11.753H12.8802V15.9628ZM9.49861 17.09V18.7808H8.37141H7.2442V17.09V15.3992H8.37141H9.49861V17.09Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Daily Reports</span>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIS Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.02517 3.86506C5.07582 3.58248 5.37206 3.22255 5.65555 3.09912C5.82442 3.02557 6.62086 3.00493 9.37532 3.00275L12.8802 3V5.36233C12.8802 7.99815 12.8882 8.05099 13.3427 8.39775L13.6087 8.60078L16.0637 8.621L18.5186 8.64122L18.4998 14.4808C18.4812 20.2541 18.4794 20.3226 18.3357 20.5149C18.2558 20.622 18.103 20.7748 17.9959 20.8547C17.803 20.9988 17.7519 21 11.753 21C5.75411 21 5.70304 20.9988 5.51008 20.8547C5.40306 20.7748 5.25019 20.622 5.17029 20.5149C5.0258 20.3215 5.02489 20.2758 5.00474 12.2062C4.99361 7.74341 5.00276 3.98989 5.02517 3.86506ZM14.0074 7.50881V5.2544C14.0074 4.01448 14.0155 3 14.0254 3C14.0354 3 15.0575 4.01448 16.297 5.2544L18.5506 7.50881H16.279H14.0074ZM10.7094 10.2663C10.8933 10.1768 11.1545 10.0808 11.2899 10.0529C11.8417 9.93914 12.3592 10.0082 12.8907 10.2665C13.1727 10.4036 13.2717 10.4763 13.5246 10.7324C14.0246 11.2388 14.2438 11.762 14.2425 12.4455C14.2413 13.0616 14.0762 13.5388 13.7044 14.0011C13.2371 14.5821 12.5597 14.9029 11.8 14.9029C11.0404 14.9029 10.363 14.5821 9.8957 14.0011C9.5239 13.5388 9.3588 13.0616 9.3576 12.4455C9.35626 11.762 9.57551 11.2388 10.0755 10.7324C10.3282 10.4765 10.4276 10.4034 10.7094 10.2663ZM10.9909 15.5045C10.9909 15.462 11.0261 15.4025 11.0691 15.3724C11.133 15.3275 11.2662 15.3175 11.8 15.3175C12.5047 15.3175 12.6092 15.3416 12.6092 15.5045C12.6092 15.547 12.5203 15.8489 12.4116 16.1755L12.214 16.7694L12.3286 17.3561C12.3916 17.6788 12.4534 17.9546 12.466 17.9689C12.4786 17.9832 12.6703 17.4846 12.892 16.861C13.1138 16.2374 13.3291 15.687 13.3704 15.638C13.4441 15.5505 13.4491 15.5497 13.6343 15.5961C13.975 15.6816 14.5887 15.9188 15.0623 16.1482C15.4449 16.3336 15.5675 16.4129 15.7518 16.5944C16.1472 16.9835 16.325 17.4788 16.2972 18.1138C16.2844 18.4077 16.2705 18.4663 16.1777 18.6166C16.1131 18.7212 16.0064 18.8278 15.9005 18.8934L15.7283 19H11.8H7.87183L7.69962 18.8934C7.59373 18.8278 7.48695 18.7212 7.4224 18.6166C7.32962 18.4663 7.31569 18.4077 7.30285 18.1138C7.27513 17.4788 7.45293 16.9835 7.84826 16.5944C8.03265 16.4129 8.15522 16.3336 8.53785 16.1482C9.01135 15.9188 9.62508 15.6816 9.96585 15.5961C10.151 15.5497 10.156 15.5505 10.2297 15.638C10.271 15.687 10.4863 16.2374 10.7081 16.861C10.9298 17.4846 11.1215 17.9832 11.1341 17.9689C11.1467 17.9546 11.2085 17.6788 11.2715 17.3561L11.3861 16.7694L11.1885 16.1755C11.0798 15.8489 10.9909 15.547 10.9909 15.5045Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">MIS Reports</span>
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Audit Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.95373 6.32812L6.9701 8.65625L7.47235 8.69363C8.47873 8.76863 9.28898 9.15619 10.0663 9.93444C10.6365 10.5053 10.8874 10.9088 11.1367 11.6563C11.2599 12.0256 11.2825 12.2204 11.282 12.9062C11.2814 13.6541 11.266 13.7616 11.0892 14.2574C10.8489 14.9307 10.4224 15.5787 9.91991 16.0338C9.23848 16.6511 8.08179 17.1208 7.23573 17.1239L6.93885 17.125V18.5625V20H12.3451H18.8942V13.875V7.75H17.0192H15.1442V5.875V4H10.4694H6.93735L6.95373 6.32812ZM15.6442 5.5625V7.3125H17.3468H18.8618L17.2692 5.65625C16.5823 4.96875 15.6693 4 15.6604 4C15.6515 4 15.6442 4.875 15.6442 5.5625ZM6.06241 9.76725C5.52048 9.952 5.07798 10.2443 4.66535 10.6899C3.18835 12.2853 3.69291 14.9063 5.6576 15.8441C7.87048 16.9003 10.3764 15.3123 10.3764 12.8538C10.3764 11.4121 9.26998 10.014 7.8746 9.69244C7.37398 9.57713 6.51623 9.6125 6.06241 9.76725ZM2.80398 15.8594C2.43879 16.2289 2.10879 16.5927 2.07066 16.6678C1.9521 16.9013 1.98704 17.3351 2.14323 17.5689C2.39904 17.9519 2.92848 18.1081 3.30135 17.9106C3.39416 17.8615 3.77404 17.5149 4.1456 17.1404L5.50807 15.768L5.22011 15.5938C4.90761 15.4063 4.39271 14.8258 4.2641 14.5625C4.20946 14.4506 4.0855 14.5625 2.80398 15.8594Z"
                    fill="#003087"
                  />
                </svg>
              </span>
              <span className="fontSize14 ms-2">Audit Reports</span>
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CBR */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.4644 4.03545C11.4644 3.75501 11.5199 3.68012 12.3252 2.87489C13.2598 1.94023 13.4625 1.844 13.8118 2.16948C14.0888 2.42752 14.0366 2.79261 13.6651 3.19572C13.4524 3.42641 13.385 3.54572 13.4555 3.56652C13.5128 3.58336 13.8637 3.67021 14.2353 3.75958C16.9985 4.42385 19.3151 6.47283 20.402 9.21382C21.1993 11.2246 21.1994 13.7546 20.4021 15.7659C19.2815 18.5926 16.9135 20.6255 13.945 21.3091C13.0932 21.5053 11.1952 21.5398 10.3597 21.3743C7.90447 20.888 5.82746 19.4968 4.44954 17.4156C3.47739 15.9472 3.00145 14.3312 3 12.4937C2.99779 9.58919 4.30631 6.96683 6.61935 5.24028C7.20591 4.80243 8.26278 4.22615 8.82024 4.04018C9.14861 3.93062 9.20804 3.93001 9.40955 4.03423C9.65167 4.15948 9.75605 4.41905 9.6823 4.71283C9.64573 4.85843 9.43911 4.99335 8.70269 5.35265C7.60475 5.88825 6.98939 6.33691 6.20748 7.17177C5.24989 8.19428 4.55978 9.53868 4.27111 10.9439C4.11249 11.7157 4.11249 13.2641 4.27111 14.0359C4.56557 15.4692 5.24745 16.7795 6.25944 17.8569C9.40521 21.2059 14.5902 21.2059 17.736 17.8569C18.7627 16.7639 19.4353 15.4599 19.7337 13.9843C19.9304 13.0119 19.8592 11.2783 19.5852 10.3642C18.7919 7.71834 16.8914 5.77435 14.2984 4.9564C13.9505 4.84662 13.6475 4.75687 13.625 4.75687C13.6025 4.75687 13.6728 4.86239 13.7813 4.9913C14.1587 5.43973 13.9508 6.05205 13.4211 6.05205C13.2378 6.05205 13.0399 5.89625 12.3308 5.19365C11.5186 4.38896 11.4644 4.31651 11.4644 4.03545ZM6.74696 9.89318C7.60392 8.1459 9.36734 6.89293 11.2916 6.66406C12.4041 6.53172 13.5183 6.7257 14.55 7.23127C15.7782 7.83323 16.6692 8.71213 17.2484 9.89318C17.7098 10.8336 17.8209 11.3381 17.8209 12.4899C17.8209 13.6425 17.7088 14.1503 17.2493 15.0802C16.6607 16.2712 15.7561 17.1644 14.55 17.7456C13.6342 18.1869 12.9857 18.3372 11.9977 18.3372C11.0086 18.3372 10.36 18.1867 9.44544 17.7447C8.23452 17.1595 7.32355 16.2611 6.74407 15.0802C6.2858 14.1466 6.17449 13.6401 6.17449 12.4899C6.17449 11.3381 6.28565 10.8336 6.74696 9.89318ZM14.4392 11.9766L14.6928 10.9531H13.6782C13.6333 10.661 13.5465 10.3954 13.4178 10.1562C13.3957 10.1146 13.3723 10.0741 13.3476 10.0346L14.4392 10.0391L14.7 9H11.0428H10.8571H9.97852L9.69995 10.207H11.0428C11.5142 10.207 11.8571 10.3281 12.0714 10.5703C12.1697 10.6815 12.2455 10.8091 12.2987 10.9531H9.95709L9.69995 11.9766H12.3352C12.3102 12.0652 12.277 12.1485 12.2357 12.2266C12.1333 12.4219 11.9821 12.5742 11.7821 12.6836C11.5845 12.7904 11.338 12.8438 11.0428 12.8438H9.80709L9.81067 13.7109L12.3107 17H13.8V16.9297L11.5428 13.9023L11.5857 13.8867C12.0904 13.8138 12.4988 13.668 12.8107 13.4492C13.1226 13.2305 13.3511 12.9505 13.4964 12.6094C13.5796 12.4138 13.639 12.2029 13.6745 11.9766H14.4392Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">CBR</span>
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exception Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.02517 3.86506C5.07582 3.58248 5.37206 3.22255 5.65555 3.09912C5.82442 3.02557 6.62086 3.00493 9.37532 3.00275L12.8802 3V5.36233C12.8802 7.99815 12.8882 8.05099 13.3427 8.39775L13.6087 8.60078L16.0637 8.621L18.5186 8.64122L18.4998 14.4808C18.4812 20.2541 18.4794 20.3226 18.3357 20.5149C18.2558 20.622 18.103 20.7748 17.9959 20.8547C17.803 20.9988 17.7519 21 11.753 21C5.75411 21 5.70304 20.9988 5.51008 20.8547C5.40306 20.7748 5.25019 20.622 5.17029 20.5149C5.0258 20.3215 5.02489 20.2758 5.00474 12.2062C4.99361 7.74341 5.00276 3.98989 5.02517 3.86506ZM14.0074 7.50881V5.2544C14.0074 4.01448 14.0155 3 14.0254 3C14.0354 3 15.0575 4.01448 16.297 5.2544L18.5506 7.50881H16.279H14.0074ZM10.6951 10.5071C10.8635 10.3366 11.0496 10.2235 11.3375 10.1169C11.4294 10.0829 11.6143 10.0664 11.834 10.0728C12.2711 10.0853 12.5984 10.2176 12.8745 10.4934C13.0019 10.6205 13.6705 11.67 14.9666 13.777C16.0144 15.4802 16.9098 16.9546 16.9564 17.0535C17.0215 17.1914 17.0416 17.3172 17.0427 17.593C17.0441 17.9158 17.0309 17.98 16.9135 18.2204C16.7532 18.5488 16.5005 18.8007 16.1771 18.9548L15.9322 19.0714H11.7928H7.65347L7.40856 18.9548C7.08516 18.8007 6.83251 18.5488 6.67213 18.2204C6.55478 17.98 6.54156 17.9158 6.54292 17.593C6.54412 17.3172 6.56421 17.1914 6.62925 17.0535C6.81974 16.6494 10.5322 10.6721 10.6951 10.5071ZM12.3277 12.2176C12.2744 12.116 12.1869 12.0311 12.0822 11.9794C11.7692 11.8244 11.4101 11.9283 11.2578 12.2177C11.1798 12.3662 11.175 12.4517 11.175 13.6994C11.175 15.1637 11.1821 15.2093 11.4375 15.3861C11.5332 15.4523 11.6245 15.4752 11.7928 15.4752C11.9612 15.4752 12.0524 15.4523 12.1482 15.3861C12.4036 15.2093 12.4106 15.1637 12.4106 13.6994C12.4106 12.4512 12.4059 12.3662 12.3277 12.2176ZM12.5577 16.4982C12.4913 16.4053 12.3578 16.2842 12.261 16.2292C12.0687 16.1198 11.723 16.0735 11.536 16.132C11.3353 16.1948 11.148 16.3302 11.0263 16.5005C10.9188 16.6509 10.9073 16.6987 10.9073 16.9931C10.9073 17.2821 10.9202 17.338 11.0209 17.4856C11.0834 17.5773 11.2118 17.7018 11.3062 17.7624C11.456 17.8587 11.518 17.8727 11.7928 17.8727C12.0677 17.8727 12.1296 17.8587 12.2794 17.7624C12.3739 17.7018 12.5023 17.5773 12.5647 17.4856C12.6655 17.338 12.6784 17.2821 12.6784 16.9931C12.6784 16.6977 12.667 16.6512 12.5577 16.4982Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Exception Reports</span>
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* EOD Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.02505 3.86506C5.0757 3.58248 5.37194 3.22255 5.65543 3.09912C5.8243 3.02557 6.62074 3.00493 9.3752 3.00275L12.8801 3V5.36233C12.8801 7.99815 12.8881 8.05099 13.3426 8.39775L13.6086 8.60078L16.0636 8.621L18.5185 8.64122L18.4997 14.4808C18.4811 20.2541 18.4793 20.3226 18.3356 20.5149C18.2557 20.622 18.1028 20.7748 17.9958 20.8547C17.8029 20.9988 17.7518 21 11.7529 21C5.75399 21 5.70292 20.9988 5.50995 20.8547C5.40294 20.7748 5.25006 20.622 5.17017 20.5149C5.02568 20.3215 5.02476 20.2758 5.00461 12.2062C4.99348 7.74341 5.00264 3.98989 5.02505 3.86506ZM14.0073 7.50881V5.2544C14.0073 4.01448 14.0154 3 14.0253 3C14.0353 3 15.0574 4.01448 16.2969 5.2544L18.5505 7.50881H16.2789H14.0073ZM9.27185 11.2804C9.8447 10.9017 10.6252 10.6127 11.2817 10.5361C11.6909 10.4884 11.8588 10.4881 12.262 10.5343C13.8584 10.7171 15.1883 11.6696 15.8749 13.1218C16.6588 14.7799 16.3397 16.7525 15.0716 18.0887C14.1771 19.0313 13.0682 19.5059 11.7743 19.4999C10.5873 19.4945 9.56299 19.0874 8.71452 18.2838C7.77914 17.398 7.29993 16.2892 7.29993 15.0109C7.29993 13.9915 7.61072 13.069 8.22478 12.266C8.45889 11.9598 8.96571 11.4827 9.27185 11.2804ZM12.2604 13.733C12.2604 12.6182 12.2371 12.4905 12.0122 12.3743C11.9418 12.338 11.8404 12.3083 11.7869 12.3084C11.6334 12.3086 11.4304 12.4565 11.3782 12.6061C11.3471 12.6951 11.3304 13.1491 11.3304 13.9023C11.3304 14.8877 11.3408 15.0833 11.3995 15.207C11.4616 15.3378 11.5709 15.4037 12.479 15.8574C13.0346 16.1351 13.5372 16.3623 13.5956 16.3623C13.9503 16.3623 14.1739 15.9136 13.9557 15.6396C13.9117 15.5841 13.5122 15.3587 13.068 15.1385L12.2604 14.7382V13.733Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">EOD Reports</span>
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fraud Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.02517 3.86506C5.07582 3.58248 5.37206 3.22255 5.65555 3.09912C5.82442 3.02557 6.62086 3.00493 9.37532 3.00275L12.8802 3V5.36233C12.8802 7.99815 12.8882 8.05099 13.3427 8.39775L13.6087 8.60078L16.0637 8.621L18.5186 8.64122L18.4998 14.4808C18.4812 20.2541 18.4794 20.3226 18.3357 20.5149C18.2558 20.622 18.103 20.7748 17.9959 20.8547C17.803 20.9988 17.7519 21 11.753 21C5.75411 21 5.70304 20.9988 5.51008 20.8547C5.40306 20.7748 5.25019 20.622 5.17029 20.5149C5.0258 20.3215 5.02489 20.2758 5.00474 12.2062C4.99361 7.74341 5.00276 3.98989 5.02517 3.86506ZM14.0074 7.50881V5.2544C14.0074 4.01448 14.0155 3 14.0254 3C14.0354 3 15.0575 4.01448 16.297 5.2544L18.5506 7.50881H16.279H14.0074ZM7.2874 14.0828C7.65149 12.4063 9.11877 11.0655 10.9321 10.7521C11.4155 10.6686 12.4643 10.7313 12.9483 10.8726C14.5521 11.3408 15.7564 12.5737 16.0841 14.0828C16.2007 14.6195 16.2247 17.1556 16.1158 17.4271C16.0161 17.6756 15.8393 17.8295 15.1499 18.2683L14.9594 18.3895C14.6849 18.5641 14.5187 18.8669 14.5187 19.1922C14.5187 19.4807 14.2848 19.7146 13.9963 19.7146H13.9336H13.8722C13.583 19.7146 13.3486 19.4802 13.3486 19.1909C13.3486 18.9017 13.1141 18.6673 12.8249 18.6673H12.7943H12.7637C12.4745 18.6673 12.24 18.9017 12.24 19.1909C12.24 19.4802 12.0056 19.7146 11.7164 19.7146H11.6858H11.6552C11.366 19.7146 11.1315 19.4802 11.1315 19.1909C11.1315 18.9017 10.8971 18.6673 10.6078 18.6673H10.5772H10.5466C10.2574 18.6673 10.023 18.9017 10.023 19.1909C10.023 19.4802 9.78851 19.7146 9.4993 19.7146H9.4379H9.37522C9.08672 19.7146 8.85284 19.4807 8.85284 19.1922C8.85284 18.8669 8.68663 18.5641 8.41216 18.3895L8.22159 18.2683C7.5322 17.8295 7.35539 17.6756 7.25575 17.4271C7.14686 17.1556 7.17088 14.6195 7.2874 14.0828ZM10.5211 16.2295C10.6343 15.7532 10.3645 15.2644 9.87152 15.0529C9.55627 14.9175 9.31812 14.9177 9.0068 15.0535C8.70867 15.1834 8.52102 15.3677 8.39391 15.6552C8.26987 15.9356 8.27529 16.1404 8.41435 16.4296C8.86657 17.3702 10.2817 17.2358 10.5211 16.2295ZM14.9566 15.6126C14.819 15.3309 14.624 15.1537 14.3197 15.0336C14.0229 14.9164 13.8061 14.9215 13.5 15.0529C13.007 15.2644 12.7372 15.7532 12.8505 16.2295C13.0898 17.2358 14.505 17.3702 14.9572 16.4296C15.1004 16.1317 15.1002 15.9067 14.9566 15.6126ZM12.2373 17.4309C12.2339 17.192 12.0995 16.8316 11.9592 16.6852C11.9 16.6233 11.7769 16.5726 11.6858 16.5726C11.5946 16.5726 11.4716 16.6233 11.4123 16.6852C11.272 16.8316 11.1376 17.192 11.1342 17.4309C11.1327 17.5349 11.2166 17.62 11.3206 17.62H11.6858H12.0509C12.1549 17.62 12.2388 17.5349 12.2373 17.4309Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Fraud Reports</span>
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThirteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen"
              aria-expanded="false"
              aria-controls="collapseThirteen"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      d="M15.0769 10.7692C15.0769 9.58333 14.6554 8.56891 13.8125 7.72596C12.9696 6.88301 11.9551 6.46154 10.7692 6.46154C9.58333 6.46154 8.56891 6.88301 7.72596 7.72596C6.88301 8.56891 6.46154 9.58333 6.46154 10.7692C6.46154 11.9551 6.88301 12.9696 7.72596 13.8125C8.56891 14.6554 9.58333 15.0769 10.7692 15.0769C11.9551 15.0769 12.9696 14.6554 13.8125 13.8125C14.6554 12.9696 15.0769 11.9551 15.0769 10.7692ZM20 18.7692C20 19.1026 19.8782 19.391 19.6346 19.6346C19.391 19.8782 19.1026 20 18.7692 20C18.4231 20 18.1346 19.8782 17.9038 19.6346L14.6058 16.3462C13.4583 17.141 12.1795 17.5385 10.7692 17.5385C9.85256 17.5385 8.97596 17.3606 8.13942 17.0048C7.30288 16.649 6.58173 16.1683 5.97596 15.5625C5.37019 14.9567 4.88942 14.2356 4.53365 13.399C4.17788 12.5625 4 11.6859 4 10.7692C4 9.85256 4.17788 8.97596 4.53365 8.13942C4.88942 7.30288 5.37019 6.58173 5.97596 5.97596C6.58173 5.37019 7.30288 4.88942 8.13942 4.53365C8.97596 4.17788 9.85256 4 10.7692 4C11.6859 4 12.5625 4.17788 13.399 4.53365C14.2356 4.88942 14.9567 5.37019 15.5625 5.97596C16.1683 6.58173 16.649 7.30288 17.0048 8.13942C17.3606 8.97596 17.5385 9.85256 17.5385 10.7692C17.5385 12.1795 17.141 13.4583 16.3462 14.6058L19.6442 17.9038C19.8814 18.141 20 18.4295 20 18.7692Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
              </span>
              <span className="fontSize14 ms-2">Search</span>
            </button>
          </h2>
          <div
            id="collapseThirteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingThirteen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">File Configuration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Field Identification Config
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Matching Rule Config</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">Force Sattlement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="1">
                          <rect
                            x="7"
                            y="11"
                            width="10"
                            height="2"
                            rx="1"
                            fill="black"
                            className="iconColor"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="subMenuRight">
                      Force Sattlement Rule Configuration
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;

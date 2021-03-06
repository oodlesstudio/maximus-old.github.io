import React, { useState } from "react";
import Select from "react-select";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import SearchBoxIcon from "../../images/common/searchBoxIcon.svg";
import ErrorGif from "../../images/common/errorGif.gif";
import SuccessGif from "../../images/common/successGif.gif";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const ConfigTableLeftEntries = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const ConfigLeft = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  const [showFilters, setShowFilters] = useState(false);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  return (
    <div className="configLeft">
      {/* Config Left Top */}
      <div className="configLeftTop">
        <div className="configLeftHead d-flex justify-content-between align-items-center">
          <h5 className="fontWeight-600 fileConfigHead colorBlack">
            File Configuration
          </h5>
          <div className="d-flex align-items-center breadCrumbLeft">
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Home</p>
            </Link>
            <span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M3 4L7 8L3 12"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="breadcrumbIcon"
                />
              </svg>
            </span>
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Configuration</p>
            </Link>
            <span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M3 4L7 8L3 12"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="breadcrumbIcon"
                />
              </svg>
            </span>
            <Link to="/">
              <p className="fontSize12">File Configuration</p>
            </Link>
          </div>
        </div>

        <div className="position-relative">
          <div className="lightBlueBox configTopBlueBox">
            <div className="d-flex justify-content-between align-items-center configLeftFilters">
              <h6 className="fontWeight-600 colorBlack">Filters</h6>
              <button
                type="button"
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                onClick={() => setShowFilters(true)}
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4091 3.06945C12.2754 3.10495 12.0316 3.25242 11.8671 3.39715C11.6267 3.6088 11.5473 3.73564 11.461 4.04611L11.3537 4.43196H7.4076H3.46141L3.26476 4.59744C3.01788 4.80523 2.95593 5.0677 3.08238 5.37037C3.27046 5.82052 3.13628 5.80716 7.47034 5.80716H11.3648L11.4108 6.01999C11.4742 6.31389 11.6601 6.66346 11.8445 6.83543C12.1596 7.12933 12.4162 7.18237 13.5239 7.18237C14.4857 7.18237 14.585 7.17098 14.8521 7.02998C15.2061 6.84302 15.4981 6.44382 15.547 6.07998L15.5835 5.80716H16.0038C16.5239 5.80716 16.7879 5.68097 16.9176 5.37037C17.0378 5.08289 16.9868 4.82481 16.7694 4.62029C16.6345 4.49332 16.513 4.45868 16.1085 4.43196L15.6129 4.39921L15.5329 4.08272C15.4019 3.56473 15.0457 3.20206 14.5263 3.0578C14.2281 2.97496 12.7335 2.98321 12.4091 3.06945ZM14.1911 5.11956V5.80716H13.5035H12.8159V5.11956V4.43196H13.5035H14.1911V5.11956ZM6.77056 7.96657C6.32918 8.10566 5.92605 8.56727 5.83987 9.03235L5.79429 9.27792H4.71462C3.48839 9.27792 3.27052 9.33503 3.09626 9.70214C2.96791 9.97273 2.96791 10.0238 3.09626 10.2944C3.27052 10.6616 3.48826 10.7186 4.71613 10.7186H5.79737L5.84124 10.9781C5.89664 11.3062 6.18105 11.7022 6.50658 11.9045C6.74711 12.0541 6.80991 12.0611 7.90445 12.0611C8.99898 12.0611 9.06178 12.0541 9.30231 11.9045C9.62784 11.7022 9.91225 11.3062 9.96765 10.9781L10.0115 10.7186H13.1883C16.717 10.7186 16.7016 10.7204 16.9037 10.2944C17.0321 10.0238 17.0321 9.97273 16.9037 9.70214C16.7016 9.27616 16.717 9.27792 13.1883 9.27792H10.0115L9.96765 9.0184C9.91225 8.69038 9.62784 8.29439 9.30231 8.09204C9.06708 7.94581 8.98117 7.93454 8.00268 7.92197C7.4264 7.91451 6.87193 7.93461 6.77056 7.96657ZM8.59205 9.99827V10.6859H7.90445H7.21684L7.19785 10.0687C7.18744 9.72919 7.19425 9.41139 7.21304 9.3624C7.2395 9.29351 7.39994 9.27753 7.91964 9.292L8.59205 9.31067V9.99827ZM10.8186 12.9228C10.3808 13.1532 10.0051 13.6678 10.0014 14.042L10 14.1894H6.78791C3.20942 14.1894 3.26771 14.1825 3.08238 14.6262C2.95593 14.9288 3.01788 15.1913 3.26476 15.3991L3.46141 15.5646H6.72216H9.98284L10.0209 15.7988C10.0831 16.1824 10.3647 16.5902 10.7057 16.7907C11.0101 16.9697 11.0322 16.9725 12.0956 16.9725C13.1589 16.9725 13.181 16.9697 13.4854 16.7907C13.8264 16.5902 14.108 16.1824 14.1702 15.7988L14.2083 15.5646H15.3734C16.524 15.5646 16.541 15.5625 16.7352 15.3991C16.9821 15.1913 17.0441 14.9288 16.9176 14.6262C16.7553 14.2375 16.5779 14.1894 15.3076 14.1894C14.2289 14.1894 14.1911 14.1849 14.1911 14.0563C14.1911 13.8489 14.0055 13.455 13.8111 13.2502C13.4417 12.861 13.2537 12.8139 12.0818 12.8168C11.2404 12.8189 10.9735 12.8413 10.8186 12.9228ZM12.8159 14.877V15.5646H12.0956H11.3752V14.877V14.1894H12.0956H12.8159V14.877Z"
                      fill="#003087"
                    />
                  </svg>
                </span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  All Filters
                </span>
              </button>
            </div>
            <div className="hrGreyLine"></div>
            <div className="configSelectBoxTop row">
              <div className="clientNameSelect col">
                <label htmlFor="clientName">
                  Client Name<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="clientName"
                  classNamePrefix="reactSelectBox"
                  placeholder="Shri Vasavamba..."
                />
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="logType">
                  Log Type<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="logType"
                  classNamePrefix="reactSelectBox"
                  placeholder="CBS"
                />
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="channelType">
                  Channel Type<span>*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="channelType"
                  classNamePrefix="reactSelectBox"
                  placeholder="ATM"
                />
              </div>
            </div>

            <div className="text-center btnsBtm">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setResetFilters(!resetFilters)}
              >
                Reset
              </button>
              <button
                type="button"
                className="btnPrimary ms-2"
                onClick={() => setSaveFilters(!saveFilters)}
              >
                Save
              </button>
            </div>
          </div>

          {showFilters ? (
            <div className="lightBlueBox configTopBlueBox absoluteFiltersBox">
              <div className="d-flex justify-content-between align-items-center configLeftFilters">
                <h6 className="fontWeight-600 colorBlack">Filters</h6>
                <button
                  type="button"
                  className="allFiltersBtn"
                  onClick={() => setShowFilters(false)}
                >
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4056 1.86735C15.7571 1.51588 15.7571 0.946033 15.4056 0.594561C15.0542 0.243089 14.4843 0.243089 14.1328 0.594561L15.4056 1.86735ZM0.594378 14.133C0.242906 14.4845 0.242906 15.0543 0.594378 15.4058C0.94585 15.7573 1.5157 15.7573 1.86717 15.4058L0.594378 14.133ZM14.1328 0.594561L0.594378 14.133L1.86717 15.4058L15.4056 1.86735L14.1328 0.594561Z"
                        fill="#003087"
                      />
                      <path
                        d="M0.594368 1.86735C0.242896 1.51588 0.242896 0.946033 0.594368 0.594561C0.94584 0.243089 1.51569 0.243089 1.86716 0.594561L0.594368 1.86735ZM15.4056 14.133C15.7571 14.4845 15.7571 15.0543 15.4056 15.4058C15.0542 15.7573 14.4843 15.7573 14.1328 15.4058L15.4056 14.133ZM1.86716 0.594561L15.4056 14.133L14.1328 15.4058L0.594368 1.86735L1.86716 0.594561Z"
                        fill="#003087"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="hrGreyLine"></div>

              <div className="configSelectBoxTop row">
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Client Name</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="Shri Vasavamba..."
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">Log Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="CBS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Channel Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="ATM"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Mode Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="ACQUIR"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">File Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Plain Text"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">File Extention</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder=".XLS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Vendor</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="A"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">File Prefix</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="PROCESS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Cut Off Time</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="11:59"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Start Line No.</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="0"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">End Line No.</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="420"
                  />
                </div>
              </div>

              <div className="text-center btnsBtm">
                <button
                  type="button"
                  className="btnPrimaryOutline"
                  onClick={() => setResetFilters(!resetFilters)}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btnPrimary ms-2"
                  onClick={() => setSaveFilters(!saveFilters)}
                >
                  Save
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* Reset Filters */}
        {resetFilters && (
          <Modal
            show={resetFilters}
            onHide={() => setResetFilters(!resetFilters)}
            centered
            className="defaultThemeModal saveFiltersModal errorFiltersModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={ErrorGif} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters could not be reset due to internal server error.
              </p>
            </Modal.Body>
          </Modal>
        )}

        {/* Save Filters */}
        {saveFilters && (
          <Modal
            show={saveFilters}
            onHide={() => setSaveFilters(!saveFilters)}
            centered
            className="defaultThemeModal saveFiltersModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Filters
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={SuccessGif} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters Applied Successfully!
              </p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Config Left Bottom */}
      <div className="configLeftBottom pb-3">
        <div className="configBottomHeadingBox">
          <h6 className="fontWeight-600 colorBlack">Configured Format</h6>
        </div>

        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={ConfigTableLeftEntries}
                isSearchable={false}
                placeholder="10 Entries"
                classNamePrefix="reactSelectBox"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <img
                  src={SearchBoxIcon}
                  alt="Search Box Icon"
                  className="form-control-feedback"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button type="button" className="iconButtonBox ms-2">
                  <img src={Pdf} alt="Pdf" />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox ms-2">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table table-striped table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "17.89%" }}>
                    Client Name
                  </th>
                  <th scope="col">Log Type</th>
                  <th scope="col">Channel</th>
                  <th scope="col">File Prefix</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Vendor Name</th>
                  <th scope="col">File Extention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Sri Vasavamba Cooperative Urban Bank Ltd</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="paginationBox d-flex align-items-center justify-content-between my-4">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link previousPagination"
                      to="/"
                      aria-label="Previous"
                    >
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 2.6665L4.66667 7.99984L10 13.3332"
                            stroke="#003087"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span>First</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link paginationBottom" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link nextPagination"
                      to="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 13.3335L11.3333 8.00016L6 2.66683"
                            stroke="#003087"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigLeft;

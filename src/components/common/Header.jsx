import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import {
  OverlayTrigger,
  Tooltip,
  Popover,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";

// Components
import SideBar from "./SideBar";
import { changeThemes } from "../../constants/actions/themeChangeAction";

// Images
import Logo from "../../images/common/logo.svg";
import LogoRight from "../../images/common/logoRight.svg";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Header = () => {
  // Select Menu
  const [selectedOption, setSelectedOption] = useState(null);

  // Left Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Version 6.0.0
    </Tooltip>
  );

  // SideBar Menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Settings Popover
  const popover = (
    <Popover id="popover-basic" className="headerSettingsPopover">
      <Popover.Body>
        <ul>
          <li>
            <button
              className="fontSize14"
              // onClick={() => setSiteConfiguration(!siteConfiguration)}
              onClick={() => {
                setSiteConfiguration(!siteConfiguration);
                this.hidePopover();
              }}
            >
              Site Configuration
            </button>
          </li>
          <li>
            <button
              className="fontSize14"
              onClick={() => setOpenDefaultModal(!openDefaultModal)}
            >
              Default Theme
            </button>
          </li>
          <li>
            <button
              className="fontSize14"
              onClick={() => setOpenLightModal(!openLightModal)}
            >
              Light Theme
            </button>
          </li>
          <li>
            <button
              className="fontSize14"
              style={{ border: "none" }}
              onClick={() => setOpenDarkModal(!openDarkModal)}
            >
              Dark Theme
            </button>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  // Change Theme Modals
  const [siteConfiguration, setSiteConfiguration] = useState(false);
  const [openDefaultModal, setOpenDefaultModal] = useState(false);
  const [openLightModal, setOpenLightModal] = useState(false);
  const [openDarkModal, setOpenDarkModal] = useState(false);

  // Change Theme
  const dispatch = useDispatch();
  const changeThemeDefault = () => {
    dispatch(changeThemes("default"));
  };
  const changeThemeLight = () => {
    dispatch(changeThemes("light"));
  };
  const changeThemeDark = () => {
    dispatch(changeThemes("dark"));
  };

  return (
    <div className="headerBox w-100 d-flex align-items-center">
      {/* Header Left */}
      <div className="headerLeft d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button className="headerHamburger" onClick={handleShow}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19H23V16.2H1V19ZM1 5V7.8H23V5H1ZM1 13.4H23V10.6H1V13.4Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img src={Logo} alt="Logo" />
          </OverlayTrigger>
        </div>
        <p className="fontSize14">
          Session Time: <span className="fontSize14-sb">59:12</span>
        </p>

        <Offcanvas show={show} onHide={handleClose} className="headerSideMenu">
          <Offcanvas.Body>
            <SideBar buttonCollapse={handleClose} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* Header Right */}
      <div className="headerRight d-flex justify-content-end align-items-center">
        <div className="d-flex align-items-center">
          {/* Search */}
          <span className="me-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // className="iconColor"
                d="M21 21L16.7501 16.7425L21 21ZM19.1053 11.0526C19.1053 13.1883 18.2569 15.2365 16.7467 16.7467C15.2365 18.2569 13.1883 19.1053 11.0526 19.1053C8.91694 19.1053 6.86872 18.2569 5.35856 16.7467C3.8484 15.2365 3 13.1883 3 11.0526C3 8.91694 3.8484 6.86872 5.35856 5.35856C6.86872 3.8484 8.91694 3 11.0526 3C13.1883 3 15.2365 3.8484 16.7467 5.35856C18.2569 6.86872 19.1053 8.91694 19.1053 11.0526V11.0526Z"
                stroke="#003087"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          {/* Settings */}
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            rootClose={true}
          >
            <button type="button" className="me-3">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // className="iconColor"
                    d="M21.675 14.6645L20.1398 13.352C20.2125 12.9067 20.25 12.452 20.25 11.9973C20.25 11.5426 20.2125 11.0879 20.1398 10.6426L21.675 9.33009C21.7908 9.23096 21.8736 9.09894 21.9126 8.95157C21.9515 8.8042 21.9447 8.64847 21.893 8.50509L21.8719 8.44415C21.4492 7.26296 20.8164 6.16798 20.0039 5.21211L19.9617 5.16289C19.8631 5.047 19.7318 4.96369 19.5849 4.92394C19.4381 4.8842 19.2826 4.88988 19.139 4.94024L17.2336 5.61758C16.5305 5.04102 15.7453 4.58633 14.8969 4.26758L14.5289 2.27539C14.5011 2.12549 14.4284 1.98758 14.3204 1.88C14.2124 1.77241 14.0742 1.70023 13.9242 1.67305L13.8609 1.66133C12.6398 1.44102 11.3555 1.44102 10.1344 1.66133L10.0711 1.67305C9.92108 1.70023 9.78289 1.77241 9.67488 1.88C9.56687 1.98758 9.49416 2.12549 9.4664 2.27539L9.09608 4.27696C8.25442 4.59577 7.47062 5.05022 6.77577 5.62227L4.85624 4.94024C4.71272 4.88948 4.55716 4.88359 4.41021 4.92336C4.26327 4.96313 4.13191 5.04668 4.03359 5.16289L3.9914 5.21211C3.17987 6.16866 2.54712 7.26345 2.12343 8.44415L2.10234 8.50509C1.99687 8.79806 2.08359 9.12618 2.3203 9.33009L3.87421 10.6567C3.80155 11.0973 3.7664 11.5473 3.7664 11.9949C3.7664 12.4449 3.80155 12.8949 3.87421 13.3332L2.3203 14.6598C2.20451 14.7589 2.12164 14.8909 2.0827 15.0383C2.04377 15.1857 2.05062 15.3414 2.10234 15.4848L2.12343 15.5457C2.54765 16.727 3.17577 17.8168 3.9914 18.7778L4.03359 18.827C4.13215 18.9429 4.26352 19.0262 4.41037 19.0659C4.55723 19.1057 4.71268 19.1 4.85624 19.0496L6.77577 18.3676C7.47421 18.9418 8.25468 19.3965 9.09608 19.7129L9.4664 21.7145C9.49416 21.8644 9.56687 22.0023 9.67488 22.1099C9.78289 22.2175 9.92108 22.2896 10.0711 22.3168L10.1344 22.3285C11.3667 22.55 12.6286 22.55 13.8609 22.3285L13.9242 22.3168C14.0742 22.2896 14.2124 22.2175 14.3204 22.1099C14.4284 22.0023 14.5011 21.8644 14.5289 21.7145L14.8969 19.7223C15.745 19.4044 16.5345 18.9482 17.2336 18.3723L19.139 19.0496C19.2826 19.1004 19.4381 19.1063 19.5851 19.0665C19.732 19.0267 19.8634 18.9432 19.9617 18.827L20.0039 18.7778C20.8195 17.8145 21.4476 16.727 21.8719 15.5457L21.893 15.4848C21.9984 15.1965 21.9117 14.8684 21.675 14.6645ZM18.4758 10.9192C18.5344 11.2731 18.5648 11.6363 18.5648 11.9996C18.5648 12.3629 18.5344 12.7262 18.4758 13.0801L18.3211 14.0199L20.0719 15.5176C19.8064 16.1291 19.4714 16.7079 19.0734 17.2426L16.8984 16.4715L16.1625 17.0762C15.6023 17.5356 14.9789 17.8965 14.3039 18.1496L13.4109 18.4848L12.9914 20.7582C12.3294 20.8332 11.6612 20.8332 10.9992 20.7582L10.5797 18.4801L9.69374 18.1403C9.02577 17.8871 8.40468 17.5262 7.84921 17.0692L7.11327 16.4621L4.92421 17.2403C4.52577 16.7035 4.19296 16.1246 3.92577 15.5153L5.6953 14.0035L5.54296 13.066C5.48671 12.7168 5.45624 12.3559 5.45624 11.9996C5.45624 11.641 5.48437 11.2824 5.54296 10.9332L5.6953 9.99571L3.92577 8.48399C4.19062 7.87227 4.52577 7.29571 4.92421 6.75899L7.11327 7.53712L7.84921 6.93008C8.40468 6.47305 9.02577 6.11211 9.69374 5.85899L10.582 5.52383L11.0016 3.24571C11.6601 3.17071 12.3328 3.17071 12.9937 3.24571L13.4133 5.51915L14.3062 5.8543C14.9789 6.10743 15.6047 6.46837 16.1648 6.92774L16.9008 7.53243L19.0758 6.76133C19.4742 7.29805 19.807 7.87696 20.0742 8.48634L18.3234 9.98399L18.4758 10.9192ZM12 7.64024C9.72186 7.64024 7.87499 9.48712 7.87499 11.7652C7.87499 14.0434 9.72186 15.8903 12 15.8903C14.2781 15.8903 16.125 14.0434 16.125 11.7652C16.125 9.48712 14.2781 7.64024 12 7.64024ZM13.8562 13.6215C13.6128 13.8657 13.3234 14.0593 13.0049 14.1912C12.6863 14.3231 12.3448 14.3908 12 14.3903C11.2992 14.3903 10.6406 14.116 10.1437 13.6215C9.89958 13.378 9.70596 13.0887 9.57403 12.7701C9.4421 12.4516 9.37445 12.1101 9.37499 11.7652C9.37499 11.0645 9.64921 10.4059 10.1437 9.90899C10.6406 9.41212 11.2992 9.14024 12 9.14024C12.7008 9.14024 13.3594 9.41212 13.8562 9.90899C14.1004 10.1525 14.294 10.4418 14.426 10.7604C14.5579 11.0789 14.6255 11.4204 14.625 11.7652C14.625 12.466 14.3508 13.1246 13.8562 13.6215Z"
                    fill="#003087"
                  />
                </svg>
              </span>
            </button>
          </OverlayTrigger>

          {/* Notifications */}
          <button type="button" className="position-relative me-3">
            <span>
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // className="iconColor"
                  d="M17.3051 15.588C16.1013 14.0769 15.2515 13.3077 15.2515 9.14183C15.2515 5.32692 13.3521 3.96779 11.7888 3.30769C11.5811 3.22019 11.3857 3.01923 11.3224 2.80048C11.0482 1.84327 10.2794 1 9.25756 1C8.23568 1 7.46646 1.84375 7.19506 2.80144C7.13177 3.0226 6.93631 3.22019 6.72865 3.30769C5.16349 3.96875 3.26599 5.32308 3.26599 9.14183C3.26365 13.3077 2.41381 14.0769 1.21006 15.588C0.711306 16.2139 1.14818 17.1538 2.02052 17.1538H16.4993C17.3669 17.1538 17.801 16.2111 17.3051 15.588Z"
                  stroke="#003087"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  // className="iconColor"
                  d="M12.2576 17.1543V17.9235C12.2576 18.7396 11.9415 19.5222 11.3789 20.0992C10.8163 20.6763 10.0532 21.0005 9.25757 21.0005C8.46192 21.0005 7.69886 20.6763 7.13625 20.0992C6.57364 19.5222 6.25757 18.7396 6.25757 17.9235V17.1543"
                  stroke="#003087"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="position-absolute top-0 start-100 translate-middle notificationCount">
              10
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>

          <div className="d-flex align-items-center">
            {/* People */}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // className="iconColor"
                  d="M17.96 12.44C18.6602 12.44 19.3317 12.7181 19.8268 13.2132C20.3219 13.7083 20.6 14.3798 20.6 15.08V15.96C20.6 19.429 17.3264 23 11.8 23C6.2736 23 3 19.429 3 15.96V15.08C3 14.3798 3.27814 13.7083 3.77324 13.2132C4.26833 12.7181 4.93983 12.44 5.64 12.44H17.96ZM17.96 14.2H5.64C5.40661 14.2 5.18278 14.2927 5.01775 14.4577C4.85271 14.6228 4.76 14.8466 4.76 15.08V15.96C4.76 18.4909 7.28032 21.24 11.8 21.24C16.3197 21.24 18.84 18.4909 18.84 15.96V15.08C18.84 14.8466 18.7473 14.6228 18.5823 14.4577C18.4172 14.2927 18.1934 14.2 17.96 14.2ZM11.8 1C13.0836 1 14.3147 1.50993 15.2224 2.4176C16.1301 3.32528 16.64 4.55635 16.64 5.84C16.64 7.12365 16.1301 8.35472 15.2224 9.2624C14.3147 10.1701 13.0836 10.68 11.8 10.68C10.5164 10.68 9.28528 10.1701 8.3776 9.2624C7.46993 8.35472 6.96 7.12365 6.96 5.84C6.96 4.55635 7.46993 3.32528 8.3776 2.4176C9.28528 1.50993 10.5164 1 11.8 1ZM11.8 2.76C10.9831 2.76 10.1997 3.0845 9.62211 3.66211C9.0445 4.23972 8.72 5.02313 8.72 5.84C8.72 6.65687 9.0445 7.44028 9.62211 8.01789C10.1997 8.5955 10.9831 8.92 11.8 8.92C12.6169 8.92 13.4003 8.5955 13.9779 8.01789C14.5555 7.44028 14.88 6.65687 14.88 5.84C14.88 5.02313 14.5555 4.23972 13.9779 3.66211C13.4003 3.0845 12.6169 2.76 11.8 2.76Z"
                  fill="#003087"
                />
              </svg>
            </span>

            <div className="headerMyAccount">
              <p className="fontSize14-m colorPrimaryDefault">Sanjay_AD</p>
              <p className="text-uppercase fontSize10-m">Super Admin</p>
            </div>
          </div>
        </div>

        <img src={LogoRight} alt="Logo Right" className="ms-4" />

        {/* Site Configuration Modal */}
        {siteConfiguration && (
          <Modal
            show={siteConfiguration}
            onHide={() => setSiteConfiguration(!siteConfiguration)}
            centered
            className="defaultThemeModal siteConfigurationModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Site Configuration
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="clientNameSelect">
                <label htmlFor="siteConfiguration">Select Startup Page</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="siteConfiguration"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary btnPrimary">Submit</Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Default Theme Modal */}
        {openDefaultModal && (
          <Modal
            show={openDefaultModal}
            onHide={() => setOpenDefaultModal(!openDefaultModal)}
            centered
            className="defaultThemeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Default Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary btnPrimaryOutline">Cancel</Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeDefault();
                  setOpenDefaultModal(!openDefaultModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Light Theme Modal */}
        {openLightModal && (
          <Modal
            show={openLightModal}
            onHide={() => setOpenLightModal(!openLightModal)}
            centered
            className="defaultThemeModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Light Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary btnPrimaryOutline"
                onClick={() => setOpenLightModal(!openLightModal)}
              >
                Cancel
              </Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeLight();
                  setOpenLightModal(!openLightModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Dark Theme Modal */}
        {openDarkModal && (
          <Modal
            show={openDarkModal}
            onHide={() => setOpenDarkModal(!openDarkModal)}
            className="defaultThemeModal"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="fontSize14 letterSpacing-2 text-center">
                Are you sure to change the your theme to Dark Theme?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary btnPrimaryOutline"
                onClick={() => setOpenDarkModal(!openDarkModal)}
              >
                Cancel
              </Button>
              <Button
                variant="primary btnPrimary"
                onClick={() => {
                  changeThemeDark();
                  setOpenDarkModal(!openDarkModal);
                }}
              >
                Apply Theme
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./MainPage.css";
import CashAppLogo from "../../Images/logo.svg";
import EyeButton from "../../Images/eyeButton.svg";
import introCube from "../../Images/intro_cube.png";
import introStairs from "../../Images/intro_stairs.png";
import introPillar from "../../Images/intro_pillar.png";
import introCubes from "../../Images/intro_cubes.png";
import appleIcon from "../../Images/apple_icon.svg";
import googlePlayIcon from "../../Images/googlePlay_icon.svg";
import frame from "../../Images/frame.svg";
import twitterIcon from "../../Images/twitter_icon.svg";
import instaIcon from "../../Images/insta_icon.svg";
import downIcon from "../../Images/down_icon.svg";
import background from "../../Images/background.svg";
import useWindowResize from "../Hooks/useWindowResize";

const MainPage = () => {
  const helperArray = [
    "Sign In",
    "Legal",
    "Licenses",
    "Security",
    "Careers",
    "Press",
    "Support",
    "Status",
    "Codeblog",
  ];

  const [windowWidth, windowHeight] = useWindowResize();

  return (
    <section
      id="main_page"
      className="main_page"
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        >
          <img src={background} width="100%" height="100%"></img>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            height: "fit-content",
            width: "100%",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={CashAppLogo}
            style={{ padding: "20px", paddingLeft: "40px" }}
          ></img>
          {windowWidth > 767 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: "50%",
                height: "fit-content",
                fontSize: "12px",
                fontWeight: "800",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                zIndex: 3,
                minWidth: "550px",
              }}
            >
              {helperArray?.map((each, index) => (
                <p key={index} style={{ color: "white", cursor: "pointer" }}>
                  {each}
                </p>
              ))}
            </div>
          )}
          <img src={EyeButton} style={{ paddingRight: "40px" }}></img>
        </div>
        <div style={{ position: "absolute", left: "17%", top: "10%" }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/6c61/a7be/f4536bf35ee6fc5748edc2ca835f1604?Expires=1694390400&Signature=GwWPgS2OveV4t2L1LEO~onKG5ri~AwV732QMsfnSYQCrHQrzBOafd8mQb1AV75saEuNKlNSO7-Wk7VKs9tHDrD3AFUyXJ2wByGHAJh6Oue0GY6hKHeGH8iA8Ar2nV-ZDYuOpakJzfVX6BHBPGdlmQ28CjHVyCpISDegng3dEk-cNf69AzrQzu3ry~BE51me83QCaEq-ChVliZNMRBZgxeCtbxzOzk0nnPZv6p9G2pU~iIEHUvHqVIzWZgYKXnCVhVTZ7I~-iTkM8ktL66M31MOtN7WENEiFw1EmN7d5Mrc9jvY-Ni7Xh1c5kDcFSL~xb-AMUVIiST7RtoiwJsg50Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="75px"
            height="75px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            right: windowWidth > 767 ? "15%" : "-10%",
            top: "8%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/6d5e/17ae/5ee69c97f9ba57a878c43da699dda069?Expires=1694390400&Signature=LJYUbqW7FDIYksfigT80c7MYcOXFyMqQ033cMP7nraeXwiHKbnhxOWpQKhxnwpXM2x8RpR8Y2Ws1JLOweVPzu3K26N0z9Oej0gPgWqm7iG64Wy0HwU0eKBaac2CY5hiNvqPxbJT4QnK4Se9xEy4~vn~YnD~TQElgJlJbJu7jJyPXKPzyn9tI~EPmrxU5slaiPu6zFSxa18abk~wsElnhNB3pG32rW9yauQIRlr7TuM4KjA90PxK2ECL~G2u3qHBRPkWK73wi-5QpTyu-9ULNhrJBzN-VgQLuw2lsOT8JmyLLEANuSDTSjeXPA~z6Qdo7ZhdeFE1apjnsIH7r7X5CdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="200px"
            height="260px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            left: windowWidth > 767 ? "15%" : "-10%",
            bottom: "8%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/dc74/e512/17aa9b0da75a6fa251f15bdfbdc53e01?Expires=1694390400&Signature=GV-DOw0zXfR~1JZEuqsbvB6rJCHXZ5MPRnBXa9m~arPrICiOXBiRThyTkotE0jN7biMx9YD8XF5rY49Uaw3WNq-0fBPcroQRb~eKCTgJ6l3AjMBmQ~xmsy9bZ0hZ9zuTFoegx3fLcHiS~IegUa~qDRNfW2k~UOg5jhNDzhLEzO7hUl1n52nX1zS-FmzirnKqKtzv9HS3GqDWCnB5czR5ir1S6y5uIEieXIs2R2YvifkF~jA88S5ykv0UpRYVN~Gkz9Skk7UfXPCoZACfC~c3m9WssAJ1c2wU6KunCwr0vfokGb8JnKBASx1zA-3tnocC80NQ6Wq9yNmGsQiAONidqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="188px"
            height="180px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            right: windowWidth > 767 ? "25%" : "-15%",
            bottom: "-15%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/71a8/40d9/b96ead2b95903e65967882722b31191c?Expires=1694390400&Signature=CQVD4P1i9GLKpw4LVBFk8JVzmwqcXUN~OBxUnKIEYNEZGYnJyxtbuUbD4vfu4ce3sS6qQ5GvVkS4ngtYKTNjUCMY6jo76UTCWGEdx6cQwwPtDptIS7xLswCMRAEfG8-zknRcvWZwFKaekabLXhEcjGyeof9ZCkajERpaRp43hIeNDsDTXpOwWl7fZ265zJaURwhOlUgpmIWTC~HBOgwVATYwjPjoW7y9YqD9bFxAaXhGwoqqfa5i1PMv8iTv9eF9v65uhxpNXGFEn~HlAfXeLlafKNVtf3Joe17kSzwGkG-Wdw-X5rRr~yXK-e2U~3~SUbKHaV9FgifrSrN8565dvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="280px"
            height="330px"
          ></img>
        </div>
        <div
          className="intro_phone"
          style={{ position: "absolute", zIndex: 2 }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/8d46/5b02/4c6355058dc37af6efb4a5847d5e81cc?Expires=1694390400&Signature=SjL9k4DC3KNHFMUrdO2l4iQUXMg0R5QJxTRaF6UP7hh6bE1PWif6zNdlLZ7IG1Ql64uDymKK~yrHyW8uAncZyRUXg~wxZOiiHcAUH7K8ossZ6fVw27CZBDWc7aIWByokrYDJqW0W-vNjR-UrDcGKnkAhVKE2lsrfVWsez5kjPaKAn0uTgujy9irC4LaopxfiwrLZCX7UDNZKOgOA0MCxAptlr5vnOYbOguoylBlpH9kfWFSHi3hNZEH4i8RUzzatO-OMJBCfluNWMVr62bmPLSqFWy76fKx2cl7lnxQbPxgJfuRNMQGNXbqqTUp1t4PCw7r3LubyFG-xl2s66gifxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width={`${windowWidth > 767 ? "370px" : "230px"}`}
            height={`${windowWidth > 767 ? "453px" : "330px"}`}
          ></img>
        </div>
        <div style={{ position: "absolute", left: "50%", bottom: "3%" }}>
          <img scr={downIcon} width="18px" height="30px"></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: `${windowWidth > 767 ? "193px" : "130px"}`,
              fontFamily: "sans-serif",
              fontWeight: "800",
              color: "white",
              letterSpacing: "0.5px",
              margin: "0px",
              lineHeight: "166px",
              zIndex: 1,
            }}
          >
            CASH
          </p>
          <p
            style={{
              fontSize: `${windowWidth > 767 ? "193px" : "130px"}`,
              fontFamily: "sans-serif",
              fontWeight: "800",
              color: "white",
              letterSpacing: "0.5px",
              margin: "0px",
              lineHeight: "166px",
              zIndex: 3,
            }}
          >
            APP
          </p>
        </div>
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              marginBottom: "10px",
              height: "65px",
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "3%",
              }}
            >
              <div
                style={{
                  border: "1px solid #FFF",
                  width: "170px",
                  height: "50px",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                }}
              >
                <img src={appleIcon}></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    fontFamily: "sans-serif",
                    color: "white",
                    marginLeft: "20px",
                  }}
                >
                  APP STORE
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #FFF",
                  width: "170px",
                  height: "50px",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                  marginLeft: "20px",
                }}
              >
                <img src={googlePlayIcon}></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    fontFamily: "sans-serif",
                    color: "white",
                    marginLeft: "20px",
                  }}
                >
                  GOOGLE PLAY
                </p>
              </div>
            </div>
            <div style={{ display: "flex", marginRight: "3%" }}>
              <div style={{ marginRight: "25px" }}>
                <p
                  style={{
                    width: "363px",
                    color: "#B6B6B6",
                    fontSize: "10px",
                    lineHeight: "13px",
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Brokerage services by Cash App Investing LLC, member FINRA /
                  SIPC. See our BrokerCheck. Investing involves risk; you may
                  lose money. Bitcoin trading offered by Cash App. Cash App
                  Investing does not trade bitcoin and Cash App is not a member
                  of FINRA or SIPC. Cash App facilitates banking services
                  through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </p>
              </div>
              <div
                style={{
                  width: "126px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={frame}></img>
                <img src={twitterIcon}></img>
                <img src={instaIcon}></img>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainPage;

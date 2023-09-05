import React from "react";
import "./InvestingPage.css";
import appleIcon from "../../Images/apple_icon.svg";
import googlePlayIcon from "../../Images/googlePlay_icon.svg";
import frame from "../../Images/frame.svg";
import twitterIcon from "../../Images/twitter_icon.svg";
import instaIcon from "../../Images/insta_icon.svg";
import downIcon from "../../Images/down_icon.svg";
import background from "../../Images/background.svg";
import bottomHorizontal from "../../Images/bottom_horizontal.svg";
import bottomVertical from "../../Images/bottom_vertical.svg";
import useWindowResize from "../Hooks/useWindowResize";

const InvestingPage = () => {
  const [windowWidth] = useWindowResize();

  return (
    <section
      id="investing_page"
      className="investing_page"
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "100%",
          width: "100%",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <img src={background} width="100%" height="100%"></img>
        </div>
        <div
          style={{
            height: windowWidth > 767 ? "33%" : "15%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              fontWeight: "1000",
              color: "white",
              lineHeight: "40px",
              fontFamily: "monospace",
              marginBottom: windowWidth < 767 && "0px",
            }}
          >
            Investing
          </p>
        </div>
        <div
          style={{
            height: windowWidth > 767 ? "25%" : "fit-content",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "40px",
            marginRight: "40px",
            flexDirection: windowWidth < 767 && "column",
            zIndex: 4,
          }}
        >
          <div
            style={{
              width: windowWidth > 767 ? "33%" : "100%",
              height: "100%",
            }}
          >
            <div style={{ padding: windowWidth > 767 ? "10%" : "0" }}>
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "monospace",
                  fontWeight: "800",
                  color: "#000",
                  textAlign: windowWidth > 767 ? "left" : "center",
                }}
              >
                Stocks
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "monospace",
                  fontWeight: "400",
                  color: "#000",
                  textAlign: windowWidth > 767 ? "left" : "center",
                }}
              >
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
          </div>
          <div
            style={{
              width: windowWidth > 767 ? "33%" : "100%",
              height: "100%",
            }}
          >
            <div style={{ padding: windowWidth > 767 ? "10%" : "0" }}>
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "monospace",
                  fontWeight: "800",
                  color: "#000",
                  textAlign: windowWidth > 767 ? "left" : "center",
                }}
              >
                Bitcoin
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "monospace",
                  fontWeight: "400",
                  color: "#000",
                  textAlign: windowWidth > 767 ? "left" : "center",
                }}
              >
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "40%",
            backgroundColor: "#FFFFFF",
          }}
        >
          <img src={bottomHorizontal} width="100%" height="100%"></img>
          <img src={bottomVertical} width="100%" height="100%"></img>
        </div>
        {windowWidth > 767 && (
          <div
            className="intro_phone"
            style={{ position: "absolute", zIndex: 2 }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/08d4/b3cd/1fa527408ac9658707d15ce241c0c974?Expires=1694995200&Signature=F1s5FbScjdK1N0eqNor9gA0LgXKgMjoI1ZWdRW7zXvttu1XC9grZ~RU2JfZBTUezkGuddrxAEey3RyGBPRQwVRa1otk-mTnQ6dHUWVpOVFsSeKD3YwoNUL-11CYU1taB-NkXR~nBvhm53dwZ-EfTnfvkJzmuLJJFQyQMB0WwsDzXOtRxq3VLlnlwk~fj~eCPkXadkYk5txjkEaBUche5RPZB6BGDjg6gVno7tLMEM1eVgY7RDq3kqNC6MAa-mTvFiXcY792VYpor~8WSuIhV3ubh37MLMjYJroVRLBpaRUp2N0pBh51u64iu4Ub-VRCNIsgFLe307xXaxwTyaFU92Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="160px"
              height="344px"
            ></img>
            <img
              src="https://s3-alpha-sig.figma.com/img/cf75/1e4d/88033d663155b0e37ac2ddb556ab841e?Expires=1694995200&Signature=Cvw03GEX91X3EEdVzuDC-NGFixfNtST89qDbTv7dQw49lYYGmTNEoOUjW1DY76CqwNqhWuY-ILagSfvs~i0hDPeclS-yuI5pqDXiAf5BQV-5apvu5wKXzuDBrp5qoTnp6mQPoP45Zd1M6HSi7kh2psXUPvf~06eIDg2eVrEX1DXS~ZA--0cq~-2wQwJNGAMBTY1R-EH21I3B~TFmR-EYCy~X6Ez0717HUHmHPjhREMJgiWln-Vio9CxqYbK~jLXG1Ajswwjw8ouFXzCC6nqEx~5JY07h~yio~iWzdJSa-Qd4iIpaD~j5VtGwo5aVtmVNceoDeDA~58N7SeztuzxZFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="160px"
              height="344px"
              style={{ marginLeft: windowWidth > 767 ? "100px" : "0px" }}
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: windowWidth > 767 ? "5%" : "8%",
            left: windowWidth > 767 ? "-15%" : "-180%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9eb9/789b/227a511f65410d3f48a4d4dc38ae37fc?Expires=1694995200&Signature=T-F1Gf2UMo52889PL0a35tbl7cmdwp3LpfvAFXRXG82XTXRPjrm4UraZ1KuEF0cqAKxtRKcHGm1v4r5JYd6~oo6xkLTjCUMj45ZIHstPZCM2h-VaBQwR3yrfnV3plefzYFgDIXQKvC92Xzw6pjKdmk-6kwn1RrmsOoqQ4tZYkYij73ZDWSVqbxeWETohrlymCcU4719Nhm84Qi~7X~T0IW1ZUqhv6JAx8vwn22Y1SO9fwvIANIxjZwyfRaLjW4tq6expFotTZenIz91-U8rgXqXXoa2JB8DRVpPRqtb4g3DbsX91c-XWsxbaPdPFdVxO72IrOqcvUKfaO7wpkB1MpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="1024px"
            height="283px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: windowWidth > 767 ? "30%" : "16%",
            right: windowWidth > 767 ? "-32%" : "-100%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/72ae/d627/d02cf3d08c0613fa482a8323a7ff0a08?Expires=1694995200&Signature=Q9t0LNdTIQP6BTH-idGcuqcexmUFsf~BstQ3OHuT8t1jDRNstZnhRCS5ph0iHuWZwThz-gAnAafVtYO78GAKBdlDR1SycwUuaW~xeDu1XyfiK2T3DihjHGmHqkeDFJh2gjLBNnDEFy-o9qitMTTdlgi8P1vuoHL5CRUksfL6ROYvdJQSpHDpl2tDFG70zSOyqf4lSYVLLaQzwQ7NzuWPtjxhM1U23UftTCiYCDubYMorCYnam~~MdPu4o9DtiqQ2jGN4wQoFhyJKf29WDWAhjXmJrce0gikyoCVsLyHkapmbqYOw5ouAgXFRPIr0MS7yYumxEauf~4G1hMchdkCS0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="850px"
            height="411px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: windowWidth > 767 ? "5%" : "1%",
            right: windowWidth > 767 ? "-10%" : "-60%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0262/3983/684629ef5abddd11156d6cc5bd384d45?Expires=1694995200&Signature=ci0gLmxH--VeDiekBt2YHTChdnG0v4diOuZIuU57mCzcrAUIGBBIC3vJ~suQKTB8YChF6e3-gGLOA5tT4gG339z7u4kQ4LYuv-7rwaglb-Xn8d33fHjBFbCgYjKmLcXWMVpaN1oolEtYG~kOqRTCkWNFc~qGxydqwKxlue4uxiUCKmchCq9uVVMufA0punfaoRHhi49KPMFgR2~oAKsFwewb0bc83cVMAjd4rRFhMgBo4Fd-NYq8RiwNEu1KZPAyNv1eSPjm4jF7RVh2ZW-MHAOYyp6vJ~UaMcmVK09KrsiOn43RLrydgmT1foUfC7wsNEuKvmor-s6fnAfCdqcmNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="656px"
            height="387px"
          ></img>
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
                  border: "1px solid #000",
                  width: "170px",
                  height: "50px",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <img src={appleIcon}></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    fontFamily: "sans-serif",
                    color: "#000",
                    marginLeft: "20px",
                  }}
                >
                  APP STORE
                </p>
              </div>
              <div
                style={{
                  border: "1px solid #000",
                  width: "170px",
                  height: "50px",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                  marginLeft: "20px",
                }}
              >
                <img src={googlePlayIcon}></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    fontFamily: "sans-serif",
                    color: "#000",
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

export default InvestingPage;

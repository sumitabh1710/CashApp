import React from "react";
import "./CashCardPage.css";
import useWindowResize from "../Hooks/useWindowResize";

const CashCardPage = () => {
  const [windowWidth] = useWindowResize();

  return (
    <section
      id="cashCard_page"
      className="cashCard_page"
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: windowWidth > 767 ? "center" : "start",
        }}
      >
        <div
          style={{
            height: "30%",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "100%",
              width: windowWidth > 767 ? "50%" : "100%",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: windowWidth > 767 ? "flex-start" : "center",
                marginLeft: windowWidth > 767 ? "30%" : "5%",
                marginRight: windowWidth > 767 ? "10%" : "5%",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "1000",
                  fontFamily: "sans-serif",
                  color: "#00D54B",
                  textAlign: windowWidth > 767 ? "left" : "center",
                  width: windowWidth > 767 ? "50%" : "100%",
                  marginBottom: "0",
                }}
              >
                Cash Card & Boost
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "monospace",
                  color: "white",
                  textAlign: windowWidth > 767 ? "left" : "center",
                }}
              >
                The Cash Card is a free, customizable debit card that lets you
                pay online and in stores. It’s the only way to get
                Boosts—instant discounts that work at places where you want to
                spend.
              </p>
            </div>
          </div>
        </div>
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              left: "-10%",
              bottom: "-10%",
              zIndex: 4,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/bafe/c6fa/470105b098b1a9636193b548ecde6029?Expires=1694995200&Signature=lXmjvJHBjuc~ak~ICBwdoSh3pFb9KMf41JTWnQ2pxL~CxTMDDFNZAJTW0yTohU~WvnUDRU3K~H8w9mXOoqKaF9XFMGt2C3NhBN8j~g7~lYeO1tzjMVWxpmk312UQJfH67kfKdFfSB3V0JUpVWUlhLDtiBz~xKa12FlzVEEYNCzxX~uyI3uOxYQEaIjIa3FxIjzqthLyhN~iVKAitcoM8yQDyY-bjAP~rX0lnJ30GbklT~Rd0YINIrvCZMbf7qfoylmrit~oKo8-Jp2skCRczkrrdKczMpxeXXqkhh2lirqYTGxf~9U4b4s6HreaqR2h4FKVj3E4t0MWn16txlggM9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="550px"
              height="726px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            right: windowWidth > 767 ? "-7%" : "-30%",
            bottom: windowWidth > 767 ? "-12%" : "-35%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/718b/9845/5761bfadff5793991f4535a664e53f4a?Expires=1694995200&Signature=YWZ5Gr~x9rvZeG7vPg6r0UjZCfNy3C6A344G0sW396AvgQSTumoihvLDDU40l4w4zpFXAHEnb5PgA4hW3S-1oSwhkU7XpwCJ1mAYegtHu3bpIpGRYS7-W57ty-2yv3ut~bFpsROZizuEL7QgJSXwVP2I6gGZyvP1q565Lh3MOE9V-sxGBoAzYRDkWbK53P5zOql2T4NE5zOVO9gDct~uc4N8KJZy7BZ1v9QzJXZfPUCyz54Gjjhnx0TlXUNJMe7yShURpGdTTTBVO0D5yDVGGSk~4jI3dQpt5gFyblDdlaawkobU0vWlAeV-amH1Y~n3jMG-d8DZgbREvoY99MgYaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="1050px"
            height="898px"
          ></img>
          <div style={{ position: "absolute", top: "17%", left: "12%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/6cab/fb82/fc215a96bed39bca1ec99d22b0fd26af?Expires=1694995200&Signature=SYE6eAWqaTIbspUQsoKOkm5iyIc4zqox4crW~mGdRfNPNYbwiTHyH7ZYIYO7iJo4DE9BnprZWXENscrTqZdrS4K0CorWlL8lUPsw01YxRpczbrMy~F29ANtVnkH9kqG67pZx3qkp2ndQdn7wOlrMSx6TiNiU4G-jU51RRc20gZ~4h7yT3gp6FdKVUVQ877DGrz5tye5RjO-ka9rtPkMysexZPO7nbPdQoIXSb-kRwdj7dALfBgeSVJ33-sBjHH~cu0~jOfqVbOb6twlxji-c1aYwbMig5mmzBwbsL4aBdLEY0HbJ1yMI6UCJjV9SNMpByngyqHy3ktUNCLKrgVYLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="250px"
              height="510px"
            ></img>
          </div>
          <div style={{ position: "absolute", top: "10%", left: "62%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/428e/06cd/822b16070e4f48f609bfe235a720b9e5?Expires=1694995200&Signature=nR5G0hVuo85O8f0gNff-eOUgfCGlPlSNwT41zkShmG1f4Wn6ZeGnYkgyvISPnTYVVh~FA0NhczeFjIvVW3ocFZlUZvB1dsDOLsfh7R9mvi-yod9WrtOIxJSH2dxxfH51uhWwbAF3BTXhdZ~AUmtNOoXluOufRYyiP81IdqK3WZDO1zhyefnyLz8p4YJLmh3D-MkVhHX7KjEE38d6Q87tXSJa6p4SmjERnnYedam1kaF~Wyv0R8cnYZftqKySaTOHoxAYonI~CbonTHf0QK-4TaOAj5uyKr4y-vtSxIt20wzL8LNfyCRSLss9wMKY5O7ftNQJ-jnXp5jbFNWroXwKyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="75px"
              height="94px"
            ></img>
          </div>
          <div style={{ position: "absolute", top: "23%", left: "51%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/9850/dc9f/7d0344e70380c3670c00beddb22d87b3?Expires=1694995200&Signature=OaViU~5Kk0Kh5~P28ZcECL2SZSrVotp0Hs50KKLtMDu6p7NthZvdjunB8n8KvIQBQIe9dJaxT0bNgSjnC1M0pJfXVe5iWr-Yi~Wv4gJxGTQWSVc7uVzEf9ct0aMyhvMx7WOUEbMnhYnJ8Lpnebx9G2jIoANN-0jIgeuD~nRuzo106mMXYgM5sLLVJrt1GtUEupdD62S~xwGWC0ePcMGKx0ZB18SX~NXnWh5enCegvNcG-VrP1iEOcNqwR1DvkYOhxdS4QF2XGttKn7zM~CJfzE-50CLtT0sVbDLNXBJxYsl~Ca2-9MD8ifUvWFJ8X4Bhv3jxdpPBTnWeBiIlVQwhMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="80px"
              height="135px"
            ></img>
          </div>
          <div style={{ position: "absolute", top: "44%", left: "43%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/da7a/c2ad/d196098a3fb0d58ae39022742b0812cb?Expires=1694995200&Signature=H3OtaTsRA5a7FX1OYBxWjzmzVypZtEKaqyYHNkwxiFh4SO-2w7suX23ISFL7lwpGWDrN1l0tyKYr5eKM5h6snS5wC9CR7xQ~0ZVvEQKFCgK50MfNlQ19jiljU~oMWPQWvgyorkiEKk0WBtCVWLA0qQG2wK0qmtKBzSLaOWdxBkVowDXYTmwpIA9ebckrivNgRWFslsOQR2N0~E~CBo~Ht0aJLUprwS5NImXz6PTwF1NlJxBnPUAaDVALP41LgdvZA0b8Ru8J2u~YXDzigc2i~6QWs522ijokdQYzWucKFucdWD0FN0bGPZAqcIB8LDsHaiDWXIOheDuUO-5WiaZXYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="70px"
              height="93px"
            ></img>
          </div>
          <div style={{ position: "absolute", top: "60%", left: "51%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/6a3a/9108/88c7cf4768b14b14011d14e3568c5864?Expires=1694995200&Signature=Md6Jfix6CpXUeMv8dX~3FKSM5p3xwq4q~3BYyjIKMYuBWo32zb~bWFy24w1gNy3IwIIAWmjjVadvooISbKKMvMHi-vAKm333RVbpjvyxX0ThwbomctLVV5Nwo586NSETAPWOV1dkHgO3-BBJcZuzzp8h0gdsDrcj6tWmV~UPSP7OsQuxCYAFuRxBKfwX2mUGPoobp8G1rNT1CbshuIxxKFiJQTavcxzrcl8dZ0JzMngQNa1UqyEiVT97ZWqOy59AXOFEElj8y-FN-QYOcCGzqFLyjIsdE1RIZMlXk4U6kawg9r5o8Octuky9eRVfxnfSWrQofbXun8Fur70ICzr6Uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="80px"
              height="101px"
            ></img>
          </div>
          <div style={{ position: "absolute", top: "46%", left: "77%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/d467/9adc/960778561b4999a41076ad1e78a4187d?Expires=1694995200&Signature=MA8tMtMvg0P61fLrTqIbGmGJBol4WNdHe6Ivg-sFQVYb9TKckh~EEhljhyi8eaxIztC0TKfqCwVgakuqftJ70d1GYH4kiNfoiZele-AdAj4SXQt3vc-fWzVBYIFYVy2qOFkh430QDgG8tq-WPHqAhapjRrMe~UMFX3XXUD~LfsTd~WUJfiLOGZcBc75J4394o86AkU~~mk1iPqfcIaA8BaKcei0VzV7WAkCnKmND0M1aIXO1yOKTkUlt9XgQFZEBSKDIZWAsjf4NuHXvNqF--IDCTh~bGFNLJjoxXeWUAz3LUjyewdJ~y43ivqxDwyYyUpBl9OQE44hX10teDPQA6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="100px"
              height="80px"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashCardPage;

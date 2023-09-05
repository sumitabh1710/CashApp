import React from "react";
import "./PaymentPage.css";
import useWindowResize from "../Hooks/useWindowResize";

const PaymentPage = () => {
  const [windowWidth] = useWindowResize();

  return (
    <section
      id="payment_page"
      className="payment_page"
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
          className="intro_phone"
          style={{
            position: "absolute",
            marginTop: windowWidth < 767 && "50px",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/be97/0fdd/32322a6ade432032201077b17684b435?Expires=1694390400&Signature=Cm3-MzKZj92l8V4xBeMlQDOtFnSVAxtr3XVQluWStRLJv52IUVIohlrBSV~V2ZlpzWvbzlZ4oIh5DJ0dskhzLe3L7vSUJTTnJicjzITtdd2S19B1hZwml5eGXH96GPZmjRUObVqRHTsVdPJmB98uF4BMlzM5Dj~XdLpHP9n1obuMsfiDNyEpxOizhzKe-wib4wJoHSsqB6Cj1vlPNnadx0d5vVrTRyAE41aGWL1oY5WVu4WW1-Ig-fzIqsBLk9IiNUXoGU4Jm8UhPjtKz2SiVcty9ukbnV-WSsMruENTh9aVx0hzeJSvW0WyoYx~U0NZc1yhz1~3I1Gt48sFgRyXQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="750px"
            height="432px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            left: "-40%",
            zIndex: 2,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0fbf/06f0/6152250622c4392ac1ad2fe5f13e7f4d?Expires=1694390400&Signature=BWfTzJTkGLcOSEuetH5XR9lD3WxLykz1dYlF7LmKITzG~h-bi~9EZ9T-zOaPmbFGM3zXRHNYZTUeN9WDYMsQl9-z0Ep1xI74bQ5JWZiTIrC4~pOtgJJOQANxRaiUbJnPaz21kwacr-TxYuSN9dJ2ZgugV5Dr2TVWVnQwf-~rNGZv178l4DzrsnhSsh69BB1OfE085vJjobnSZFJa0PVTWkagWO1AwUBry1vZm7jRjyXBEGhyKfZcgybYv2Qf893Zn0U5EV4j9RfViwHjQ-MLc~qXyArcspzHewkg4py~zUo9-nJuublG0~3EaeQCHr4UxZ4F5q5S5rAsolQltFQ7tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="810px"
            height="498px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "48%",
            zIndex: 0,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0fbf/06f0/6152250622c4392ac1ad2fe5f13e7f4d?Expires=1694390400&Signature=BWfTzJTkGLcOSEuetH5XR9lD3WxLykz1dYlF7LmKITzG~h-bi~9EZ9T-zOaPmbFGM3zXRHNYZTUeN9WDYMsQl9-z0Ep1xI74bQ5JWZiTIrC4~pOtgJJOQANxRaiUbJnPaz21kwacr-TxYuSN9dJ2ZgugV5Dr2TVWVnQwf-~rNGZv178l4DzrsnhSsh69BB1OfE085vJjobnSZFJa0PVTWkagWO1AwUBry1vZm7jRjyXBEGhyKfZcgybYv2Qf893Zn0U5EV4j9RfViwHjQ-MLc~qXyArcspzHewkg4py~zUo9-nJuublG0~3EaeQCHr4UxZ4F5q5S5rAsolQltFQ7tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="810px"
            height="498px"
          ></img>
        </div>
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              bottom: "-15%",
              left: "25%",
              zIndex: 3,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/0fbf/06f0/6152250622c4392ac1ad2fe5f13e7f4d?Expires=1694390400&Signature=BWfTzJTkGLcOSEuetH5XR9lD3WxLykz1dYlF7LmKITzG~h-bi~9EZ9T-zOaPmbFGM3zXRHNYZTUeN9WDYMsQl9-z0Ep1xI74bQ5JWZiTIrC4~pOtgJJOQANxRaiUbJnPaz21kwacr-TxYuSN9dJ2ZgugV5Dr2TVWVnQwf-~rNGZv178l4DzrsnhSsh69BB1OfE085vJjobnSZFJa0PVTWkagWO1AwUBry1vZm7jRjyXBEGhyKfZcgybYv2Qf893Zn0U5EV4j9RfViwHjQ-MLc~qXyArcspzHewkg4py~zUo9-nJuublG0~3EaeQCHr4UxZ4F5q5S5rAsolQltFQ7tA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="810px"
              height="498px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: "3%",
            left: windowWidth > 767 ? "15%" : "-20%",
            zIndex: 1,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/c85c/6a86/79e388892d591e06f475624cbe2e0e73?Expires=1694390400&Signature=csUxtvybtLd81M8YIe80jqcdZzKKri2CkysONS7v6rQlS-GCsk7-zHlja0mFDN7auj1az9AwYLivXxPa40DC3RbCjlkRZjp7WS4-SVET0747a6voZjPM7AwicBpgvwC7MIPpczqtUc-ROg1Fb-iRTpksRTvic2kXJC~UWXWht7jms5ve59H8CpUSZW6hpJPXsqVZt7sYggwiRM4yDA2anoOlyXwWA88jQv2TOMIf39~A937Y1ghsrFaHvcPmjtivNajPv24A-fejsaHXRjnaAlCpFUsqULg~nG-bim5lApyfm5ZlrZ4xDbl7t8qhPrh8YKBKUcJDS-SYgJV8DEiAwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="172px"
            height="254px"
          ></img>
        </div>
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              bottom: "19%",
              left: "70%",
              zIndex: 1,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/c85c/6a86/79e388892d591e06f475624cbe2e0e73?Expires=1694390400&Signature=csUxtvybtLd81M8YIe80jqcdZzKKri2CkysONS7v6rQlS-GCsk7-zHlja0mFDN7auj1az9AwYLivXxPa40DC3RbCjlkRZjp7WS4-SVET0747a6voZjPM7AwicBpgvwC7MIPpczqtUc-ROg1Fb-iRTpksRTvic2kXJC~UWXWht7jms5ve59H8CpUSZW6hpJPXsqVZt7sYggwiRM4yDA2anoOlyXwWA88jQv2TOMIf39~A937Y1ghsrFaHvcPmjtivNajPv24A-fejsaHXRjnaAlCpFUsqULg~nG-bim5lApyfm5ZlrZ4xDbl7t8qhPrh8YKBKUcJDS-SYgJV8DEiAwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="172px"
              height="254px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: windowWidth > 767 ? "3%" : "-5%",
            left: windowWidth > 767 ? "40%" : "30%",
            zIndex: 1,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/c85c/6a86/79e388892d591e06f475624cbe2e0e73?Expires=1694390400&Signature=csUxtvybtLd81M8YIe80jqcdZzKKri2CkysONS7v6rQlS-GCsk7-zHlja0mFDN7auj1az9AwYLivXxPa40DC3RbCjlkRZjp7WS4-SVET0747a6voZjPM7AwicBpgvwC7MIPpczqtUc-ROg1Fb-iRTpksRTvic2kXJC~UWXWht7jms5ve59H8CpUSZW6hpJPXsqVZt7sYggwiRM4yDA2anoOlyXwWA88jQv2TOMIf39~A937Y1ghsrFaHvcPmjtivNajPv24A-fejsaHXRjnaAlCpFUsqULg~nG-bim5lApyfm5ZlrZ4xDbl7t8qhPrh8YKBKUcJDS-SYgJV8DEiAwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="172px"
            height="254px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-12%",
            left: "49%",
            zIndex: 1,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/c85c/6a86/79e388892d591e06f475624cbe2e0e73?Expires=1694390400&Signature=csUxtvybtLd81M8YIe80jqcdZzKKri2CkysONS7v6rQlS-GCsk7-zHlja0mFDN7auj1az9AwYLivXxPa40DC3RbCjlkRZjp7WS4-SVET0747a6voZjPM7AwicBpgvwC7MIPpczqtUc-ROg1Fb-iRTpksRTvic2kXJC~UWXWht7jms5ve59H8CpUSZW6hpJPXsqVZt7sYggwiRM4yDA2anoOlyXwWA88jQv2TOMIf39~A937Y1ghsrFaHvcPmjtivNajPv24A-fejsaHXRjnaAlCpFUsqULg~nG-bim5lApyfm5ZlrZ4xDbl7t8qhPrh8YKBKUcJDS-SYgJV8DEiAwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="172px"
            height="254px"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: windowWidth > 767 ? "8%" : "5%",
            left: windowWidth > 767 ? "22%" : "10%",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9e02/0bea/20b00a93d3ff8f4fc368d316ba5c3e50?Expires=1694390400&Signature=Tvo51NMOj8yBhmrfH-P7Qo9ffkGRCdDp5-Ws5ObVzJqvnNxkZR7WSTE8tWxCLbrlkWwUkg8ccnUnTMJ1-fV5MCJSAKIejxr4mfycmNpnsveXcfe~4YDLtz22ildt9S60cilhDI-0yXqxeANEyUAUiTdmXQNqdD0eivRTK~c2wDaVfx8T37vY8UaFvbqSJepngkHAwjKeqyJ37R38yDk0tpyeyurJYpE3ZYXPU6OWTPm6YrYIOS7GVCrHsIimIX6-dcgdrND2FxpiqLji9EzF~K5xw53iDzIHtcilW7WDkHBCqLljc6ggGzNj6aMyfC9H7ckCZ5nKpkipE5Vk80tM9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="135px"
            height="132px"
          ></img>
        </div>
        <div style={{ position: "absolute", bottom: "5%", left: "48%" }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/8aa8/5b21/5cef2771ede2908537e31f1020da2226?Expires=1694390400&Signature=eZaepojx3QAI1zeKhoogbNTNBpZyP53Z1DQS~OsV8zF-HYLxCmKBwj3TSzThwtf280iqrCEMkQFFvi75nwSf6795syTQefCECHbcOAHwjiVGqQqW0CzxHheCueU2VOAPmCkzW8~bvNRD~GRYl45uKnqza5UDObXnL7SdOiVsCgaVnROo5b7zNHFPIC5tJ5glldljICJilTbgjUMioNbFkA5OdkljBGb~TZ0SzeOT472Wx1BU-CRmHuFlsic5p4rDmZOixNyYEkMx-U9TVxMzqAD-N0-nJILpZjuFFRH25y-8kKxPWT4Ndhg6uPbxlnYrVFIoYLEq-lL56pk81KqXpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="210px"
            height="334px"
          ></img>
        </div>
        <div
          style={{
            width: "352px",
            position: "absolute",
            top: windowWidth > 767 ? "33%" : "5%",
            left: windowWidth > 767 && "13%",
            zIndex: 4,
          }}
        >
          <p
            style={{
              fontSize: "40px",
              fontWeight: "1000",
              color: "#00D54B",
              textAlign: windowWidth > 767 && "left",
              margin: "0",
              fontFamily: "sans-serif",
            }}
          >
            Payments
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#000",
              textAlign: windowWidth > 767 && "left",
              fontFamily: "monospace",
              letterSpacing: "0.3px",
            }}
          >
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;

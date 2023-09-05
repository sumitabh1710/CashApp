import React from "react";
import "./BankingPage.css";
import useWindowResize from "../Hooks/useWindowResize";

const BankingPage = () => {
  const [windowWidth] = useWindowResize();

  return (
    <section
      id="banking_page"
      className="banking_page"
      style={{ height: "100vh", width: "100%" }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: windowWidth > 767 && "center",
          overflow: "hidden",
          paddingTop: windowWidth < 767 && "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: windowWidth > 767 ? "30%" : "20%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              height: "100%",
              width: windowWidth > 767 && "50%",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: windowWidth > 767 ? "flex-start" : "center",
                marginLeft: windowWidth > 767 ? "20%" : "5%",
                marginRight: windowWidth > 767 ? "20%" : "5%",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "1000",
                  fontFamily: "sans-serif",
                  color: "#FFF",
                  textAlign: windowWidth > 767 && "left",
                  width: "50%",
                  marginBottom: "0",
                }}
              >
                Banking
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "monospace",
                  color: "#000",
                  textAlign: windowWidth > 767 && "left",
                }}
              >
                Receive your paycheck, tax returns, and other direct deposits up
                to two days early using your Cash App routing and account
                number.
              </p>
            </div>
          </div>
        </div>
        <div
          className="intro_phone"
          style={{
            position: "absolute",
            zIndex: 2,
            marginTop: windowWidth < 767 && "40px",
            marginLeft: windowWidth < 767 && "40px",
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/cfa2/df22/1c35a62c67473e0eaa55d7dfeec06117?Expires=1694995200&Signature=gz9KXyu~Tg1F4lHGfQ4Z-tIur5HnRNnOeOfiY7R0zmNiC~c3i~MbnfUzTjFDG476OzkC7w5dqjNbHrgwtZuKZxF08dYuFscbQdmd6F~u38VW58BYVgwJPOE8usGy8yjbOFwmQe3xSUblChslXORj-pTxZQ3ikjm1~3JP2etkgz9dQQKXPcEP3ZVee-t9f91UAsS0kvI4lOGhYQr180puTbxN8JmpzV-jRoO6Z6t5E8OIKAsl4OL3Sa44nEJpILiaptt~Lmxu2oXrpI3qlFR7BzrtXt6TMlaXjRrOCKmQ8fz8PyxxobEBWgYsg2CDZbK06jToi7UyNklcv4n73f74xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="350px"
            height="408px"
          ></img>
        </div>
        {windowWidth > 767 && (
          <div style={{ position: "absolute", top: "0", left: "-4%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/6d21/3fb0/ff706e99b44842ee3a3ea1c3d54ef43a?Expires=1694995200&Signature=jfZu0XbuwLdz44Z7D~ChEqwe19R6tmHr3YoarV~~Pk7YDx2h4jI8FYReDrjqdymP-GS4QIsWXvbOD3WKpYHp2XlQxusOeeQ3Rhwb~jpB9UQJD7Q6qByOdSWRXNHa5QdTm8~H311IUUfmTYOGiYU5DbQmvhVX-6x2Sj-FWg-BSAh72cmIF5xrl4HBcUQeHj~qCvh4jyd39i7ysK6Q5RYrkNOXg1MIUxUBt6aBTOk434KZ7I8U8N2-s~sWeOnyCb0elLb~yunHXrC35DDJm2iaImGMzlHWIXycmS0RGtOEPN5lgVM0R3LutkJ7VAczYmVMQsEThisJ0jkmIZMnLAQyyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="380px"
              height="160px"
            ></img>
          </div>
        )}
        {windowWidth > 767 && (
          <div style={{ position: "absolute", bottom: "-12%", left: "60%" }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/6d21/3fb0/ff706e99b44842ee3a3ea1c3d54ef43a?Expires=1694995200&Signature=jfZu0XbuwLdz44Z7D~ChEqwe19R6tmHr3YoarV~~Pk7YDx2h4jI8FYReDrjqdymP-GS4QIsWXvbOD3WKpYHp2XlQxusOeeQ3Rhwb~jpB9UQJD7Q6qByOdSWRXNHa5QdTm8~H311IUUfmTYOGiYU5DbQmvhVX-6x2Sj-FWg-BSAh72cmIF5xrl4HBcUQeHj~qCvh4jyd39i7ysK6Q5RYrkNOXg1MIUxUBt6aBTOk434KZ7I8U8N2-s~sWeOnyCb0elLb~yunHXrC35DDJm2iaImGMzlHWIXycmS0RGtOEPN5lgVM0R3LutkJ7VAczYmVMQsEThisJ0jkmIZMnLAQyyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="380px"
              height="160px"
            ></img>
          </div>
        )}
        {windowWidth > 767 && (
          <div
            style={{ position: "absolute", top: "10%", left: "3%", zIndex: 1 }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/1bff/5d61/4efaff592b1b61f56b6bdf1362cbd83d?Expires=1694995200&Signature=SRmAO0IRVI8kApKvqFp8lBzDQlpDBf9bZfmif2e~W2av-oiMRpU0LJiiLgL5Q2~v72zw4PPCDD42Y6C0YDz~OIDoo7ln-phHvSh6H0BPKottZArftCFWhleEtLy35ws5jdZeKinwLVtnqSEtSBItWcJo~w6dZbvFHAH2c05KIsQXlcnsM3Sb9cA~Q60x0c0oFho5q6NivIwzndjw5TA4E-gaE~UnC4W8lAeXsL5Nl8Ih0lMNu4xuH8x1mjwLHz6k~ZqFAIS9sm44KBArSDkrdyoqsDPFfdhqDWYXqLHCi657CxDMBRCozD3VwC-y~4qdXs-omFGpCSmnWtmb3KI~ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="130px"
              height="200px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: windowWidth > 767 ? "60%" : "30%",
            left: "3%",
            zIndex: 1,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9b27/d719/9125c5a6e273282a905b10a5a45e7651?Expires=1694995200&Signature=FcXJwfUc0hEqc~w4UEsep5JLFFa4tpkH-v3R6qwTD1OpGdbyg6AJO7wHZ5HOnkJlug9kasjDg2KkWBUytPeMLlqPXbbbdpQdM8Uz9JZ0-PluEh8cRQzNhS3IiUmHUKpXz~ndj-Bn5mWBHy~jao59y~PzGGA9C~mIetaqQTnGR7XdN9h5bAZtpEoLycXCU3DRjIqduzLKDtlQGBBg92wS5Rup4D4hbiks55Z7XUfnBaDFJrNeL3Nkx7HHLaMw3WhXvK6aNqkRrbgzmxadXsCF1dUKgKnNSmWGdyFGOgwaGC7kTuc0gm2Zdn7gE4u4THkmLuoj9V7c-usXLHgH9z3l3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="80px"
            height="223px"
          ></img>
        </div>
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "20%",
              zIndex: 1,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/85e2/9f4c/d2fd3f6f2e2615064f58ab5bb89aaa17?Expires=1694995200&Signature=WmjnoTgg1E3h26CgRV~9vBFJk3xvL6crZry~hJFNdM3ryMwwpWtJRnWYIzc7Nbvk9opulOXhnEPeinGPxNMno11cq4SAKn~TmhVtoLGqcM54uCxGnRjc1YiQpiko5cd1AlRhCrSJT2wMmaC9x7AHk0yr1oaaS96Ruwi6nlgE31jD9X6IAVseL4vRpeh2wxtgrWNDfQymik2MykIQN16dXrDOs-TYkgkbnhdOLkDW3vymgXOWJNupoiyxIJ3Z7fXUM00~scZYcDZZVTQDJBoDkt0Ik1CLwLitIhj8xVuoUsztq8f81d4jsM3Hvvz5wpgFSGAuqnvYGJdAv-BfTlX5tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="300px"
              height="195px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: windowWidth > 767 ? "25%" : "15%",
            left: windowWidth > 767 ? "32%" : "60%",
            zIndex: 0,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0ef4/feeb/aa4c587172398ff357ac8c9bba4a1d5f?Expires=1694995200&Signature=lwLkTA-cmQhHY43yr84KG~EGOgeIHoEiOOXMD5tG6EylBROOsdrXZVXdCQK28gePZKI8TbPMxv1HMhaREIDZsneAD6w-hMXZ2nGXvHhO~Pxr1OmdeVbYsSyd~3z~MpE3J91iD1ispBMFjqUfdVRRda~syXbzlpQVM4IWIywpHZgfyxI2IRpiQ1cpykd8EBgogkIWZU-d6TfYb0ZW5CnIDciguNvVszLOaXDbl6Ccp91ipGdKCBf9ExH47KpE3ThnL~YqZEU5jmOfb3AlPjyYrKP-D~EmiSi86Pn~YfvgM3iKItjoD0NL8YHgvb8aaWabrMyG3VsI-oLFtyn7f3hZCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="270px"
            height="167px"
          ></img>
        </div>
        {windowWidth > 767 && (
          <div
            style={{ position: "absolute", top: "5%", right: "15%", zIndex: 1 }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/ed7b/bc5f/c7d864a9e2bd9e547e5c107b8384ce13?Expires=1694995200&Signature=T5dq0UGp3cpnRBWWnaN78-YunkMSynSa8dKhSZIWE2wBqi5xIkn3agmnU18Smbmszz--OUWtYd9WLf9jDGPe3k7UqTklifoW~aATcnGdWt1iP-jZPHdQUGAY1cxywGWDi082bZE43S6JCsxJrCGggMbDpYS1DiiOQ~hoKoXLdLEkcAwx1u7nFJK7pVQavUNIe-HrUC~zW4eOHGdRhTpD49L2O6iuD822Ic30Sy2fjxsj0T7WyDvzaHJBwu9davYjnqvM5pVE92dut1mkia4Tl4TnSSrxVmWOf3teBjAvQOj~0DIUxFsqbw21DKVad6VP9JHIQEkS1b3EQwEeTkicgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="250px"
              height="161px"
            ></img>
          </div>
        )}
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              top: "32%",
              right: "25%",
              zIndex: 1,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/177e/3fe2/ac1f6d2f8aa9483456f1365f517048d6?Expires=1694995200&Signature=IMHUG36uplsTftGcfkoLhLDOKsioG9RvMjujUWbAzFS0YkMY9vliMK7RR5VwBLBFE84CivokJhV6-Y1OGBtLMaPokAtkH96BE7gYH2PY2bYIlgZcGxmbSsZNObvAzrwRsLkSBPrS5LfHZe3f0258jR5oNr~DF~2iMQvXPbVmHy1Xz6C6RXEPhx-eE13I11UmIm9zJlWkLSgz2DKNK4kq2F6U5K64an3UKeXJASqdzwqkL2zaW1BuST~S5E3086mBglznjgmQW37~cbiCxzm2DfHw3Aftkkd15Q0f-JRsUAuYuaBI1UUiuGjBRTWxSqvOx94xsuj6dKPj7lZU5R3dkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="280px"
              height="188px"
            ></img>
          </div>
        )}
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "20%",
              zIndex: 1,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/b87c/f461/c86441ce0c68dc27aff0b9b4e88f5a0e?Expires=1694995200&Signature=X1vdxuqc0HsKO2oD1DyUsKcKEi87V7QKBKZ9hcCH6VWtJG3Mta6Td5YISSxSdBlPZQhE20e7JVskRBnj-UAfpckZq-NY~K9t~fUJm1x4Wi7kIEFLtG33UDfTSIGJYK0Hgc1IQMsbkVtEMfLX6tti50WZAumY0i12B~WdMzG79ldQ3bOVvQ7q7YkuZ94hCvnrjYatHaAOibiQsnPRZJTy0j~r0gz0PkHPM0Ry9tH-KJCh5k90xUPRXVVOjOh0VdZgMeR2UPmh5s8aF6q8Zf5lfTuUl19uRVvzggetT~wAuMiAQtsA79SaVnxPGXRkWzKS4lsoDvuK95oHhw2czhQfnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="240px"
              height="140px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: windowWidth > 767 ? "-3%" : "3%",
            left: windowWidth > 767 ? "40%" : "5%",
            zIndex: 1,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/cbd0/9610/ee1df874ac1449ed2ffba52414758d90?Expires=1694995200&Signature=muSe1vG~5Mggns7-5UwByE8I~JfCTKEcNqdkuBF8q5k6aV-0Nrgc-NaZBOqTRHuMwkpF0AJlShN6rbGmgw0Piq1sSm6XkvSy9M5sPpEOgvGQTHGWdkSXe7jtB-Z8rCOAaO9eiYHsaIh46b-XzDaG5nNOwUkOi36F34Kde1KixQtzyJAWYHnFK9elG3xwyEdnbdB54PZJSXDudaXdL2v5Z5mKoyvnrGlNH3p9Wyq9L7U~5FNfRE1h6xLXNfSmMYlDAJvXTiNfpOhC~xILhkNl5wPrpPrZts4QSEHUqQlh49pvvnAaC-VYAxmEZQpIzVLAyINQxP715CrgS-qy1YMx3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="150px"
            height="157px"
          ></img>
        </div>
        {windowWidth > 767 && (
          <div
            style={{
              position: "absolute",
              bottom: "30%",
              right: "5%",
              zIndex: 1,
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/e286/8ad7/0fba4eff6089879c7037df7a4de2e28c?Expires=1694995200&Signature=d6Df7dd21iRDZRllfbjcbZExpNhO5PMF4WmSk8O0JtX3QgOBG5K53Rvfn1WRinLAqW5OrKXcu-JbLV2zzPiK155PWnMBbF2HABch~ZleiXkus6tuJf7pZPlj0CGDXAYrA8mVl2SBafh~u2oJ6iKSKMrUOiMjwldpUg~VoUYpwkrgW2nZ1od~A2qpyRG4cFkPyhq2~SGb~RM9TJatdmIpoame2cAMeUzJnbzYAM8~39fKAjfFS3vn2yLVv5ID6hznNpV7S-2REN9Jj5dJipvv-Lk4s3WOgiG4nprntZPPm0WA5HGkl4W33QjgIfgfGGhsUadFaleiQqhUJ8VrohQRag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="90px"
              height="247px"
            ></img>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            zIndex: 1,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/a684/304d/aea8ce66e426798cbb840ec8c89c8025?Expires=1694995200&Signature=cMw2-KtA7MjR37F5OEPXKoFqaH-rrhYppyOScoS9Ms3c2Ske1LY~Qt6P0KlgiItABJCsX7ea5aX8g61nNauNLiFAmkalMu5nnkiHGD5MYTk0P81kumG95Gtys9GV4sRsSH4u2gwFeybW6Il~O-veDueTcBk8IA8DaJQ80OjY~mENOWuBPmM3Uy8gfu0E1GQIU9463KMh4ujpaD8StE38~kByh16jFubLkq08myTGA60LhPFxwHI9hRWmtTHTvgOeZfvLn2V0b9gcHe11TRB289glzzJ-xgVqRTr0PdAw5WMR7NEX76dkZoYKIcXwQtIZjrtkNJ9BzuX~3xbWIWDDAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            width="120px"
            height="80px"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default BankingPage;

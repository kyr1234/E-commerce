import React from 'react'
import './Home.css'
import Products from '../Product/Product.js'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          alt="images"
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/I/B1a6EB2g9eS.png"
        />

        <div className="home_row grid lg:grid-cols-2 grid-cols-1 gap-4">
          <Products
            title="RICH DAD POOR DAD"
            id="6"
            price={30.75}
            img="https://images-na.ssl-images-amazon.com/images/I/61M1eEsuSML.jpg"
            rating={4}
          />
          <Products
            title="THE LEAN STARTUP"
            price={10}
            id="7"
            img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={3}
          />
        </div>

        <div className="home_row grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
          <Products
            title="AS BRIGHT AS HEAVEN"
            price={20}
            id="1"
            img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRUWFRYYGRgaHB4ZGBwcHBwaGhwaGhkaGhwcGhohIS4lHx4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjErISExNDExNDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQoAvgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABCEAACAQIEAwUFBQcCBgIDAAABAhEAAwQSITEFQVEGImFxkRMUMoGhI0JSseEVYpKywdHwM3IHFjSCosLS8SRDRP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMAAwEAAAAAAAAAAAERAhIhMQNBUWH/2gAMAwEAAhEDEQA/APY6VKlQKlUOKxC20LNMDeNTqY/rQ1e0Vkie/wDw/rVw0YpUI/5hs/v/AMP613/mC1+//D+tMNFqVCf2/a/f/h/Wu/t21+9/D+tQFaVCxxq3+96frXW4yg/F6D+9DROlQ1eLoTHe9B/epBxNP3vT9aJq9Sql+0k/e9P1roxy+PpQ1cpVU99Xx9KXvq+PpRdW6VVPfV8fSm/tBPH0/Wiau0qoniSePpTTxe2Pxen60NEKVDv2zb/e9KvWrgZQw2Ooop9KlSoFSpVxjQDe0J//AB3/AO3+ZaxCA5DBgz0kbb/Ktl2gf7C55Dw+8KxOGuSh1kz8q3z8S/XXZwR8Gum51P8Ak04u+4yxHU7yJ+W9cFpSQxGo23rowaRGXTfQnlI6+JqNzxPGfT4PEaxsI5TO9dtC5rOQdIPmPpA9a4mFQAjLpM7ncT4+NSLg0gSv1PM+dDeXUN07ZBBE6k/L0j1qbPdzAEJsdJMkx5eXrTPdUJkrrpzPKB18BU1tEUEAaHxNMZvXLqXLgIBNsHYCTqdCQdJ2P1qRcU2udraypKkNO+inXSKi9gh3H1bw8fAelSe7oYlBpIHgDMgetMp5cu+83ANDaYgT8R+U8qmS9cbOEKEaiZMg68gI9aYuFT8AjeNYnrl2qZcOkMIMNvq2v1ph5cns10iFySAASSZBy6yAI3rovXNQ3swSCqwSYeARM777eNct4K2CCF1BBmW3Hz1pNgrZEFZEk7ncwCd/AVMXy5L2l6J+yI3mWAj05bTUfvLxmJtxsIY5TpI16zHqaeuEtiYQagg6nY7jeonwtuIyCJmOUgQKuHlyia7dAlvZxp3pYSI3iKY9y7BkJPLUxvz+VdOHQAwo1id+RkVD7NFMgQfM/wBaZWb1ySXH1zhfDKSZ9a2HCj9kn+2sU939a2PCT9kg3gU6npJ1tEKVKlWWipjmn1FcNAJ45dC2nLbfqI+sVhMFoDB5/rWx7TH7B/8At/nWsZhlhTrpM1vn4zVxGqVL47wnUET8xNV0FVsGp9rf1G6nxHcFTGhP2tMN+oXNQMDWuYx1VxMRrUy36GKpqUGteLGia3hUq3K5wThxul50VQdf3iO78ufpUDqVJU6EGD5is+lss9rqXKmV6q4S0XdUGhYxPQRJPoKLO+HRihVjGjNOx9fyFS33iyetQK1dz0A7U9obeHYpZPtHZZWMpVSds5kelY272qxsz3R4Kikf1/Oi5Xo11mlouESQRoNAPu/PrVd0eNbrEc+6BMiN+VeeL2mxI1YzJ5hR9Iqa320cCGQH1H9aeiyt89wbbCqty7WRHbRD8SEeR/vFGfeg6hlMgiQRsRXTmSuXWxae8Bzrb8CuTZtn92vNnBr0Ts6Iw9ofu1PyTI3+O7RxTXaalOri6lUd2pKju0Ge7SibLjy/mFZXC4aUmTqfStfxsTbb5fmKzmG1QmOdal9JTPYaadOfWgfCbzvdeV+MmdRAjbz0FGeKuRagHVoUR4nX6A+tU8DhiNjEH+hFUgl7rNd90A51bC6VxhU1Kpm2ByqMpJ0HlVpjV3hNoFmuN8FsSfFo09N/MitXrIzJtXbli5aS0lpGJBzuwG56f50FRcdwuq3QCMwGYRqGjn/nKqjcXukkhyATsIgeG1EeF4o3le3cMlhKk/58/WplhbKCLjhYdHMmDsOY2P0NW+I4PD41T7K6quZOV53PhI19aELaL4j2LsFOcrLbCOQHU8q7+xMWt5QtoEAxmkZIOk+HXrTqfuNc/MrM4jhF2ziPZta1GojVWBBhlOkj+1cu4YIJe26jaTI28wd61XbfiTDE2UtEM6IQ/PVtl84BMeIoLieL3mXLdtKwI8QfoaTVCzhEJXUjmPhM6leo6fSqt3gqnPDjcnVTprtpRYYm0QoNl1j8Lee8jxNSZ8OSzd8SIjKI3kyQecVrBnL3BvhjIYmSGEnaN4rZW8bbKye4Y1BExETqJEUHfDIUAW8AQZ1DDePDXaob2AzM2V0Ign4lEHwFa59OfU0eLIxADKTyEidI5fMVuOBCLNvyrynhfDXzq7MBkIJE7gdIMf8A1Xq3AGmzbPUVnu7DiZRu3Tqbbp1cnUqju1JUdygC8Y+Bv851n8KCUYnrWh4v8Df5zoFhBCHzqoGY9szqu0a+tW8Nbofdcm4+YAQYjwA0NEsM2m1avwXrY0pXFpWGma7cNSM9VUcUwO2UpJynUjlPl8qkc1xBXSRztRFKlw7lWBBgjY07LTkWqjPcRLM7sxJJY6nU6bflUtri19VK+1fLBAGY/h5Heu4sd5/NvrIqpKjNJ3Bj+GK1npZai4MgN1JEkiTPOSZmidzDKUcAEd7SN/hB9JodgLqJdQjN0OgM0QfFIC6QTJzaAiBEa850msV05qumG7iHM0kqI3EFVn6/nTmwveyyDIB1A0mnLi0CoJbu5Ty5Ab69QKltXwxkA6iB8xpUaCb2FlC8Lpv/ABFdNfCqWI4eM2XJykQd9QP60YdwRkYRPqDJIgfM1Vv4hc2cchsZmJBmPl9a0zaBPgmyMRnADZT1mvXOx1srhMMrTmVFBneRvNeZs7KrIhlWMzHz3J2r1DsoxOGsFtygJ86x0c/Wgt06mpTq5tlUdypKjuUAniQ7hoHhlGUx1o5xP4DQTCfAfOgz95wbzdCwH5CtZiVw9pgrK0kA6HlJHM+FYu9piCo2z/1mtlxvDW2cM95UMAQQD946789RWv2fo27YVVDoxKPtO4Ov6+lS4JEZHZwSF6dIpmKTKiIgBtKBleQczaz/AJ40/AJNq8JAnSTsNBvSs/uuph7N2RbzK4EgHnQ6wvfVT+NQR/3AGiWFwww5LuwJghVEmaHYdpuKTzdT6uDV31WZPcWuJWlW4VUQIGnyqTBYIEZ3bKg26t5eFLjI+0f/AGj+WoO075TbQGFVJA6mY+gH1p7uQyTagu4rBBihsPEwWBM+J+KgXaCzYRlNhywYElT93oJ9dKI4LhqXVZnvompABiSBGplhVTj3ARaS263Q6uSoIXSMjNIOYztW5kTLYf2S4daurfd1DNbUZdSIJDmYG+3Os7ikZcxzADQ67nkK2fYlUy4lQ8gKoZiIy91508BNUmwGAJDe+gFYIkCBuJg6GZ59Kx5e63nxzg3DlOAvXMgNyYVm2iUj5RTeEXcOob3lGzzplJy5RrMyPTwoveRbXDsR7C57c8mgasWVY00rBe0ZgBdYJr3QCGOwmCDEbjXrSe5Wr9b7iuBwNtbdx7Ttn1XKWJGx1GbxrJY9la8WRITNCZvjAIGp1M6z60c7c4kph8HlMSOfgifXWsjd4iZUMRpmzEaFgQI15U5vpnqez3dsyKTBkzyEd6Pyr0fsVPuWGkyfZrJ3kx1rztMUjwO8SsGYG8QZr0nslbCYXDqDIVAB8qdEjQW9qdTbe1OrDRVHcqSo7lAI4p8BoHhR3G86O8T+A0DwvwN/uoMcL7HEd4Cc/wD7RpW47QcPuu4yIrLlA1MGQWPXxFee3J9s5BO7H5zWmtX7jW2i4+buQc7fgUkannNay7pb6xoLNo2sOtp8ocktlUzALTp4a/WnYE/Y3/8APuis1wQMXYuWLZDOYyfiHWi0sAQCQDuAdD51bGNwTwNwXkNpz3hqp+n+eFUrdsrcRSIIdP5hVZFKkEEgjYjeusWnMWJO8k6zTCX3Bbigm43kPyqC+iYlMgYC/b0E/eED84HkarpcJMsST1NYvH49xibgAIIciQSNBpIP60xYN3OzuJLlfZGJ3zLEdd+lEu1FtUsYbDZhnXlmggKhBYmNBrWaXjmJIK+2eP8AcfzmhmOtu7Zs0mNyT0G53k1fZJjX9i0VEx2V84yA+RyPInntvXnV3iN1lTL3E0AgSNVM6cwZJophXuIpto7Lm/1IZlz+ZG+kj5mpV4d3AoJgchtP+fmak5W1oeDkLwXESDCuZB3gOkjWvPkss8vn7oJkwekk684FHbl24ltrSswtmcyZjlPUkdZ1+VC/bkB1EnMIjlroRHIammYtre9vLanD4AtMKpOm57iafOsjibCOqIndluZ1008hrUJ4xfKKrtcuKpAUSSoERA5R/YVAuIK6ugAC93bcHNpHhFJ6iW+1hsMVlTvrDSTXrXZJIwtgTMIBNeRWuKliBIbWdR0n1Ov0r17sq84aweqCnRB9KdXFrtYUqjuVJTLlAE40+W2xgnbQb7gVgh2sCZk9kxM6SQPOt7xsxbY+X5ivK+J4gK5bKD3t4135fWtSDiXMzvqAd43kk7T8/pRkYrIuXbNlg76hFEVmIIIdYUk6rrInkQeWw350Qs4rRS+Ug69wj4gN20mda1EaXgzqHJzjUEbEcx1o7lBrFLxD7gBYnaPPY/T1qphseUZ7bNpsZYgyNI9aWDfNbphSvPV4hyW/cRpP32Og02nrERO/hUoxeJABF98vImDPqKiY3irBrzi9cL3nfL8Tk+GpGn+dTW37I4XEYgXWuXTlClUOVf8AUOzba5dNPGsHcssl10cEOrlWAncETH+dKSmYI4ZdBttz0q77HujNsenPpFO7PYD29xEmAdSfACSR48q2F1sFaJtm0zBZUtMmQBMazpPhV8v0rIWcKZnQfnofCjVnB90fDBiTMetLiNyyrxZYsmWSeQJ1iSNYqC5jSEGXvTyMdTt05UFfF8NTUsTPhHP10qmMBaVfhBjZiJ6HkaIC27zEEnUayBvA0G3L51KnDMQUUDKsEz4zzPjTQAulQR3410jflGnManxqvcvkSpt3Co1zZTqD4EbbbnatkeAJCF3zPzaOo5eVVbvZ8T3brrGwIzLoCD3TsIAqaYzK8Pw+rwUaO8uu2aJKx3T+lepdlkAw1kL8OQRPSsNj+zt2SfjUHMpUDzIOg00Fbvs2sYe0IiFiKnV9A4tdri12sqVMuU+mXKAJxt8ttjE6j+YCvKOPW4c+cnpuf0r1bj/+k/y/mFeW8SZWIzKWkkZdZJ8I+Va5FGxffOFW2kmOhzGBsfEdOlFb/DEJGZ0tue+ADmkbfDoN4G9QWsGEyiwoNzdmmQg1GXUdOY60Rs4R8hLujXIOVROhaRA112rURCMPaDqM8Se6GtwJB1MgyJjp0qPieB7odkV5++uqGJiSIj8xM1UtYt5ZXDhlYAwM3dDnUAgnQn8quYbiJCsVVtiCHU5WkiM67ZT15a0A62YEWghYQuRiFZe8CdZ13OviDtNTYLO5CZTnuEFRqUzsCcswNZjbqajfDW7zsltkVsoZU1Lod2VH+FhB0/uKN9h+EjD+3xmIcm3YDZAeTicxGmrRAB55qluLI03FMLiLFrD2cLaZshFx2XTM4M5fGTM+EUM7Z8Ae49rE2xkNxVF1W3VxGU+cSD/sHWgf/MmKu3LoTEOjSrZQRlQGJRZGsf1rYdl+INfV7N5y+cZkY76ch5QD8jUyxNDeFu+HuWwWDFB8I2grqAeVEsVwrDYly6XGt3CSWRtix3MHn5Gu3MGvtIZwhnKSToI0jzP9ait8AxAZlgROjAiD49RS/wBi/wCVFiOAIhyOWMAmAdCN9K4nBLVwKVd1AMaRBiJB9Kvdo7ga5bUN8Cw5HU+PXT61NhFS2IXnsDrqY1P9qbUw/D8IVCuRVCgb7GOVVOL8VtYZC9y4kDZZlieQA586J28bJ/vzrEf8VcFb9gjlgJJVRoXLaEZeZWd9dKzta5ntf4Vx9MSpKSpExrrHn5kVNcxrLoYnmPPnPpXnn/D3GKl72TEy4yhiYCncCOYMRW3x2KcOyNIkaiNRWufa9TKnTjJUwRzk+PLTpWy4VczojdRNea3DJ08Olei9nf8Ap7X+2nUYGlrtcWu1lSplyn0y5QAu0TEWXI8PzFecranQKS7GFP4J5j66+Fej9oT9i87afmKwftlS2z/eMqvgBzFb5+JVW7i0tDIkj8bnXN5+FRreVSApBPxKCYjbcn8jQy9iu8TtpHXeo0u2SIytmOxBP5GqD73XdMzhQ66ht+UZdCTMgfw1Rw+Md1uBFUXbcnKZzG3JEIOZEiQN6ZbVjLhSFzBSnPqTB8QfWqPFMTkuMyArBBDQDzA5cjG3OrQMvM65rxhGRlXQZSSWbQDkYQzNaHjfFPbYdEDModQrw0JnEMhZTpqRG4ofxtlugrcZUcOjO4BKlmTLDAc4X86VnBm0ptuFupcXu5GEtB1AzDQ6jQjkamM6I4azvqc6zIy5QYU6RzNLg2Lu2VXK4TvKZbeHaIB2XSTVjgTlsO7lGY21KqzQS2QaZo0JGgJ51nuzN0uz2mGcMUnSIKkkBegkn6VqWfEv9aHtpjjltopJDKGYkk5oECZ8pquvG77WcNaS7dQmZh2gqWYa6zGkRRPjOAR7hhCxVJZGfJlAVVAAAk7HY8qiucJCQqyAgjQE5ZzEgSZMZtz1qZDbRbC4oFGXMA4jlI3Ed7y38qsPimnISGYnukfC2mx8d/SgOCtyUWVIDDPMEEA6yNNv61PZ4iELJbVZAhWLTE9BFasjM6EjxGJk68/89BWQ7c4pna2SdlIUdBOvqfyFEvaEEF+QJM9Ov51ju0WMD3SVIKiFWNiBufzrn1I9H4/pvB7wS8jEbMDPzr0/iKlwt8CQqy8/hHdEDw+uteP27neFel4C+v2avLZkWVBiFZZIPjzFSRr8kK4VJXKdOcDWY38pr0Xs5/09r/aP615k8e1gLkUH5mfHyjn1r07s9/oW4/D/AFNXr45DK12uLXawpU16dTXoAXaBZsuDzj8xXmvELmYGPhBgDwGleldoRNlx5fzCsFewaZGJLeMRWolLj3DbKYDDXFtgO7LnbXMZRjqfMD0rK3fZoVLyM3IdORr0vHYTDvgsMt+4yJ3SjASS2Ro2B5Saz57O8PzEnGXSx0nKJHWO5p0pOpntbLb6d7cJZw5wwRMudHYxMsRk1Jnx+tEby4NMLg8RiLGc3GQLDRDtmcEywEDLVb/iRhVd8KdSFR4PmbdEsTgMNc4fhVxDtbQZSrASc2VwBseRNZ8v01Of3/WZ4lxHh7pdt2sJcV3XKlwwVkbMJc+ImKC4CxZtofaX1XvBgjz3SPvIwn6xR7jOFwaKrWbzu0wQFGgg66gc4HzrMXsFadpzXJMAAop8gIYc6l6rc45x6V2ZWziO5YdGsoCLgUEasNFmANZO1YFcAeH467aOpkFCCYymWUydSYIB8ZraY/gF7D8NGFwaP7S42e4yBcw1DESWEE6LzgA07tHwq5iLGFxV1Cl+3CXlIElSQCdCRGYTvoGPStc27tc+uZi3wfCWrt9xcRfa+zyo8GRE5tJg/FO1Z/F2y2dHdA4JB74WCNPoeVWkxrpi0cbpJbkCCO96/wDqKLYzgdtuIo2TMt5fak5QV7kZpbxOTzzU6tlyH45LNqDHcAt2sLaQKq3n1Zxq+xJjbnlHrXfdMHhcImIv2WdicjMCcx1bUjNA+GmcW7S2Ll5xkuNkJQEL3TlJEgxsTP0o9Zt2rmDQOSiMzRzI7z6HTpNZnV323eJ4/wCsxiMdw29auBbT22dCoYkyJ+EnvHSday/Y/sQmItYy0zr7VPZtbuLJUEhu6RzUxr68q0XHeB4VUzWC7uWAKgMojUk6ADpVvsPb9k3ElSRkVCu8g5HPPXerbL8Z5lmvJcRgHsXzavIUdGAZT+YPNSNQedeq8GtJdwd/EusXbSlAwJHwKIJUaEwQPlQzA4i1xuwiXCtviFpZVthdQb/I8xup1GhrTcGwvsMFjFKsMrMWVtT8KzV1rq79ZnG3g6230BnIfHTeeZ/vXo3Zz/p7UfhrDWcLaeEBOUwV1gA8iejQYrddnlixbHRY9Ca118coMrXa4tdrClTblOpr0AfjIlG+VY33QsjRG55itJ2yuMuGuMnxd2Pm6g/Sa83w3EL4U9zn+IVrmDYcew7HBYYKNVI2/wBjDSKyrWrwjV/rT14piCACDA2GfQeQqVOI3vw/+QpeNandg724uOvu2QkDI0wJ/BVy9g717AYZbMZ9GaYGkMDv4kVnTxW+d0J6Swqa3xnEAQEMdA/61nwPK5jl7s5jUVmbIFUFmMpsNTy8Kl7GYc3HZ3yeztjOxyKO8NRrHKJ+VdHG8QQQUJB3BcEehricWvAFRbgHcZlAPmOdPBfOosf2mxL3Ha1cKoT3FEaLsPmYminZDil9rjpiHd0ud3vbKTMQOh2+YqiOI3OVlR80rp4rf5J/5LV8U8vWYb2pwjo9340ykZCGhWUqNSoOuuhnpRDAdoSnDGdnX26A2VaB8T/Acs7RrE/coe/FcS3xW83m6n86hbHXtvYJ1jMkT1p43dN9ZjMLjMQDAuoI6IP716RawuIvcOsLZf7UkMzGBIls2/iRWa/aF8f/AM9v+JP7VOnG8YBC21A5AXAAPkKnit7qw/Z7iIBLXBAE6FdAKh/4fXy/7ULEk5QCTvIS4Ka/HcYASUWAJP2nIeFeWLxC6ucpcdBcJZwjsoYmT3oInc708ca5t6lQYDEvbZLltijpDKw3BH+bV7/wbjYxWBZ3RfaNbllmA2kZhzA8OVfPcVvOyvEsSMOq2lQqhZZLQd5I221rWH5Pjb4ZhI7iDzc1reFD7NIAGnIyNzsa8xPE8b+BP4z/APGvR+zbu2HtM8BystGomTtTpxGVrtcWu1lSpr06mvQA+0VrPZddNY320IP9KxeH4ccp0Tf/ADlW74sO41Z3B2+4x8as6wCf2eeiU5cAei0V9lXRbq+VMDlwJ/CtSpw8/hWrojnpUodQCSdBqaz5UU14efwr608cNP4V9asLxG1p3wNJ10jnr0pz463rBnTNpOw56edNq5VYcNP4V9ad+zT+EetdbiNuJkxtzO0/2rpxKmR3tPPqV0+YNNq+NN/Zf7o9aX7I/cH8X6003lbL3j3iQsk6xvUHvYGmaPOecR/MK1tTxqwOB/uD+L9alXgg/AP4qHrj1j4if4p6/wBasLjIiSRMdeZI/wDU02r43+LR4H+4PWht/sRh2IJw6fJiJ8wDVxsQcoaTBEjfnVPEcYyjUnTzqe0+APaPhNrDPZIRAB3mQAQVDa6eorV2eELlXIiZCJGUiIOoIivMuN9oEvOxPtV0CoCsxvrz9D1ox2Y41dS2UZ3MMcsyMq6QonWN/Wk1evkbtOFx90etaDh1vKirERp9awlniLsR329a2/BmJtoTqY1q2VgUFKkKVZUq41drjUAnjI+zb5fmKzuAtjI2o3860XG/9N/l+YrMYG4Mh86C9kFJEHKqmKOZHVWykqQDrpIqj7RBbdVQW2D2y4EZdXSGBHIweh01qNznYPIlTKBQ++/29keFz8lqPhSC24RkAuFCc4//AGBWGZmO+aWUkHroaE49avPYctpkyyCdDmI0nwneo7uFuFYVkBJ/DoFjRYjWDzoemKf2ntyD7JjknMI9nMI+Xf4yTP4X8Ks3WcYi4yEsFS3mTkwJuTl6OIEcjseoN5YkOAuQe8noPP8AD47VI+DfkUiADI1kCZmIOp2jl46M4RiFdsQymVNxY8PsbciORBmR1mosTiWTEF5+zRERxyGdnh/+0hZ8GNE924lbB3YEOs+Q8YPw9Y9KVzAPrlZQOQIGggTrHgeu9Q4a+zXXck5LlslF6LbaAfNvaZvIiosNbC4N2FtUJw85lIl/syZMCZ569aLlW7vDnJMZANYkDoY+713Gs+FS2sA+YElI6RrEbT4Gf4jpVbHWwrC66C4gRQRpmt5SWLqDvIImDPcG9S4u2Fu+1dA6EoFb71ohokA/dLEGV111EUF18CCIMVRv8GQ7gVy1edLmIeWZBcAdNyo9lbOdOu5leY1Go1pkh0swq3FbEXiASMrD7cgyZEbH0ozOCu9nrfNaYOAINlp3Fiiexz25QB5RYhdE1nQAAn4uW9FsBbZbaK5lgoDGZ18+fnzq+VS85NDbfBx026aVqeEplRF6CPrVEHnRPBfCKawuilSFKgVI0qVAK41h2e26rEmI+RB/pWQTh1xARAmZ3/St/cWaoX7Q6VZcGJv2mIIZZnfWo0ZFDKUYhvik5p0jUkya1N/CjpVG5g/Clq7QOxiUR8+RyQIBJLEA7gFmMDwp+HxtpM0W37wy7kwp3VZbujwEUSbBDpTfcfCoeV/qI8ZtlMhtuVjLECMsRETtFdTjVsEsLbyQqk6ahZy/e5Zj6073EdKXuI6VMNK3xy2pYrbcFjmaAupgCTrvAHpTW4zaOebTnPo8gHMIywdelP8AcfCue4jpTDXG41akH2byAVGg0DRI+L90elRWuI2FUqLd3KVyEFiRlIiAC+nyqb3IdKXuXhTDaivcUsOQWtXDAAiYBAMgMoaGAPWa7c4rZZ87WrhMg790lfhJXNlJHIkVL7j4UvcPCmHlf66nHraliLbgsczaLqYCz8XRQPlUR4jYZQptOAGLjLCwzTJBVhvmPrUgwQ6U9MF4Uwlrgxto5ctt+6GAzHNo3xCSxJnxqxhr4CqqIwAEAdB03p9nC+FELGHHSmG1Xtlj900ewSwomorNrwq4gqofSpUqBUqVKg4wqB7dWK5loKD2qgbD0TZKabdAKOGrnuvhRX2Vc9lQCvdfCl7r4UV9lS9lQCvdfCl7r4UV9lS9nQCvdfCl7r4UV9lS9lQCvdfCl7r4UV9lS9lQCxhfCnLhqJeyrot0FBLFWUtVYFunKlA1EqUCkBSoFSpUqBUqVKgVKlSoFSpUqBUqVKgVKlSoFSpUqBUqVKgVKlSoFSpUqBUqVKgVKlSoFSpUqD//2Q=="
            rating={3}
          />
          <Products
            title="ONCE UPON ON A RIVER"
            price={50}
            img="http://mindjoggle.com/wp-content/uploads/2019/02/once-upon-a-river-cover.jpg"
            rating={5}
            id="2"
          />
          <Products
            title="BHAGWAD GEETA"
            price={0}
            img="https://images-na.ssl-images-amazon.com/images/I/91n7e4ULsKL.jpg"
            rating={5}
            id="3"
          />
          <Products
            title="AS BRIGHT AS HEAVEN"
            price={20}
            id="4"
            img="data:image/jpeg;base64,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"
            rating={3}
          />
        </div>

        <div className="home_row grid grid-cols-1">
          <Products
            title="SAMSUNG GALAXY Z FOLD 3"
            price={200}
            id="5"
            img="https://images.samsung.com/ph/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg?imwidth=720"
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}
export default Home

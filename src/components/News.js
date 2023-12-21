import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class news extends Component {
  articles = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Joel Khalili",
      title: "Fresh Bitcoin Hype Shows Crypto Just Can’t Help Itself",
      description:
        "After crashes, scandals, and SBF’s guilty verdict, many hoped the crypto industry would grow up. Speculation around the arrival of a spot bitcoin ETF shows old hype dies hard.",
      url: "https://www.wired.com/story/bitcoin-etf-crypto-investments/",
      urlToImage:
        "https://media.wired.com/photos/65668f0cb38d7a2373721a48/191:100/w_1280,c_limit/Crpyto-Can't-Help-Itself-Business-1400047284.jpg",
      publishedAt: "2023-11-29T12:00:00Z",
      content:
        "The prospect that US residents may soon be able to invest in bitcoin through their brokerage, as if it were a regular stock, has prompted a fresh round of hype in crypto circlesand a surge in crypto … [+2137 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Kliment Dukovski",
      title: "How to Buy Bitcoin Minetrix in 2023 – Complete Guide",
      description:
        "Bitcoin Minetrix is a crypto project aiming to bring Bitcoin mining to the masses using an innovative feature called stake-to-mine. […]\nThe post How to Buy Bitcoin Minetrix in 2023 – Complete Guide appeared first on ReadWrite.",
      url: "https://readwrite.com/cryptocurrency/how-to-buy-bitcoin-minetrix/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/11/Bitcoin-Minetrix.jpg",
      publishedAt: "2023-11-27T11:55:20Z",
      content:
        "Bitcoin Minetrix is a crypto project aiming to bring Bitcoin mining to the masses using an innovative feature called stake-to-mine. You no longer need expensive Bitcoin mining hardware and electricit… [+12517 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "'We have no intention of selling': El Salvador's millennial president touts the country's bitcoin investment as the token soars",
      description:
        "Nayib Bukele said if El Salvador sold all its bitcoin at current prices, it would recover 100% of its investment and see a profit more than $3,600,000.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-el-salvador-bukele-millennial-president-profits-crypto-btc-2023-12",
      urlToImage:
        "https://i.insider.com/656de75b58e7c0c29a29222b?width=1200&format=jpeg",
      publishedAt: "2023-12-04T15:52:51Z",
      content:
        "Bitcoin breached $42,000 on Monday for the first time in 20 months, and El Salvador's millennial president Nayib Bukele took to X to tout his country's investment in the crypto amid the big gains. \r\n… [+1237 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Matt Burgess",
      title:
        "Scammers Are Tricking Anti-Vaxxers Into Buying Bogus Medical Documents",
      description:
        "On Telegram, scammers are impersonating doctors to sell fake Covid-19 vaccination certificates and other products, showing how criminals are taking advantage of conspiracy theories.",
      url: "https://www.wired.com/story/telegram-covid-19-vaccination-fakes/",
      urlToImage:
        "https://media.wired.com/photos/657cdc0f0bfff3d8273cf8dd/191:100/w_1280,c_limit/Anti-Vaxxers-sold-fake-medical-docs-Security-GettyImages-924224840.jpg",
      publishedAt: "2023-12-18T12:00:00Z",
      content:
        "Draper and Proops say the efforts used repeated messaging, often replying to verified accounts on X that are linked to anti-vaccination sentiments, and consistently mentioned conspiracy theories such… [+2346 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "'We have no intention of selling': El Salvador's millennial president touts the country's bitcoin investment as the token soars",
      description:
        "Nayib Bukele said if El Salvador sold all its bitcoin at current prices, it would recover 100% of its investment and see a profit more than $3,600,000.",
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-el-salvador-bukele-millennial-president-profits-crypto-btc-2023-12",
      urlToImage:
        "https://i.insider.com/656de75b58e7c0c29a29222b?width=1200&format=jpeg",
      publishedAt: "2023-12-04T15:52:51Z",
      content:
        "Bitcoin breached $42,000 on Monday for the first time in 20 months, and El Salvador's millennial president Nayib Bukele took to X to tout his country's investment in the crypto amid the big gains. \r\n… [+1237 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Matt Burgess",
      title:
        "Scammers Are Tricking Anti-Vaxxers Into Buying Bogus Medical Documents",
      description:
        "On Telegram, scammers are impersonating doctors to sell fake Covid-19 vaccination certificates and other products, showing how criminals are taking advantage of conspiracy theories.",
      url: "https://www.wired.com/story/telegram-covid-19-vaccination-fakes/",
      urlToImage:
        "https://media.wired.com/photos/657cdc0f0bfff3d8273cf8dd/191:100/w_1280,c_limit/Anti-Vaxxers-sold-fake-medical-docs-Security-GettyImages-924224840.jpg",
      publishedAt: "2023-12-18T12:00:00Z",
      content:
        "Draper and Proops say the efforts used repeated messaging, often replying to verified accounts on X that are linked to anti-vaccination sentiments, and consistently mentioned conspiracy theories such… [+2346 chars]",
    },

  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
   async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=51ae79648918445f8ae864d3c2d8ffe5';
    let data = await fetch(url);
    let  parsedata = await data.json();
    this.setState({articles: parsedata.articles})
  }
  render() {
    return (
      <div className="container my-5">
        <h1>Top HeadLInes</h1>
        <div className="row mt-5">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url?element.url:'https://s.yimg.com/ny/api/res/1.2/mpCqLMDMaJDMFPqS3b1Y_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2020-08/496991c0-e740-11ea-bff2-8f8704b719d3'}
                    />
                  </div>;
          })}
        </div>
      </div>
    );
  }
}

export default news;

"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from "react-slick";
import { AvailableLanguages } from '@/i18n/settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/pages/project.scss';

import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AlarmOnRoundedIcon from '@mui/icons-material/AlarmOnRounded';
import VerifiedIcon from '@mui/icons-material/Verified';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from '@mui/material/Button';

export default function ProjectPage(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const settingsTop: Settings = {
    infinite: true,
    draggable: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    waitForAnimate: false,
    pauseOnHover: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const settingsBottom: Settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    draggable: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const importantSectionRef = useRef<HTMLDivElement | null>(null);
  const [currentUsage, setCurrentUsage] = useState<"mobileOrder" | "takeout" | "waiting">("mobileOrder");

  const handleScrollToImportantSection = () => {
    if (importantSectionRef.current) {
      const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const headerHeightRem = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
      const headerHeightPx =  parseFloat(headerHeightRem) * fontSize;
      const offsetTop = importantSectionRef.current.offsetTop - headerHeightPx;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const buyerBenefits = [
    {
      icon: LocalDiningOutlinedIcon,
      title: "ストレスフリーな注文体験",
      description: "店内で並ばずにスマホから注文できるから、待ち時間ゼロで快適。"
    },
    {
      icon: AlarmOnRoundedIcon,
      title: "時間を自由にコントロール",
      description: "テイクアウトや順番受付機能で、自分のタイミングで利用可能。"
    },
    {
      icon: TaskAltOutlinedIcon,
      title: "お得で分かりやすい",
      description: "メニューやクーポンが一目で確認できて、選びやすくてお得。"
    }
  ];

  const sellerBenefits = [
    {
      icon: MobileFriendlyIcon,
      title: "導入がカンタン",
      description: "個人・法人問わず、複雑な手続きなしで今日からすぐにスタート可能。"
    },
    {
      icon: ThumbUpOffAltOutlinedIcon,
      title: "人手不足でも効率UP",
      description: "注文受付を自動化することで、少ない人手でもスムーズな運営が可能。"
    },
    {
      icon: InsightsOutlinedIcon,
      title: "新規顧客の獲得",
      description: "オンライン掲載で新しいお客さんに見つけてもらいやすくなる。"
    }
  ];

  const usageMenu: { type: "mobileOrder" | "takeout" | "waiting", title: string }[] = [
    { type: "mobileOrder", title: "モバイルオーダー" },
    { type: "takeout", title: "テイクアウト予約" },
    { type: "waiting", title: "順番受付" },
  ];

  const usageCards: { type: "mobileOrder" | "takeout" | "waiting", usage: { title: string, description: string, img: string }[] }[] = [
    { type: "mobileOrder", usage: [
      { title: "QR読み取り", description: "店内・テーブルのQRコードを読み取り、好みに合わせて商品を注文", img: "/assets/img/usage-qrcode.webp" },
      { title: "アプリで注文", description: "アプリ内で商品の説明から\n注文・カスタムまで全て完結", img: "/assets/img/usage-select.webp" },
      { title: "商品到着", description: "注文した商品が完成したら\nスタッフがテーブルまでお届け", img: "/assets/img/usage-food.webp" }
    ]},
    { type: "takeout", usage: [
      { title: "アプリで注文", description: "好みに合わせて商品を選択\nカートから簡単注文", img: "/assets/img/usage-select.webp" },
      { title: "商品待ち", description: "商品した商品が準備完了になると\n通知をみて店舗へ", img: "/assets/img/usage-alert.webp" },
      { title: "受け取り", description: "あとは指定時間に店舗へ行き\n受け取るだけ", img: "/assets/img/usage-takeout.webp" }
    ]},
    { type: "waiting", usage: [
      { title: "受け付け", description: "店頭もしくはアプリで\nお店の待機受け付け", img: "/assets/img/usage-waiting.webp" },
      { title: "順番待ち", description: "混雑状況などをリアルタイムで確認\n順番になったら店頭へ", img: "/assets/img/usage-queue.webp" },
      { title: "入場", description: "受け付け番号を確認し\nそのまま入場", img: "/assets/img/usage-in.webp" }
    ]},
  ];

  const serviceFunctions = [
    { title: "マップ検索",
      img: "/assets/img/func-search.png", description: "お店の位置とメニュー情報をリアルタイムで共有してお互いによりよい環境を提供" },
    { title: "事前予約",
      img: "/assets/img/func-reserve.png", description: "食事時間やメニューを予約することでよりお得に、素早く食事時間を楽しめる" },
    { title: "クーポン",
      img: "/assets/img/func-point.png", description: "クーポンを活用してリピートするお客さんが続々増える" },
    { title: "データ提供",
      img: "/assets/img/func-data.png", description: "販売・購入したデータを提供。活用方法は人それぞれ" },
  ];

  const usersReview = [
    {
      profile: "https://i.pinimg.com/236x/2e/f2/ff/2ef2ff27c77cc0f2a05ba28532ce7615.jpg",
      intro: "大学生・20代", name: "木村さん",
      review: "モバイルオーダーはとても最近利用します。スマホからよく注文しますが、\n出来上がったと同時に取りに行けるのが時間短縮にもなり便利です。"
    },
    {
      profile: "https://i.pinimg.com/236x/8f/82/f5/8f82f5869c905b26efc194fa6693e4cf.jpg",
      intro: "会社員・20代", name: "武田さん",
      review: "キッチンカーなど会社の前にできてくれると良いなと感じます。\nコンビニまでが遠いので会社の前にそういうのが欲しいです。"
    },
    {
      profile: "https://i.pinimg.com/236x/19/3d/16/193d1691a71d56476acb5c6300bd40f4.jpg",
      intro: "専門職・30代", name: "吉川さん",
      review: "前日にスマホからお昼ご飯を注文できれば、大量注文したいときも、\n販売者の方へ申し訳ないと思うことが今よりも減ると思います。"
    },
    {
      profile: "https://i.pinimg.com/236x/fe/0c/d2/fe0cd20d957761d3b11b6d364c5da8f2.jpg",
      intro: "大学生・20代", name: "田中さん",
      review: "私はお昼ご飯をほとんど会社で食べます。時間があまりとれないので、\nスマホで注文してから少しでも作業ができるので嬉しいです。"
    },
    {
      profile: "https://i.pinimg.com/236x/48/b4/16/48b41644a316e1943d496ad479feeaad.jpg",
      intro: "専門職・30代", name: "山本さん",
      review: "フードトラックなどを利用したことが今までは無かったし\nあまり知らなかったのですが、これを機に知って使いました。お昼の時間が楽しくなった。"
    },
  ]
  const usersMiniReview = [
    {
      profile: "https://i.pinimg.com/236x/4e/40/c8/4e40c85e23b69d6a8a2b6d7cb1ffaa59.jpg",
      name: "ゆうちゃん", review: "モバイルオーダーは最近とても利用します。"
    },
    {
      profile: "https://i.pinimg.com/236x/3a/11/57/3a115739bf254ca586b90df4ac8fd3b8.jpg",
      name: "すずっぴ", review: "フォードトラックはこれからたくさん出てほしい。"
    },
    {
      profile: "https://i.pinimg.com/236x/04/ac/d0/04acd07e6add92bded6c1425ed5e2ed0.jpg",
      name: "たかぽん", review: "アプリからメニューを注文できるのは便利。"
    },
    {
      profile: "https://i.pinimg.com/236x/aa/4d/00/aa4d0079e479a65aa029130f15d447a3.jpg",
      name: "わたにゃん", review: "クレジットカードを使えるところが少かったけど助かる。"
    },
    {
      profile: "https://i.pinimg.com/236x/7a/14/3a/7a143acbeca099392546077f6d06f946.jpg",
      name: "いっちー", review: "注文してお店の前に行ったらすぐ出てくれると嬉しい。"
    },
    {
      profile: "https://i.pinimg.com/236x/26/b8/cb/26b8cb2cb9d20b18422f0fb0657a0cb2.jpg",
      name: "やまぴー", review: "お昼の時間が少ないから近くのお店を探せるのが嬉しい。"
    },
    {
      profile: "https://i.pinimg.com/236x/82/13/61/821361b0264e5a34d5c4fc57cde42baf.jpg",
      name: "なっくん", review: "キャッシュレスに対応しているのが良い！"
    },
    {
      profile: "https://i.pinimg.com/236x/8e/aa/de/8eaade4e3d73cc21a81ee271c0488386.jpg",
      name: "コバッチ", review: "決済方法で迷わないのはストレスフリーです。"
    },
    {
      profile: "https://i.pinimg.com/736x/4e/6d/3b/4e6d3b6686c0974309b8aa317694c8f7.jpg",
      name: "まっつん", review: "限られた時間の中でも、時間の節約になっています。"
    },
  ]

  const serviceImportantLists = [
    "簡単な操作",
    "初期費用・運営コストゼロ",
    "3か月無料サポート",
    "契約期間などの縛りなし",
  ]

  return (
    <article>
      {/* Service Header */}
      <div className="service-header">
        <div className="container">
          <div className="service-main-wrapper">
            <div className="left-wrapper">
              <p className="service-description">
                Hirukuru
              </p>
              <h1 className="service-name">
                ヒルクル
              </h1>
              <h3 className="service-description-sub">
                販売者との購入者を繋げて、<br/>
                食事時間をより充実に。<br/>
                みんなのAll in Oneサービス
              </h3>
              <div className="service-btn-wrapper">
                <Link className="service-btn" href='https://hirukuru.com/search/map' target='_blank'>
                  無料ではじめる
                </Link>
                <button className="intro-btn" onClick={handleScrollToImportantSection}>
                  パートナー申請はこちら
                </button>
              </div>
            </div>
            <div className="right-wrapper" />
          </div>
        </div>
      </div>
      {/* Service Info */}
      <div className="service container">
        <div className="service-page">
          <div className="service-intro-wrapper">
            {/* Service Intro - Title */}
            <div className="service-title">
              <h3 className="title">
                お勧めポイント
              </h3>
            </div>
            <div className='service-benefit'>
              <div className='benefit-card'>
                <div className='benefit-title'>
                  <div className='text'>
                    販売者のメリット
                  </div>
                </div>
                {sellerBenefits.map((benefit, index) => (
                  <div key={index} className='card-item'>
                    <benefit.icon className='icon' />
                    <div className='title'>
                      {benefit.title}
                    </div>
                    <div className='description'>
                      {benefit.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className='benefit-card'>
                <div className='benefit-title'>
                  <div className='text'>
                    購入者のメリット
                  </div>
                </div>
                {buyerBenefits.map((benefit, index) => (
                  <div key={index} className='card-item'>
                    <benefit.icon className='icon' />
                    <div className='title'>
                      {benefit.title}
                    </div>
                    <div className='description'>
                      {benefit.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Service Intro - Usage */}
            <div className="service-title">
              <h2 className="title">
                ヒルクルの使い方
              </h2>
            </div>
            <div className='usage-menu'>
              {usageMenu.map((menu, index) => (
                <button
                  key={index}
                  className={`usage-btn ${currentUsage === menu.type ? "active" : ""}`}
                  onClick={() => setCurrentUsage(menu.type)}
                >
                  {menu.title}
                </button>
              ))}
            </div>
            <div className="service-usage">
              {usageCards.find(card => card.type === currentUsage)?.usage.map((card, index) => (
                <>
                  <div key={index} className="usage-card">
                    <div className="img-wrapper">
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className="title">
                      {card.title}
                    </div>
                    <div className="description">
                      {card.description}
                    </div>
                  </div>
                  {index < usageCards.length - 1 && (
                    <PlayArrowRoundedIcon className="usage-card-arrow" />
                  )}
                </>
              ))}
            </div>
            {/* Service Intro - Function */}
            <div className="service-title">
              <h2 className="title">
                もっとお得に、便利に
              </h2>
            </div>
            <div className="service-function">
              {serviceFunctions.map((func, index) => (
                <div key={index} className="function-card">
                  <h4 className="function-card-title">
                    {func.title}
                  </h4>
                  <div className="function-card-description">
                    {func.description}
                  </div>
                  <Image
                    className="function-card-image"
                    src={func.img}
                    alt={func.title}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
            {/* Service Intro - Users Review */}
            <div className="service-title">
              <h2 className="title">
                利用者の声
              </h2>
              <div className="service-review">
                <Slider {...settingsTop}>
                  {usersReview.map((review, index) => (
                    <div key={index} className="user-review-card">
                      <div className="card-profile-wrapper">
                        <div className="info-wrapper">
                          <Image
                            className="card-profile"
                            src={review.profile}
                            alt={review.name}
                            width={60}
                            height={60}
                          />
                          <div className="card-user">
                            <div className="info-intro">
                              {review.intro}
                            </div>
                            <div className="info-name">
                              {review.name}
                            </div>
                          </div>
                        </div>
                        <div className="card-review">
                          {review.review}
                        </div>
                      </div>
                      <Rating
                        className="card-rating"
                        value={5}
                        icon={<StarRoundedIcon fontSize="inherit" style={{ color: 'var(--rating-color)' }} />}
                        readOnly
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="service-review mini">
                <Slider {...settingsBottom}>
                  {[...usersMiniReview, ...usersMiniReview].map((review, index) => (
                    <div key={index} className="user-review-card">
                      <div className="card-profile-wrapper">
                        <div className="info-wrapper">
                          <Image
                            className="card-profile"
                            src={review.profile}
                            alt={review.name}
                            width={40}
                            height={40}
                          />
                          <div className="card-user">
                            <div className="info-name">
                              {`@${review.name}`}
                            </div>
                          </div>
                        </div>
                        <div className="card-review">
                          {review.review}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* Service Intro - Important */}
            <div ref={importantSectionRef} className="service-title">
              <h2 className="title">
                一緒に始めませんか？
              </h2>
            </div>
            <div className="service-important">
              <div className='left-container'>
                {serviceImportantLists.map((listContent, index) => (
                  <div key={index} className='important-card'>
                    {listContent}
                    <VerifiedIcon className='icon' />
                  </div>
                ))}
              </div>
              <div className='right-container'>
                <div className='title'>業界最低水準の手数料</div>
                <div className='price-card-wrapper'>
                  <div className='price-card'>
                    <div className='price-card-title'>{`初期費用・月額費用`}</div>
                    <div className='price'>0<span className='percent'>円</span></div>
                  </div>
                  <div className='price-card'>
                    <div className='price-card-title'>{`サービス手数料`}</div>
                    <div className='price'>2.65~<span className='percent'>%</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='service-extra'>
              {`※ 導入後はサービス内容についてオンラインサポートを提供いたします`}
            </div>
            <div className='service-action-wrapper'>
              <Link href='https://hirukuru.com/search/map' className='service-action-btn search' target='_blank'>
                近くの店舗を探す
              </Link>
              <Link href='https://hirukuru.com/service' className='service-action-btn partner' target='_blank'>
                導入を検討・申請
              </Link>
            </div>
          </div>
        </div>
        <div className='contact-btn-wrapper'>
          <Button
            className='contact-btn'
            sx={{ backgroundColor: '#06c705', color: 'var(--bg-color)' }}
            onClick={() => window.open('https://line.me/R/ti/p/@879wlklg', "_blank")}
          >
            <Image src="/assets/icon/line-simple.svg" alt="line" width={28} height={28} />
            <span className='description'>お問い合わせ</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
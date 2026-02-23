import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SpeedIcon from '@mui/icons-material/Speed';
import StoreIcon from '@mui/icons-material/Store';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TimerIcon from '@mui/icons-material/Timer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NfcIcon from '@mui/icons-material/Nfc';

export interface LandingReason {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  stats: string;
}

export interface LandingProblem {
  icon: React.ElementType;
  text: string;
  detail: string;
}

export interface LandingComparisonRow {
  item: string;
  traditional: string;
  hirukuru: string;
  benefit: string;
}

export interface LandingTestimonial {
  type: string;
  image: string;
  quote: string;
  name: string;
  result: string;
}

export interface LandingProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingUseCase {
  image: string;
  title: string;
  scenario: string;
  before: string;
  after: string;
  result: string;
}

export interface LandingFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  screenshot: string;
}

export interface LandingNavItem {
  id: string;
  targetId: string;
  label: string;
}

export function getLandingNavItems(): LandingNavItem[] {
  return [
    { id: 'overview', targetId: 'problem', label: '統計・課題' },
    { id: 'comparison', targetId: 'comparison', label: '比較・解決策' },
    { id: 'usecases', targetId: 'usecases', label: '事例・特徴' },
    { id: 'process', targetId: 'process', label: '導入・FAQ' },
  ];
}

export function getLandingContent() {
  return {
    reasons: [
      {
        number: '01',
        icon: SpeedIcon,
        title: '事前注文・自動決済でピークが崩れない',
        description:
          'ヒルクルでは、注文が確定してから調理が始まります。これにより、行列が発生しない、注文ミスが減る、回転率が安定する。結果として、同じ時間・同じ人数でも、売上が伸びる構造が生まれます。',
        stats: '回転率30%向上',
      },
      {
        number: '02',
        icon: PaymentIcon,
        title: '初期費用0円、売上が出た分だけの支払い',
        description:
          '新しいサービス導入で、最も大きな不安は「固定費」です。ヒルクルは、初期費用・高額な月額費用を一切取りません。売上が立った分だけ、手数料としてお支払いいただく売上連動型の料金設計です。売れなければ、負担も増えません。だから安心して始められます。',
        stats: '初期費用0円',
      },
      {
        number: '03',
        icon: SmartphoneIcon,
        title: 'アプリ不要。LINE・SNSから直接注文',
        description:
          'お客様に「新しいアプリを入れてください」と言う必要はありません。LINE公式アカウント、Instagram・Threadsのプロフィールリンクからそのまま注文画面へ。普段使っているツールの延長で、購入まで完結します。導線を止めないことが、ランチでは最も重要です。',
        stats: '注文完了率95%',
      },
      {
        number: '04',
        icon: SupportAgentIcon,
        title: '導入して終わりではありません',
        description:
          'ヒルクルは、「システムを渡して終わり」のサービスではありません。導入前の不安、運用中の悩み、売上を伸ばすための改善相談。すべて、専任スタッフが1対1でサポートします。初めての方でも、迷わず運用を続けられる体制を整えています。',
        stats: '専任サポート24時間',
      },
    ] satisfies LandingReason[],

    problems: [
      {
        icon: TimerIcon,
        text: 'ピークタイムに注文集中で現場が混乱する',
        detail: '12時〜13時の1時間に全注文の70%が集中。\nスタッフが対応しきれず、お客様を待たせてしまう。',
      },
      {
        icon: PeopleIcon,
        text: '行列ができると、新規のお客様が離脱する',
        detail: '5人以上の行列ができると、約40%のお客様が店を離れる。\nせっかく来店しても注文に至らない。',
      },
      {
        icon: TrendingUpIcon,
        text: '並んだ割に回転率は上がらない',
        detail: '待ち時間が長いのに、1時間あたりの処理件数は増えない。\nスタッフの負担だけが増える。',
      },
      {
        icon: RestaurantIcon,
        text: 'SNSで集客しても、現場で受けきれない',
        detail: 'Instagramで人気になっても、実際の来店時に受けきれず、せっかくの集客効果が無駄になる。',
      },
    ] satisfies LandingProblem[],

    comparison: [
      { item: '注文受付', traditional: '来店してから注文', hirukuru: '事前にスマホで注文完了', benefit: '待ち時間ゼロ' },
      { item: '決済', traditional: '来店時に現金・カード決済', hirukuru: '事前に自動決済', benefit: '会計待ちなし' },
      { item: '調理開始', traditional: '注文を受けてから調理', hirukuru: '事前注文で計画的に調理', benefit: 'ピーク時も安定' },
      { item: '受け取り', traditional: '注文→調理→会計→受け取り', hirukuru: '受け取り時間に来店するだけ', benefit: 'スムーズな受け渡し' },
    ] satisfies LandingComparisonRow[],

    testimonials: [
      {
        type: 'キッチンカー運営者',
        image: '/assets/lp/client1.png',
        quote: 'ピークタイムでも列ができなくなり、調理と受け渡しに集中できるようになりました。結果として、売上が安定しています。',
        name: 'K店店主',
        result: '売上30%増',
      },
      {
        type: '弁当販売店',
        image: '/assets/lp/client2.png',
        quote: '事前注文があることで、仕込み量の予測が立ち、廃棄がほとんどなくなりました。',
        name: 'M店長',
        result: '廃棄率80%減',
      },
      {
        type: '利用者（会社員）',
        image: '/assets/lp/client3.png',
        quote: '並ばずに受け取れるだけで、ランチの満足度がまったく違います。',
        name: 'Yさん',
        result: '待ち時間0分',
      },
    ] satisfies LandingTestimonial[],

    processSteps: [
      {
        step: '01',
        title: '登録と情報共有',
        description: 'まずはWebからカンタンにアカウント登録。その後、専用のフォーマットにて店舗の基本情報やメニューをご提出いただきます。',
        details: ['Webからのアカウント登録', '専用フォーマットへの情報記入', 'メニュー画像の共有'],
      },
      {
        step: '02',
        title: 'プラン提案と初期構築',
        description: 'いただいた情報を元に、お店に最適な運用方法をプランニング。メニュー登録やLINE・Instagram等との連携設定を代行します。',
        details: ['店舗に合わせた運用プラン提案', 'メニュー・商品のシステム登録代行', '各種連携の設定代行'],
      },
      {
        step: '03',
        title: '導入テストと運用開始',
        description: '最短3日でローンチ可能。現場でのテスト運用やスタッフ様へのレクチャーを行い、スムーズな運用開始をサポートします。',
        details: ['実稼働に向けたテスト運用', 'スタッフ様へのカンタンな操作レクチャー', '必要に応じたNFCタグ等の手配'],
      },
    ] satisfies LandingProcessStep[],

    faqs: [
      {
        question: '導入に必要なものはありますか？',
        answer:
          'スマートフォンまたはタブレットがあれば導入可能です。専用の機械やアプリのインストールは不要です。\nLINE公式アカウントをお持ちの場合は、すぐに連携できます。',
      },
      {
        question: '手数料はどのくらいかかりますか？',
        answer:
          '売上連動型の料金設計で、売上が立った分だけ手数料をお支払いいただきます。\n初期費用は一切かかりません。詳しい手数料率は導入相談時にご説明いたします。',
      },
      {
        question: '既存の注文システムと併用できますか？',
        answer:
          'はい、既存のシステムと併用可能です。\nヒルクルは事前注文専用のシステムとして、来店注文とは別に運用できます。もちろん段階的な導入も可能です。',
      },
      {
        question: 'メニュー登録は自分で行う必要がありますか？',
        answer:
          '専任スタッフがサポートいたします。初回はスタッフが一緒に作業しますので、各メニューの写真の準備だけお願いします。\nその後は管理画面から簡単に追加・変更が可能です。',
      },
      {
        question: 'キャンセルや返金はどうなりますか？',
        answer:
          'お客様のキャンセルは受付前まで可能で、自動返金システムが対応します。\nただし、注文したメニューの調理が始まった場合はキャンセルができない場合がありますのでご了承ください。',
      },
      {
        question: '導入後、すぐに効果は出ますか？',
        answer:
          '導入店舗の平均で、1週間以内に注文が入り始め、1ヶ月で安定した注文数に到達しています。\nSNSでの告知や既存顧客への案内で、より早く効果を実感できます。',
      },
    ] satisfies LandingFaq[],

    useCases: [
      {
        image: 'https://i.pinimg.com/736x/b4/28/c1/b428c1099f450480540cdbca49819b6f.jpg',
        title: 'オフィス街のランチタイム',
        scenario: '12:00-13:00の1時間に注文が集中',
        before: '来店注文で行列ができ、待ち時間10分以上',
        after: '事前注文で受け取り時間に来店、待ち時間0分',
        result: '処理件数2倍、顧客満足度向上',
      },
      {
        image: 'https://i.pinimg.com/1200x/c0/32/03/c032036c90ef21c7d39e73fc26530bb0.jpg',
        title: 'イベント会場のキッチンカー',
        scenario: 'イベント当日、予想以上の来場者',
        before: '現場で注文を受けて混乱、機会損失',
        after: '事前注文で準備完了、スムーズな提供',
        result: '売上30%増、機会損失ゼロ',
      },
      {
        image: 'https://i.pinimg.com/736x/7a/9b/b1/7a9bb1f56c75c984677711e1b5fc4395.jpg',
        title: '駅前の弁当販売店',
        scenario: '通勤ラッシュ時の注文対応',
        before: '朝の忙しい時間に注文対応で手が回らない',
        after: '前日・当日朝の事前注文で計画的に準備',
        result: '朝の売上50%増、スタッフ負担軽減',
      },
    ] satisfies LandingUseCase[],

    features: [
      {
        icon: ShoppingCartIcon,
        title: '事前注文システム',
        description: 'お客様が来店前にスマホで注文を完了。\nピークタイムでもスムーズに受け渡しが可能です。',
        screenshot: '/assets/lp/capture1.png',
      },
      {
        icon: StoreIcon,
        title: '注文管理・オペレーション',
        description: '注文を一目で把握できる効率的なオペレーション画面。\n受け渡し時間や注文状況をリアルタイムで確認し、スムーズな対応が可能です。',
        screenshot: '/assets/lp/capture2.png',
      },
      {
        icon: LocationOnIcon,
        title: '店舗検索・マップ',
        description: 'マップ検索でお客様が自分で店舗を見つけられる仕組み。\n位置情報から最寄りの店舗を見つけ、スムーズに来店できます。',
        screenshot: '/assets/lp/capture3.png',
      },
    ] satisfies LandingFeature[],
  };
}
import PaymentIcon from '@mui/icons-material/Payment';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import InsightsIcon from '@mui/icons-material/Insights';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CodeIcon from '@mui/icons-material/Code';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export interface RegizeroNavItem {
  id: string;
  targetId: string;
  label: string;
}

export interface RegizeroProblem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface RegizeroFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface RegizeroBenefit {
  title: string;
  description: string;
  stats: string;
}

export interface RegizeroPlan {
  name: string;
  monthlyFee: string;
  commissionRate: string;
  recommendedFor: string;
}

export interface RegizeroStep {
  step: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface RegizeroFaq {
  question: string;
  answer: string;
}

export interface RegizeroLandingContent {
  hero: {
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    highlights: string[];
  };
  problems: RegizeroProblem[];
  systemFocus: { title: string; desc: string }[];
  benefits: RegizeroBenefit[];
  features: RegizeroFeature[];
  plans: RegizeroPlan[];
  steps: RegizeroStep[];
  faqs: RegizeroFaq[];
}

export function getRegizeroLandingNavItems(): RegizeroNavItem[] {
  return [
    { id: 'experience', targetId: 'experience', label: '体験' },
    { id: 'benefits', targetId: 'benefits', label: '導入効果' },
    { id: 'features', targetId: 'features', label: '機能' },
    { id: 'pricing', targetId: 'pricing', label: '料金' },
  ];
}

export function getRegizeroLandingContent(): RegizeroLandingContent {
  return {
    hero: {
      titleTop: 'レジの概念を、',
      titleBottom: 'ゼロにする。',
      subtitle: '並ばない。待たせない。迷わせない。\n顧客体験を研ぎ澄まし、現場のオペレーションから「摩擦」を排除する新時代のオーダーシステム。',
      highlights: ['初期費用0円', '最短3日導入', '制限なしのフル機能'],
    },

    problems: [
      {
        icon: SpeedIcon,
        title: '決済の遅延は、体験の劣化',
        description: 'ピークタイムにおける「待ち時間」がもたらす機会損失と、顧客満足度の低下を未然に防ぎます。',
      },
      {
        icon: TouchAppIcon,
        title: '直感的でないシステムからの脱却',
        description: 'マニュアルは不必要。誰もが瞬時に理解し、直感で操作できる洗練されたUI/UXを提供します。',
      },
      {
        icon: AllInclusiveIcon,
        title: '点在するソリューションの統合',
        description: 'バラバラのツールによる運用負荷を実質ゼロへ。一つのプラットフォームで業務の全てを完結させます。',
      },
    ],

    systemFocus: [
      { 
        title: 'シームレスな導線設計', 
        desc: 'LINEやGoogle Mapsから離脱させずにオーダー画面へ遷移。お客様のスマートフォンが、そのまま洗練されたレジ・注文端末へと進化します。' 
      },
      { 
        title: 'フリクションレスな操作性', 
        desc: '複雑な設定や学習コストは一切不要。現場の全スタッフが初日から迷わず即座に活用できる、究極のシンプルネスを追求しました。' 
      },
      { 
        title: 'スケーラブルな成長基盤', 
        desc: '売上規模に完全に連動したフェアドリブンな料金体系。ビジネスの成長スピードを妨げず、システムがスケールアップをバックアップします。' 
      }
    ],

    benefits: [
      {
        title: 'ピークタイムの回転率向上',
        description: '注文と決済をお客様のスマートフォンに移行することで、スタッフの負担を削減し、回転率を飛躍的に高めます。',
        stats: '最大130%向上'
      },
      {
        title: 'オーダーミスの完全排除',
        description: '口頭での注文伝達をなくし、デジタル化することで、言った言わないのトラブルやオーダーミスを根絶します。',
        stats: 'ミス率ゼロへ'
      },
      {
        title: '客単価の自然な向上',
        description: '美しいUIでのメニュー提示や、適切なタイミングでのレコメンド機能により、ついで買いを自然に誘発します。',
        stats: '平均単価UP'
      }
    ],

    features: [
      {
        icon: TouchAppIcon,
        title: 'スマート・モバイルオーダー',
        description: '卓上・テイクアウト・事前注文。あらゆるシナリオをモバイル一つで完結。',
      },
      {
        icon: QrCode2Icon,
        title: 'ダイレクトアクセス(NFC/QR)',
        description: 'アプリのインストール不要。かざすだけ、読み込むだけで即座に注文体験がスタート。',
      },
      {
        icon: PaymentIcon,
        title: 'スマートなオンライン決済',
        description: '注文と同時に決済までデバイス上で完結。会計時の混雑を解消し、レジ締め作業も大幅に軽減されます。',
      },
      {
        icon: SupportAgentIcon,
        title: 'プロフェッショナル伴走支援',
        description: '導入して終わりではありません。データに基づく店舗改善まで専任チームがサポート。',
      },
      {
        icon: AutoAwesomeIcon,
        title: 'オールインワン機能',
        description: '上位プランへのアップセル制限なし。全ての機能が最初から解放された真のプラットフォーム。',
      },
      {
        icon: InsightsIcon,
        title: 'データ・インサイト分析',
        description: '日々のオペレーションデータを可視化。勘に頼らない確実な店舗改善をアシスト。',
      },
    ],

    plans: [
      { name: 'フリー', monthlyFee: '0円', commissionRate: '1.7%', recommendedFor: '月商100万円未満' },
      { name: 'ビジネス', monthlyFee: '5,000円', commissionRate: '1.2%', recommendedFor: '月商100万円〜500万円' },
      { name: 'エンタープライズ', monthlyFee: '15,000円', commissionRate: '1.0%', recommendedFor: '月商500万円以上' },
    ],

    steps: [
      {
        step: '01',
        title: 'ヒアリングと情報整理',
        description: 'まずはオンラインで簡単なヒアリングを行い、専用フォーマットにて店舗の基本情報やメニューをご提出いただきます。',
        bullets: ['オンラインでのヒアリング', '専用フォーマットへの情報記入', 'メニュー画像の共有'],
      },
      {
        step: '02',
        title: 'プラン提案と初期構築',
        description: 'いただいた情報を元に最適なプランをご提案します。内容にご納得いただいた後、システムへのメニュー登録や初期設定を代行します。',
        bullets: ['店舗規模に合わせたプランのご提案', 'メニュー・商品のシステム登録代行', '基本アカウントの構築'],
      },
      {
        step: '03',
        title: '導入テストと運用サポート',
        description: '情報のやり取りから最短3日でローンチ。導入時のテストから稼働後の運用に関するご相談までしっかりとサポートします。',
        bullets: ['実稼働に向けたテスト検証', 'スタッフ様へのカンタンな操作レクチャー', '導入後の継続的なサポート'],
      },
    ],

    faqs: [
      {
        question: 'プランによって提供される機能に制限はありますか？',
        answer: '一切ありません。我々は「機能の出し惜しみ」を理念として持ちません。最初から全てのプランで最高の体験と全機能をご提供します。',
      },
      {
        question: '申し込みから本番稼働までの期間はどの程度ですか？',
        answer: 'メニュー画像等のご提供いただいた情報が揃っていれば、最短3日間で導入から本番稼働までが可能です。専属のチームがフルサポートします。',
      },
      {
        question: 'LINE公式アカウントを持っていなくても導入できますか？',
        answer: 'もちろん可能です。独自のWebブラウザベースの注文フローやNFCを活用したダイレクトな導線設計も用意しており、環境に依存しない構成を実現できます。',
      },
      {
        question: '既存のPOSレジと連携することは可能ですか？',
        answer: '本システムは独立したPOSシステムとして機能するため、既存のPOSレジとの直接的なAPI連携等は行っておりません。ただし、既存システムと併用して導入・運用していただくことは可能です。詳細な運用方法については、お気軽にお問い合わせください。',
      }
    ],
  };
}

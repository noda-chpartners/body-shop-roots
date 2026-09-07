import heroImage from '@/assets/images/hero02.png';
import logoImage from '@/assets/images/logo.png';
import bodyRepairImage from '@/assets/images/service-body-repair-v2.jpg';
import maintenanceImage from '@/assets/images/service-maintenance-v2.jpg';
import salesImage from '@/assets/images/service-sales-v2.jpg';
import insuranceImage from '@/assets/images/service-insurance-v2.jpg';
import rentalImage from '@/assets/images/service-rental-v2.jpg';
import towingImage from '@/assets/images/service-towing-v2.jpg';

export const siteContent = {
  meta: {
    title: 'Body shop Roots | 埼玉県桶川市のボディショップ',
    description:
      '埼玉県桶川市のBody shop Roots。鈑金塗装・整備・車両販売・保険・レンタカー・レッカーまで、クルマの相談をひとつの窓口でサポートします。',
  },
  brand: {
    name: 'Body shop Roots',
    shortName: 'Roots',
    logo: logoImage,
  },
  navigation: [
    { label: '私たちについて', href: '#about' },
    { label: '事業内容', href: '#services' },
    { label: '店舗情報', href: '#information' },
    { label: 'お問い合わせ', href: '#contact' },
    { label: 'アクセス', href: '#access' },
  ],
  hero: {
    image: heroImage,
    imageAlt: 'Body shop Roots 店舗外観',
    eyebrow: 'CAR SERVICE / OKEGAWA',
    title: ['クルマのこと。', 'まるごと、Rootsへ。'],
    lead: 'キズやへこみの修復から日常の整備、乗り換え、もしもの備えまで。桶川で、あなたのカーライフに寄り添います。',
    note: '埼玉県桶川市のボディショップ',
  },
  serviceTicker: ['鈑金塗装', '整備', '販売', '保険', 'レンタカー', 'レッカー'],
  about: {
    label: 'ABOUT ROOTS',
    title: ['車のことを、', 'ひとつの窓口で。'],
    body:
      'Body shop Rootsは、埼玉県桶川市にある地域密着のボディショップです。鈑金塗装をはじめ、整備、車両販売、保険、レンタカー、レッカーまでを取り扱い、相談から対応までをひとつの窓口でつなげています。いざというときも、日々のメンテナンスも、クルマのことで迷ったら、まずはRootsへご相談ください。',
    primaryImage: maintenanceImage,
    primaryImageAlt: 'エンジンルームを点検する整備スタッフ',
    secondaryImage: bodyRepairImage,
    secondaryImageAlt: '車体のへこみを補修する鈑金スタッフ',
  },
  services: {
    label: 'OUR SERVICES',
    title: '6つのサービス',
    lead: '修理も、整備も、乗り換えも、もしもの備えも。暮らしの中のクルマごとを、幅広くサポートします。',
    items: [
      {
        number: '01',
        title: '鈑金塗装',
        english: 'BODY REPAIR & PAINT',
        body: '小さなキズから大きな損傷まで、丁寧な鈑金と塗装で、お車の美しさと安心を取り戻します。',
        icon: 'paint',
        image: bodyRepairImage,
        imageAlt: '車体のへこみを補修する鈑金スタッフ',
      },
      {
        number: '02',
        title: '整備',
        english: 'MAINTENANCE',
        body: '点検・車検・日常のメンテナンスまで。安全に乗り続けられるよう、状態を見ながらサポートします。',
        icon: 'wrench',
        image: maintenanceImage,
        imageAlt: 'エンジンルームを点検する整備スタッフ',
      },
      {
        number: '03',
        title: '販売',
        english: 'SALES',
        body: '乗り換えや新規のご購入を、用途や予算に合わせてご提案。購入後のサポートも含めてご相談いただけます。',
        icon: 'car',
        image: salesImage,
        imageAlt: '車両の状態を説明する販売スタッフ',
      },
      {
        number: '04',
        title: '保険',
        english: 'INSURANCE',
        body: '万が一に備える自動車保険のご相談も対応。修理や日常のカーライフとあわせて、安心の選択肢をご案内します。',
        icon: 'shield',
        image: insuranceImage,
        imageAlt: '自動車保険について説明するスタッフ',
      },
      {
        number: '05',
        title: 'レンタカー',
        english: 'RENTAL CAR',
        body: '修理中の代車や、短期間だけ車が必要なときにも。状況に合わせてレンタカーをご用意します。',
        icon: 'key',
        image: rentalImage,
        imageAlt: 'レンタカーの車両状態を確認するスタッフと利用者',
      },
      {
        number: '06',
        title: 'レッカー',
        english: 'TOWING SERVICE',
        body: '事故や故障で動けなくなったときもご相談ください。現場からの搬送まで、迅速に対応します。',
        icon: 'truck',
        image: towingImage,
        imageAlt: '積載車に車両を固定するレッカースタッフ',
      },
    ],
  },
  craft: {
    label: 'BODY REPAIR & PAINT',
    title: 'キズやへこみ、塗装のご相談。',
    body:
      'バンパーの擦り傷、ドアのへこみ、塗装の劣化など、見た目と安心に関わるお悩みを丁寧にお伺いします。状態を確認したうえで、必要な作業内容とお見積もりをご案内しますので、まずはお気軽にお問い合わせください。',
    image: bodyRepairImage,
    imageAlt: '車体のへこみを補修する鈑金作業',
  },
  gallery: {
    label: 'CAR LIFE',
    title: '車のそばに、Roots。',
    body: '販売、レンタカー、レッカーまで。日常からもしものときまで、クルマのある暮らしに寄り添います。',
    items: [
      {
        image: salesImage,
        imageAlt: '車両の状態を説明する販売スタッフ',
      },
      {
        image: rentalImage,
        imageAlt: 'レンタカーの車両状態を確認するスタッフと利用者',
      },
      {
        image: towingImage,
        imageAlt: '積載車に車両を固定するレッカースタッフ',
      },
    ],
  },
  shop: {
    label: 'INFORMATION',
    title: '店舗情報',
    details: [
      { term: '店舗名', description: 'Body shop Roots' },
      { term: '電話番号', description: '048-662-9477', href: 'tel:0486629477' },
      { term: '営業時間', description: '10:00-19:00' },
      { term: '定休日', description: '日祝' },
      { term: '事業内容', description: '鈑金塗装 / 整備 / 販売 / 保険 / レンタカー / レッカー' },
    ],
  },
  access: {
    label: 'ACCESS',
    title: 'アクセス',
    postalCode: '〒363-0026',
    address: '埼玉県桶川市上日出谷791-1',
    mapHref:
      'https://www.google.com/maps/search/?api=1&query=Body+shop+Roots+%E5%9F%BC%E7%8E%89%E7%9C%8C%E6%A1%B6%E5%B7%9D%E5%B8%82%E4%B8%8A%E6%97%A5%E5%87%BA%E8%B0%B7791-1',
    mapLabel: 'Googleマップで店舗情報を見る',
    image: heroImage,
    imageAlt: 'Body shop Roots 店舗外観',
  },
  contact: {
    label: 'CONTACT',
    title: 'お見積もり・クルマのご相談は、Rootsへ。',
    body:
      '鈑金塗装、整備、販売、保険、レンタカー、レッカーまで、クルマに関するご相談をまとめてお受けします。お見積もりや作業のご依頼はもちろん、「まずは話を聞いてみたい」という段階でも構いません。お電話、または公式SNSからお気軽にご連絡ください。',
    phone: '048-662-9477',
    phoneHref: 'tel:0486629477',
    hours: '営業時間 10:00-19:00 / 定休日 日祝',
  },
  social: [
    {
      label: 'Instagram',
      handle: '@BODYSHOPROOTS',
      icon: 'instagram',
      href: 'https://www.instagram.com/BODYSHOPROOTS/',
    },
    {
      label: 'LINE',
      handle: '@391fbuzs',
      icon: 'line',
      href: 'https://line.me/R/ti/p/@391fbuzs',
    },
  ],
  footer: {
    copyright: '© Body shop Roots',
  },
} as const;

export type IconName =
  | 'paint'
  | 'car'
  | 'shield'
  | 'key'
  | 'phone'
  | 'map'
  | 'clock'
  | 'truck'
  | 'wrench'
  | 'arrow';

export type BrandIconName = 'instagram' | 'line';

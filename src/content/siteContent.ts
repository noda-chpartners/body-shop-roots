import heroImage from '@/assets/images/hero.png';
import logoImage from '@/assets/images/logo.png';
import bodyworkImage from '@/assets/images/bodywork.jpg';
import workshopImage from '@/assets/images/workshop.jpg';
import paintWorkImage from '@/assets/images/paint-work.jpg';
import carSalesImage from '@/assets/images/car-sales.jpg';
import insuranceImage from '@/assets/images/insurance.jpg';
import rentalRoadImage from '@/assets/images/rental-road.jpg';
import carDetailImage from '@/assets/images/car-detail.jpg';

export const siteContent = {
  meta: {
    title: 'Body shop Roots | 埼玉県桶川市のボディショップ',
    description:
      '埼玉県桶川市のBody shop Roots。板金塗装、販売、各種保険、レンタカーを取り扱っています。',
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
    { label: 'アクセス', href: '#access' },
  ],
  hero: {
    image: heroImage,
    imageAlt: 'Body shop Roots 店舗外観',
    eyebrow: 'CAR SERVICE / OKEGAWA',
    title: ['クルマのこと。', 'まるごと、Rootsへ。'],
    lead: '板金塗装から販売、各種保険、レンタカーまで。',
    note: '埼玉県桶川市のボディショップ',
  },
  serviceTicker: ['板金塗装', '販売', '各種保険', 'レンタカー'],
  about: {
    label: 'ABOUT ROOTS',
    title: ['車のことを、', 'ひとつの窓口で。'],
    body:
      'Body shop Rootsは、埼玉県桶川市にあるボディショップです。板金塗装をはじめ、車両販売、各種保険、レンタカーを取り扱っています。',
    primaryImage: workshopImage,
    primaryImageAlt: '自動車整備工場で作業するスタッフ',
    primaryImageCredit: 'Photo: Jose Ricardo Barraza Morachis / Pexels',
    secondaryImage: carDetailImage,
    secondaryImageAlt: '車のヘッドライトとボディのディテール',
    secondaryImageCredit: 'Photo: Shane West / Pexels',
  },
  services: {
    label: 'OUR SERVICES',
    title: '4つのサービス',
    items: [
      {
        number: '01',
        title: '板金塗装',
        english: 'BODY REPAIR & PAINT',
        icon: 'paint',
        image: paintWorkImage,
        imageAlt: '車のバンパーを塗装する作業者',
        imageCredit: 'Photo: Mohammad Hammad / Pexels',
      },
      {
        number: '02',
        title: '販売',
        english: 'SALES',
        icon: 'car',
        image: carSalesImage,
        imageAlt: '車の鍵を受け渡す様子',
        imageCredit: 'Photo: Gustavo Fring / Pexels',
      },
      {
        number: '03',
        title: '各種保険',
        english: 'INSURANCE',
        icon: 'shield',
        image: insuranceImage,
        imageAlt: '書類を確認する様子',
        imageCredit: 'Photo: Monstera Production / Pexels',
      },
      {
        number: '04',
        title: 'レンタカー',
        english: 'RENTAL CAR',
        icon: 'key',
        image: rentalRoadImage,
        imageAlt: '道路を走る車',
        imageCredit: 'Photo: Nguyen Khac Tien / Pexels',
      },
    ],
  },
  craft: {
    label: 'BODY REPAIR & PAINT',
    title: 'キズやへこみ、塗装のご相談。',
    body:
      'お車のキズやへこみ、塗装に関するご相談を承ります。まずはお電話でお問い合わせください。',
    image: bodyworkImage,
    imageAlt: '車体のへこみを補修する板金作業',
    imageCredit: 'Photo: Melih Can / Pexels',
  },
  gallery: {
    label: 'CAR LIFE',
    title: '車のそばに、Roots。',
    items: [
      {
        image: carDetailImage,
        imageAlt: '車のヘッドライトとボディのディテール',
        imageCredit: 'Photo: Shane West / Pexels',
      },
      {
        image: rentalRoadImage,
        imageAlt: '道路を走る車',
        imageCredit: 'Photo: Nguyen Khac Tien / Pexels',
      },
      {
        image: workshopImage,
        imageAlt: '自動車整備工場で作業するスタッフ',
        imageCredit: 'Photo: Jose Ricardo Barraza Morachis / Pexels',
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
      { term: '事業内容', description: '板金塗装 / 販売 / 各種保険 / レンタカー' },
    ],
  },
  access: {
    label: 'ACCESS',
    title: 'アクセス',
    postalCode: '〒363-0026',
    address: '埼玉県桶川市上日日出谷791-1',
    station: '桶川駅より徒歩',
    image: heroImage,
    imageAlt: 'Body shop Roots 店舗外観',
  },
  contact: {
    label: 'CONTACT',
    title: 'クルマのご相談は、Rootsへ。',
    body: '板金塗装、販売、各種保険、レンタカーについて、お電話でお問い合わせください。',
    phone: '048-662-9477',
    phoneHref: 'tel:0486629477',
    hours: '営業時間 10:00-19:00 / 定休日 日祝',
  },
  social: [
    { label: 'Instagram', handle: '@BODYSHOPROOTS', icon: 'instagram' },
    { label: 'LINE', handle: '@391fbuzs', icon: 'line' },
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
  | 'arrow';

export type BrandIconName = 'instagram' | 'line';

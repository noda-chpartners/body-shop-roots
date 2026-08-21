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
      '埼玉県桶川市のBody shop Roots。鈑金塗装、整備、販売、保険、レンタカー、レッカーを取り扱っています。',
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
    lead: '鈑金塗装、整備、販売、保険、レンタカー、レッカーまで。',
    note: '埼玉県桶川市のボディショップ',
  },
  serviceTicker: ['鈑金塗装', '整備', '販売', '保険', 'レンタカー', 'レッカー'],
  about: {
    label: 'ABOUT ROOTS',
    title: ['車のことを、', 'ひとつの窓口で。'],
    body:
      'Body shop Rootsは、埼玉県桶川市にあるボディショップです。鈑金塗装をはじめ、整備、車両販売、保険、レンタカー、レッカーを取り扱っています。',
    primaryImage: maintenanceImage,
    primaryImageAlt: 'エンジンルームを点検する整備スタッフ',
    secondaryImage: bodyRepairImage,
    secondaryImageAlt: '車体のへこみを補修する鈑金スタッフ',
  },
  services: {
    label: 'OUR SERVICES',
    title: '6つのサービス',
    items: [
      {
        number: '01',
        title: '鈑金塗装',
        english: 'BODY REPAIR & PAINT',
        icon: 'paint',
        image: bodyRepairImage,
        imageAlt: '車体のへこみを補修する鈑金スタッフ',
      },
      {
        number: '02',
        title: '整備',
        english: 'MAINTENANCE',
        icon: 'wrench',
        image: maintenanceImage,
        imageAlt: 'エンジンルームを点検する整備スタッフ',
      },
      {
        number: '03',
        title: '販売',
        english: 'SALES',
        icon: 'car',
        image: salesImage,
        imageAlt: '車両の状態を説明する販売スタッフ',
      },
      {
        number: '04',
        title: '保険',
        english: 'INSURANCE',
        icon: 'shield',
        image: insuranceImage,
        imageAlt: '自動車保険について説明するスタッフ',
      },
      {
        number: '05',
        title: 'レンタカー',
        english: 'RENTAL CAR',
        icon: 'key',
        image: rentalImage,
        imageAlt: 'レンタカーの車両状態を確認するスタッフと利用者',
      },
      {
        number: '06',
        title: 'レッカー',
        english: 'TOWING SERVICE',
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
      'お車のキズやへこみ、塗装に関するご相談を承ります。お見積もりのご相談も、どうぞお気軽にお問い合わせください。',
    image: bodyRepairImage,
    imageAlt: '車体のへこみを補修する鈑金作業',
  },
  gallery: {
    label: 'CAR LIFE',
    title: '車のそばに、Roots。',
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
    address: '埼玉県桶川市上日日出谷791-1',
    station: '桶川駅より徒歩',
    image: heroImage,
    imageAlt: 'Body shop Roots 店舗外観',
  },
  contact: {
    label: 'CONTACT',
    title: 'お見積もり・クルマのご相談は、Rootsへ。',
    body: '鈑金塗装、整備、販売、保険、レンタカー、レッカーについて、どうぞお気軽にお問い合わせください。',
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

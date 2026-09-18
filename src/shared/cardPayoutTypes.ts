import Humo from "@/assets/images/payment/humo-e-com.png";
import UZHumo2p2 from "@/assets/images/payment/uzcard-humo-p2p.png";

import Click from "@/assets/images/payment/click.png";
import UZCard from "@/assets/images/payment/uzcard.png";
import Humo2p2 from "@/assets/images/payment/humo-p2p.png";
import CryptoCurrency from "@/assets/images/payment/cryptocurrency.png";

import iconETH from "@/assets/icons/crypto/ETH.svg";
import iconTRX from "@/assets/icons/crypto/TRX.svg";
import iconTON from "@/assets/icons/crypto/TON.svg";
import iconDOGE from "@/assets/icons/crypto/DOGE.svg";
import iconBCH from "@/assets/icons/crypto/BCH.svg";
import iconLTC from "@/assets/icons/crypto/LTC.svg";
import iconUSDT_BEP20 from "@/assets/icons/crypto/USDT-BEP20.svg";
import iconUSDT_TRC20 from "@/assets/icons/crypto/USDT-TRC20.svg";
import iconUSDT_ERC20 from "@/assets/icons/crypto/USDT-ERC20.svg";

export type CardPayoutType = {
  type: string;
  logo: string;
  from: number;
  link: string;
};

export type CardDepositType = {
  type: string;
  title: string;
  logo: string;
  from: number;
  link: string;
};

export type CardCryptoType = {
  type: string;
  logo: string;
  from: number;
  link: string;
};

export const cardsPayout:CardPayoutType[] = [
  {
    type: 'humo',
    logo: Humo,
    from: 50000,
    link: '/wallet/payout/humo',
  },
  {
    type: 'uzcard-humo-p2p',
    logo: UZHumo2p2,
    from: 50000,
    link: '/wallet/payout/uzcard-humo-p2p',
  },
  {
    type: 'sber',
    logo: UZHumo2p2,
    from: 1000,
    link: '/wallet/payout/sber',
  },
  {
    type: 'vtb',
    logo: UZHumo2p2,
    from: 11000,
    link: '/wallet/payout/vtb',
  },
];

export const cardsDeposit:CardDepositType[] = [
  {
    type: 'humo-e-com',
    title: 'HUMO E-COM',
    logo: Humo,
    from: 60000,
    link: '/wallet/deposit/humo-e-com',
  },
  {
    type: 'clickm',
    title: 'CLICKM',
    logo: Click,
    from: 30000,
    link: '/wallet/deposit/clickm',
  },
  {
    type: 'uzcard',
    title: 'UZCARD',
    logo: UZCard,
    from: 30000,
    link: '/wallet/deposit/uzcard',
  },
  {
    type: 'humo-p2p',
    title: 'Humo P2P',
    logo: Humo2p2,
    from: 60000,
    link: '/wallet/deposit/humo-p2p',
  },
  {
    type: 'uzcard-humo-p2p',
    title: 'UZCARD HUMO P2P',
    logo: UZHumo2p2,
    from: 33000,
    link: '/wallet/deposit/uzcard-humo-p2p',
  },
  {
    type: 'uzcard-humo-p2p-ftd',
    title: 'UZCARD HUMO P2P FTD',
    logo: UZHumo2p2,
    from: 60000,
    link: '/wallet/deposit/uzcard-humo-p2p-ftd',
  },
  {
    type: 'crypto',
    title: 'CRYPTOCURRENCY',
    logo: CryptoCurrency,
    from: 15000,
    link: '/wallet/deposit/crypto',
  },
];

export const cardsCrypto:CardCryptoType[] = [
  {
    type: 'eth',
    logo: iconETH,
    from: 100000,
    link: '/wallet/deposit/crypto/eth',
  },
  {
    type: 'trx',
    logo: iconTRX,
    from: 15000,
    link: '/wallet/deposit/crypto/trx',
  },
  {
    type: 'ton',
    logo: iconTON,
    from: 15000,
    link: '/wallet/deposit/crypto/ton',
  },
  {
    type: 'doge',
    logo: iconDOGE,
    from: 100000,
    link: '/wallet/deposit/crypto/doge',
  },
  {
    type: 'bch',
    logo: iconBCH,
    from: 120000,
    link: '/wallet/deposit/crypto/bch',
  },
  {
    type: 'ltc',
    logo: iconLTC,
    from: 15000,
    link: '/wallet/deposit/crypto/ltc',
  },
  {
    type: 'bep20',
    logo: iconUSDT_BEP20,
    from: 60000,
    link: '/wallet/deposit/crypto/bep20',
  },
  {
    type: 'trc20',
    logo: iconUSDT_TRC20,
    from: 60000,
    link: '/wallet/deposit/crypto/trc20',
  },
  {
    type: 'erc20',
    logo: iconUSDT_ERC20,
    from: 60000,
    link: '/wallet/deposit/crypto/erc20',
  },
]

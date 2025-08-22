import BabyFox18 from './baby_fox_18.jpg';
import BabyFox50 from './baby_fox_50.jpg';
import BabyFoxMarmelad from './baby_fox_marmelad.jpg';
import BonTime from './bon_time.jpg';
import Bun from './bun.jpg';
import ChioRio from './chio_rio.png';
import ChocoPieJashki from './choco_pie_jashki.png';
import Elle from './elle.jpg';
import FruttoBello from './frutto_bello.png';
import Furor from './furor.jpg';
import GlaseSKokosom from './glase_s_kokosom.png';
import GlaseSShokoladom from './glase_s_shokoladom.png';
import Haritosha from './haritosha.jpg';
import HippoBondiMarmelad from './hippo_bondi_marmelad.png';
import Jumka from './jumka.jpg';
import LussoSmorodina from './lusso_smorodina.jpg';
import TeaPrincessJavaGreen25 from './tea_princess_java_green_25.jpg';
import TortVafelnyFundukJashki from './tort_vafelniy_funduk_jashki.jpg';
import Versale from './versale.png';
import VoljskieProstori from './voljskie_prostori.jpg';

import NoPhoto from './no_photo.png';

export const ProductImage = {
    baby_fox_18: BabyFox18,
    baby_fox_50: BabyFox50,
    baby_fox_marmelad: BabyFoxMarmelad,
    bon_time: BonTime,
    bun: Bun,
    chio_rio: ChioRio,
    choco_pie_jashki: ChocoPieJashki,
    elle: Elle,
    frutto_bello: FruttoBello,
    furor: Furor,
    glase_s_kokosom: GlaseSKokosom,
    glase_s_shokoladom: GlaseSShokoladom,
    haritosha: Haritosha,
    hippo_bondi_marmelad: HippoBondiMarmelad,
    jumka: Jumka,
    lusso_smorodina: LussoSmorodina,
    tea_princess_java_green_25: TeaPrincessJavaGreen25,
    tort_vafelniy_funduk_jashki: TortVafelnyFundukJashki,
    versale: Versale,
    voljskie_prostori: VoljskieProstori,

    noPhoto: NoPhoto
} as const;

export type ProductImageKey = keyof typeof ProductImage;

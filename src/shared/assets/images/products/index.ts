import BabyFox18 from './baby_fox_18.jpg';
import BabyFox50 from './baby_fox_50.jpg';
import BabyFoxMarmelad from './baby_fox_marmelad.jpg';
import BonTime from './bon_time.jpg';
import Bun from './bun.jpg';
import ChioRio from './chio_rio.png';
import ChocoPieJashki from './choco_pie_jashki.png';
import CorovkaBekova from './corovka_bekova.jpg';
import Elle from './elle.jpg';
import FruttoBello from './frutto_bello.png';
import Furor from './furor.jpg';
import GlaseSKokosom from './glase_s_kokosom.png';
import GlaseSShokoladom from './glase_s_shokoladom.png';
import Haritosha from './haritosha.jpg';
import HippoBondiMarmelad from './hippo_bondi_marmelad.png';
import Jumka from './jumka.jpg';
import KolbasaDelnaya from './kolbasa_delnaya.jpg';
import KolbasaDomashnaya from './kolbasa_domashnaya.jpg';
import KolbasaKupecheskaya from './kolbasa_kupecheskaya.jpg';
import KolbasaMolochnaya05 from './kolbasa_molochnaya_05.jpg';
import KolbasaNevskaya from './kolbasa_nevskaya.jpg';
import KolbasaKStolu from './kolbasa_k_stolu.png';
import Lukum from './lukum.jpg';
import LussoSmorodina from './lusso_smorodina.jpg';
import MajonezProvancalSdobriVedro from './majonez_provancal_sdobri_vedro.jpg';
import Milka from './milka.jpg';
import MolokoDobryaBurenkaTfa from './moloko_dobrya_burenka_tfa.jpg';
import MolokoPestravkaTfa from './moloko_pestravka_tfa.png';
import MolokoPestravka1500Ml from './moloko_pestravka_1500_ml.jpg';
import Nescafe3V1 from './nescafe_3_v_1.jpg';
import PomadkaBekova from './pomadka_bekova.jpg';
import PryanikiPodmoskovnyje from './pryaniki_podmoskovnyje.jpg';
import PryanikiShokoladnoApelsinovyje from './pryaniki_shokoladno_apelsinovyje.png';
import PryanikiShokoladnye from './pryaniki_shokoladnye.png';
import TeaPrincessJavaGreen25 from './tea_princess_java_green_25.jpg';
import Tetrad from './tetrad.jpeg';
import TorabikaCappuccino from './torabika_cappuccino.jpg';
import TorabikaLatte from './torabika_latte.png';
import TortVafelnyFundukJashki from './tort_vafelniy_funduk_jashki.jpg';
import Versale from './versale.png';
import VetchinaAlmi from './vetchina_almi.jpg';
import VetchinaClassicheskaya from './vetchina_classicheskaya.jpg';
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
    corovka_bekova: CorovkaBekova,
    elle: Elle,
    frutto_bello: FruttoBello,
    furor: Furor,
    glase_s_kokosom: GlaseSKokosom,
    glase_s_shokoladom: GlaseSShokoladom,
    haritosha: Haritosha,
    hippo_bondi_marmelad: HippoBondiMarmelad,
    jumka: Jumka,
    kolbasa_delnaya: KolbasaDelnaya,
    kolbasa_domashnaya: KolbasaDomashnaya,
    kolbasa_kupecheskaya: KolbasaKupecheskaya,
    kolbasa_molochnaya_05: KolbasaMolochnaya05,
    kolbasa_nevskaya: KolbasaNevskaya,
    kolbasa_k_stolu: KolbasaKStolu,
    lukum: Lukum,
    lusso_smorodina: LussoSmorodina,
    majonez_provancal_sdobri_vedro: MajonezProvancalSdobriVedro,
    milka: Milka,
    moloko_dobrya_burenka_tfa: MolokoDobryaBurenkaTfa,
    moloko_pestravka_tfa: MolokoPestravkaTfa,
    moloko_pestravka_1500_ml: MolokoPestravka1500Ml,
    nescafe_3_v_1: Nescafe3V1,
    pomadka_bekova: PomadkaBekova,
    pryaniki_podmoskovnyje: PryanikiPodmoskovnyje,
    pryaniki_shokoladno_apelsinovyje: PryanikiShokoladnoApelsinovyje,
    pryaniki_shokoladnye: PryanikiShokoladnye,
    tea_princess_java_green_25: TeaPrincessJavaGreen25,
    tetad: Tetrad,
    torabika_cappuccino: TorabikaCappuccino,
    torabika_latte: TorabikaLatte,
    tort_vafelniy_funduk_jashki: TortVafelnyFundukJashki,
    versale: Versale,
    vetchina_almi: VetchinaAlmi,
    vetchina_classicheskaya: VetchinaClassicheskaya,
    voljskie_prostori: VoljskieProstori,

    noPhoto: NoPhoto
} as const;

export type ProductImageKey = keyof typeof ProductImage;

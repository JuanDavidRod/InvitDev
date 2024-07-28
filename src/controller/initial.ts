import FrontPage from "../components/FrontPage.astro";
import CountDown from "../components/CountDown.astro";
import Information from "../components/Information.astro";
import CarrouselPage from "../components/CarrouselPage.astro";
import PartyDetails from "../components/PartyDetails.astro";
import GiftsPage from "../components/GiftsPage.astro";
import ShareMedia from "../components/ShareMedia.astro";

type AstroComponent = typeof FrontPage;

interface Components {
    [key: string]: AstroComponent
}

export const components: Components = {
    FrontPage,
    CountDown,
    Information,
    CarrouselPage,
    PartyDetails,
    GiftsPage,
    ShareMedia
}

import {googleAnalyticsId} from "../constant/constant";
import  Reactga  from "react-ga";

export const GoogleAnalyticsInit = () => {
    Reactga.initialize(googleAnalyticsId);
    Reactga.pageview(window.location.pathname + window.location.search);
}
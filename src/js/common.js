import { selectTweaker } from "./libs/selectTweaker";
import "../../node_modules/swiped-events/dist/swiped-events.min.js";
import "./polyfills.js";
import "./blocks.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */
selectTweaker(document.querySelectorAll('.form__field_sect'));
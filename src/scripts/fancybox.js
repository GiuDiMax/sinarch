import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

if (typeof window !== 'undefined') {
    Fancybox.bind("[data-fancybox='gallery']", {
        // Your custom options
    });
}
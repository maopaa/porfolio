
// Welcome Commons
import WelcomeCommonsEsp from '@i18n/welcome/es.json';
import WelcomeCommonsEng from '@i18n/welcome/en.json';
import WelcomeCommonsPt from '@i18n/welcome/pt.json';

// Blogs Commons

/// Languages Actives
const { ESP, ENG, PT } = {
    ESP: 'es',
    ENG: 'en',
    PT: 'pt'
};

// Get Welcomes page according to the language
export const getWelcomeCommonsI18N = ({ currentLocale }: { currentLocale: string | undefined }) => {
    if (currentLocale === ESP) return WelcomeCommonsEsp;
    if (currentLocale === ENG) return WelcomeCommonsEng;
    if (currentLocale === PT) return WelcomeCommonsPt;
    return WelcomeCommonsEsp;
}


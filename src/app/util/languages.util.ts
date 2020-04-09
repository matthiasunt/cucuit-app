import {Language} from '../models/language';

import * as CountriesList from 'countries-list';

const langs: Language[] = [
  {name: 'English 🇬🇧', short: 'en', emoji: '🇬🇧'},
  {name: 'Español 🇪🇸', short: 'es', emoji: '🇪🇸'},
  {name: 'Italiano 🇮🇹', short: 'it', emoji: '🇮🇹'},
  // {name: 'Deutsch 🇩🇪', short: 'de', emoji: '🇩🇪'},
];

export const getEmojiForLang = (lang: string): string => {
  return langs.find(l => l.short === lang).emoji;
};

export const getLangs = () => {
  return langs;
};

export const getAllLangs = () => {
  return Object.keys(CountriesList.languagesAll).map(k => {
    const obj = CountriesList.languagesAll[k];
    return {name: obj.native, short: k, emoji: CountriesList.getEmojiFlag(k)};
  });
};

export const getLangName = (langCode: string) => {
  if (langCode) {
    return CountriesList.languagesAll[langCode].native;
  } else {
    return '';
  }
};


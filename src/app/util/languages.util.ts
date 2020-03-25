import {Language} from '../models/language';

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

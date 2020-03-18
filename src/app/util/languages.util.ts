const langs: { name: string, short: string, emoji: string }[] = [
  {name: 'Italiano 🇮🇹', short: 'it', emoji: '🇮🇹'},
  {name: 'Español 🇪🇸', short: 'es', emoji: '🇪🇸'},
  {name: 'Deutsch 🇩🇪', short: 'de', emoji: '🇩🇪'},
  {name: 'English 🇬🇧', short: 'en', emoji: '🇬🇧'},
];

export const getEmojiForLang = (lang: string): string => {
  return langs.find(l => l.short === lang).emoji;
};

export const getLangs = () => {
  return langs;
};

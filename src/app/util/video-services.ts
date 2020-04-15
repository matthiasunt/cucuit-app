export function getVideoServices(participants: string) {
  return [
    {
      name: 'Google Hangouts',
      tooltip: `Google Hangouts: 10 ${participants}`,
      imageUrl: './assets/images/hangouts.svg',
      url: 'https://hangouts.google.com',
    },
    {
      name: 'Skype',
      tooltip: `Skype: 50 ${participants}`,
      imageUrl: './assets/images/skype.svg',
      url: 'https://www.skype.com',
    },
    {
      name: 'Zoom',
      tooltip: `Zoom: 100 ${participants}`,
      imageUrl: './assets/images/zoom.png',
      url: 'https://zoom.us/signup',
    },
    {
      name: 'Jitsi Meet',
      tooltip: `Jitsi Meet: 25 ${participants}`,
      imageUrl: './assets/images/jitsi.svg',
      url: 'https://meet.jit.si',
    }
  ];
}

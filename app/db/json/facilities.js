import services from './services';
import safety from '../../assets/audios/safety_plan.mp3';
import storyLong from '../../assets/audios/your_story_long.mp3';
import storyShort from '../../assets/audios/your_story.mp3';

export default [
  {
    uuid: 'faci_1',
    id: '1',
    name: 'គ្លីនិកសុខភាពឯកទេសកម្ពុជា',
    tels: ['012345678'],
    address: null,
    emails: ['clinic1@gmail.com'],
    websites: ['http://clinic1.com', 'http://clinic1.com.kh'],
    facebook_pages: ['Clinic 1'],
    telegram_username: 'clinic1',
    description: 'ឯកទេសផ្នែកជំងឺផ្លូវចិត្ត បញ្ហាផ្លូវភេទ និងសខុភាពបន្តរពូជប្រចាំអាសុី',
    latitude: 11.5412878486842,
    longitude: 104.928288675667,
    facility_batch_id: '2848c07a-1eb1-4390-9a6b-690c491964c5',
    image_url: null,
    audio_url: null,
    audio: safety,
    image: require('../../assets/images/intro_1.jpg'),
    service_uuids: [services[0].uuid]
  },
  {
    uuid: 'faci_2',
    id: '2',
    name: 'គ្លីនិកសុខភាពផ្លូវភេទ',
    tels: ['012876543'],
    address: null,
    emails: ['clinic2+1@gmail.com', 'clinic2+2@gmail.com'],
    websites: [],
    facebook_pages: [],
    telegram_username: null,
    description: 'ឯកទេសផ្នែកជំងឺផ្លូវចិត្ត បញ្ហាផ្លូវភេទ និងសខុភាពបន្តរពូជប្រចាំអាសុី',
    latitude: null,
    longitude: null,
    facility_batch_id: null,
    image_url: null,
    audio_url: null,
    audio: storyLong,
    image: require('../../assets/images/intro_2.jpg'),
    service_uuids: [services[1].uuid]
  },
  {
    uuid: 'faci_3',
    id: '3',
    name: 'គ្លីនិកសុខភាពឯកទេសសម្ភព និងកុមារ',
    tels: ['098765432'],
    address: null,
    emails: ['clinic3@gmail.com'],
    websites: [],
    facebook_pages: [],
    telegram_username: null,
    description: 'ឯកទេសផ្នែកជំងឺផ្លូវចិត្ត បញ្ហាផ្លូវភេទ និងសខុភាពបន្តរពូជប្រចាំអាសុី',
    latitude: null,
    longitude: null,
    facility_batch_id: null,
    image_url: null,
    audio_url: null,
    audio: storyShort,
    image: require('../../assets/images/intro_3.jpg'),
    service_uuids: [services[0].uuid, services[2].uuid]
  },
  {
    uuid: 'faci_4',
    id: '4',
    name: 'គ្លីនិកសុខភាពឯកទេសកម្ពុជា',
    tels: ['011123123'],
    address: null,
    emails: ['clinic4@gmail.com'],
    websites: [],
    facebook_pages: [],
    telegram_username: null,
    description: 'ឯកទេសផ្នែកជំងឺផ្លូវចិត្ត បញ្ហាផ្លូវភេទ និងសខុភាពបន្តរពូជប្រចាំអាសុី',
    latitude: null,
    longitude: null,
    facility_batch_id: null,
    image_url: null,
    audio_url: null,
    audio: null,
    image: require('../../assets/images/intro_1.jpg'),
    service_uuids: [services[2].uuid]
  },
  {
    uuid: 'faci_5',
    id: '5',
    name: 'គ្លីនិកសុខភាពឯកទេសសម្ភព និងកុមារ',
    tels: ['070987654'],
    address: null,
    emails: ['clinic5@gmail.com'],
    websites: [],
    facebook_pages: [],
    telegram_username: null,
    description: 'ឯកទេសផ្នែកជំងឺផ្លូវចិត្ត បញ្ហាផ្លូវភេទ និងសខុភាពបន្តរពូជប្រចាំអាសុី',
    latitude: null,
    longitude: null,
    facility_batch_id: null,
    image_url: null,
    audio_url: null,
    audio: null,
    image: require('../../assets/images/intro_2.jpg'),
    service_uuids: [services[3].uuid]
  }
];
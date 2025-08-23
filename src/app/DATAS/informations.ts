export interface Informations {
  photo?: string;
  name: string;
  surname: string;
  nickname?: string;
  age: number;
  job?: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  website?: string;
  linkedin?: string;
  medium?: string;
  github?: string;
}

export const informations: Informations = {
  photo: 'src/assets/medias/images/CityScape/IMG_0905.jpeg',
  name: 'Axel',
  surname: 'Priam',
  nickname: 'Khroonos',
  job: 'Développeur Fullstack',
  age: 35,
  email: 'priam.axel@gmail.com',
  country: 'France',
  city: 'Paris',
};

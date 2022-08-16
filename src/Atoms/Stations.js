import { atom } from 'recoil';

export const startStation = atom({
  key: 'startStation',
  default: '서울',
});

export const arrivalStation = atom({
  key: 'arrivalStation',
  default: '부산',
});

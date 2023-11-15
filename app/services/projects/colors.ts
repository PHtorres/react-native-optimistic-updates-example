import {IProjectColor} from '../api/todoist/interfaces/project';

export const projectColors: IProjectColor[] = [
  {
    id: 30,
    name: 'berry_red',
    hex: '#b8256f',
  },
  {
    id: 40,
    name: 'light_blue',
    hex: '#96c3eb',
  },
  {
    id: 32,
    name: 'orange',
    hex: '#ff9933',
  },
  {
    id: 33,
    name: 'yellow',
    hex: '#fad000',
  },
  {
    id: 35,
    name: 'lime_green',
    hex: '#7ecc49',
  },
  {
    id: 39,
    name: 'sky_blue',
    hex: '#14aaf5',
  },
  {
    id: 42,
    name: 'grape',
    hex: '#884dff',
  },
  {
    id: 48,
    name: 'grey',
    hex: '#b8b8b8',
  },
];

export const getColorHexByColorName = (colorName: string) => {
  const color = projectColors.find(i => i.name === colorName);
  if (color) {
    return color.hex;
  }
  return projectColors[0].hex;
};

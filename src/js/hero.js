import { Select } from './select';
import addMarcupOnLetterMobil from './fetch-cocktails';

const select = new Select('#select', {
  placeholder: 'A',
  data: [
    { id: '1', value: 'A' },
    { id: '2', value: 'B' },
    { id: '3', value: 'C' },
    { id: '5', value: 'D' },
    { id: '6', value: 'E' },
    { id: '7', value: 'F' },
    { id: '8', value: 'G' },
    { id: '9', value: 'H' },
    { id: '10', value: 'I' },
    { id: '11', value: 'J' },
    { id: '12', value: 'K' },
    { id: '13', value: 'L' },
    { id: '14', value: 'M' },
    { id: '15', value: 'N' },
    { id: '16', value: 'O' },
    { id: '17', value: 'P' },
    { id: '18', value: 'Q' },
    { id: '19', value: 'R' },
    { id: '20', value: 'S' },
    { id: '21', value: 'T' },
    { id: '22', value: 'U' },
    { id: '23', value: 'V' },
    { id: '24', value: 'W' },
    { id: '25', value: 'X' },
    { id: '26', value: 'Y' },
    { id: '27', value: 'Z' },
    { id: '28', value: '1' },
    { id: '29', value: '2' },
    { id: '30', value: '3' },
    { id: '31', value: '4' },
    { id: '32', value: '5' },
    { id: '33', value: '6' },
    { id: '34', value: '7' },
    { id: '35', value: '8' },
    { id: '36', value: '9' },
    { id: '37', value: '0' },
  ],
  onSelect(item) {
    // console.log('Selected Item', item);
    const a = item.value;
    addMarcupOnLetterMobil(a.toLowerCase());
  },
});

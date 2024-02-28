export const convertNumberToShorter = (number: number) => {
  const numberString = `${number}`;
  const numberLen = numberString.length;
  let suffix = '';
  let endIndex = numberLen;

  if (numberLen >= 7) {
    endIndex = -6;
    suffix = 'M';
  } else if (numberLen >= 4 && numberLen < 7) {
    endIndex = -4;
    suffix = 'K';
  }

  return `${numberString.slice(0, endIndex)}` + suffix;
};

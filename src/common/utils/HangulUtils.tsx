import Hangul from 'hangul-js';

// Utility function to filter list by Korean initial consonants (Hangul Jamo)
export function filterByInitial<T>(list: T[], searchValue: string, getTargetString: (item: T) => string | string[]): T[] {
  if (!list || searchValue === '') return list;

  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(searchValue);

  if (isKorean) {
    const searchInitials = Hangul.disassemble(searchValue).map((char) => Hangul.assemble([char]));

    return list.filter((item) => {
      const targetStrings = getTargetString(item);
      const targetArray = Array.isArray(targetStrings) ? targetStrings : [targetStrings];

      return targetArray.some((targetString) => {
        const disassembledTitle = Hangul.disassemble(targetString);
        const assembledTitle = Hangul.assemble(disassembledTitle.slice(0, searchInitials.length));
        return assembledTitle.startsWith(searchValue) || targetString.includes(searchValue);
      });
    });
  } else {
    return list.filter((item) => {
      const targetStrings = getTargetString(item);
      const targetArray = Array.isArray(targetStrings) ? targetStrings : [targetStrings];

      return targetArray.some((targetString) => {
        return targetString.toLowerCase().includes(searchValue.toLowerCase());
      });
    });
  }
}
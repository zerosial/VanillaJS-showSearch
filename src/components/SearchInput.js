import SearchApi from '../utils/SearchApi.js';

export default function SearchInput({ $target }) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  this.$target = $target;

  let setDebounce;
  this.$target.addEventListener('input', (e) => {
    if (setDebounce) {
      clearTimeout(setDebounce);
    }

    setDebounce = setTimeout(() => {
      SearchApi({
        value: e.target.value,
        isChangeLocalValue: true,
      });
    }, 500);
  });
}

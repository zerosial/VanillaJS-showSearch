import SearchApi from '../utils/SearchApi.js';

export default function SearchHistory({ initialState, $target }) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  this.$target = $target;
  this.data = initialState;

  this.render = () => {
    const items = this.data
      .map(
        (d, i) =>
          `<li class="overflow-hidden overflow-ellipsis whitespace-nowrap mt-4 w-32 h-8 text-center pt-1 bg-orange-300 border-2 border-red-400 rounded-lg text-orange-800 font-black" id="${i}">${d}</li>`
      )
      .join('');
    this.$target.innerHTML = items;
  };

  this.setState = (data) => {
    this.data = data;
    this.render();
  };

  $target.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
      SearchApi({
        value: e.target.innerHTML,
        isChangeLocalValue: true,
      });
    }
  });
}

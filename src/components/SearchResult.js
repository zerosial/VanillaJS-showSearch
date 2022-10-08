import SearchApi from '../utils/SearchApi.js';

export default function SearchResult({ initialState, $target }) {
  if (!new.target) {
    throw new Error('생성자 함수 new가 생략되었습니다.');
  }

  this.$target = $target;
  this.data = initialState;

  this.render = () => {
    const items = this.data
      .map(
        (d) =>
          `<ul class="grid grid-flow-row justify-center justify-items-center gap-4 mb-4">
            <img class="object-cover h-40 w-40 border-2 border-red-600 hover:object-scale-down rounded-lg" src="${
              d.poster
            }">
            ${d.musicians
              .map(
                (d) =>
                  `<li class="w-28 h-10 bg-orange-300 border-2 border-red-400 pt-1 rounded-lg overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-orange-800 font-black">${d}</li>`
              )
              .slice(0, 3)
              .join('')}
          </ul>`
      )
      .slice(0, 10)
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
        isChangeLocalValue: false,
      });
    }
  });
}

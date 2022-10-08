import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import SearchHistory from './components/SearchHistory.js';
import LocalStorage from './utils/LocalStorege.js';

export default function App($target) {
  $target.innerHTML = `
  <div class="grid w-3/5 h-5/6 items-center content-between m-24 p-4 border-2 border-red-500 bg-orange-200 rounded-lg">
    <div class="flex flex-col justify-center">
      <div class="flex">
       <label for="search-input" class="font-black text-orange-800 pt-1">공연을 검색해주세요 :</label>
       <input class="flex w-3/5 ml-6 border-2 border-red-600 rounded-xl pl-2" id="search-input" autocomplete="off"/>
      </div>
      <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2 mt-10" id="search-result"></div>
    </div>
    <div class="w-48 h-96 border-2 border-red-500 bg-orange-200 rounded-lg fixed right-20 top-28">
      <div class="text-center text-blue-600 text-2xl font-black mt-4">최근 검색어</div>
      <ul class="grid grid-flow-row justify-center justify-items-center gap-2" id="search-history">
      </ul>
    </div>
  </div>
  `;

  const localStorage = new LocalStorage();
  const searchInput = new SearchInput({
    $target: document.querySelector('#search-input'),
  });

  const searchResult = new SearchResult({
    initialState: [],
    $target: document.querySelector('#search-result'),
  });

  const searchHistory = new SearchHistory({
    initialState: localStorage.getData(),
    $target: document.querySelector('#search-history'),
  });

  searchResult.render();
  searchHistory.render();

  document.addEventListener('callSearch', (e) => {
    if (e.detail.isChangeLocalValue) {
      const data = Array.from(
        new Set([e.detail.title, ...localStorage.getData()])
      ).slice(0, 5);
      localStorage.setData(data);
      searchHistory.setState(data);
    }

    searchResult.setState(e.detail.data);
  });
}

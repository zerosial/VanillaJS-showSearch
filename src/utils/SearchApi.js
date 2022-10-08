const API_END_POINT = 'https://api.idiots.band/api/search?keyword=';

export default async function SearchApi({ value, isChangeLocalValue }) {
  try {
    const res = await fetch(`${API_END_POINT}${value}`);
    if (!res.ok) {
      throw new Error(`fetch 데이터에 실패했습니다.`);
    }

    document.dispatchEvent(
      new CustomEvent('callSearch', {
        detail: {
          isChangeLocalValue: isChangeLocalValue,
          title: value,
          data: response.json(),
        },
      })
    );
  } catch (err) {
    throw new Error(`SearchApi에서 에러가 발생했습니다.${err}`);
  }
}

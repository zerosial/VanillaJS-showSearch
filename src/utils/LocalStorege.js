export default function LocalStorage() {
  this.getData = () => {
    try {
      const data = localStorage.list ? JSON.parse(localStorage.list) : [];
      return data;
    } catch (err) {
      throw new Error(`SearchHistory.getData에서 에러가 발생했습니다.${err}`);
    }
  };

  this.setData = (data) => {
    try {
      localStorage.list = JSON.stringify(data);
    } catch (err) {
      throw new Error(`SearchHistory.setData에서 에러가 발생했습니다. ${err}`);
    }
  };
}

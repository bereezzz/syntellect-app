import { observable, action, computed } from 'mobx';
import { getCountryByName, CountryInfo } from '../api/apiService'; // Подключите ваш файл с псевдо-API

class CountryStore {
  @observable inputValue = '';
  @observable options: CountryInfo[] = [];
  @observable loading = false;

  @action
  setInputValue(value: string) {
   
    this.inputValue = value;
    this.fetchOptions();
    
  }

  @action
  async fetchOptions() {
    if (!this.inputValue) {
      this.options = [];
      return;
    }

    const countries = await getCountryByName(this.inputValue);
    this.options = countries;

  }

  @computed
  get areOptionsAvailable() {
    return this.options.length > 0;
  }
}

const store = new CountryStore();
export default store;

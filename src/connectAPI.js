import axios from "axios";
import { loginInfoStore } from "./stores/loginInfo";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      apiUrl:'http://127.0.0.1:8000'
    };
  },
  computed: {
    ...mapState(loginInfoStore, ["getLoginInfo"]),
  },
  methods: {
    ...mapActions(loginInfoStore, ["setAuthenticate"]),

    post(urlText, formData) {
      let url = this.apiUrl + "/api/" + urlText;
      let postResponse = axios.post(url, formData).then((response) => {
        return response;
      });

      return postResponse;
    },
    get(urlText, id = 0) {
      let url =
        id == 0
          ? this.apiUrl + "/api/" + urlText
          : this.apiUrl + "/api/" + urlText + id;
      let getResponse = axios.get(url).then((response) => {
        return response;
      });

      return getResponse;
    },
    put(urlText, formData) {
      let url = this.apiUrl + "/api/" + urlText;
      let putResponse = axios.put(url, formData).then((response) => {
        return response;
      });

      return putResponse;
    },
    patch(urlText, id) {
      let url = this.apiUrl + "/api/" + urlText + id;
      let patchResponse = axios.patch(url).then((response) => {
        return response;
      });

      return patchResponse;
    },
    delete(urlText, id) {
      let url = this.apiUrl + "/api/" + urlText + id;
      let deleteResponse = axios.delete(url).then((response) => {
        return response;
      });

      return deleteResponse;
    },
    logOut(e) {
      e.preventDefault();

      let url = this.apiUrl + "/api/auth/logout";
      axios.post(url).then(() => {
        this.setAuthenticate(false);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    fakeClick() {
      return false;
    },
    setTokenToHeader() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.getLoginInfo.access_token;
    },
    changeRoute(route) {
      this.$router.push(route);
    },
  },
  mounted() {
    this.setTokenToHeader();
  },
};
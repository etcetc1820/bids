import { AxiosResponse } from "axios";
import request from "./request";

export class BidsRequests {
  // method that get bids
  public GetBids = (): Promise<AxiosResponse> => {
    const url = "https://api.jsonbin.io/b/5f563626993a2e110d403821";

    return request.get(url);
  };
}

const instance = new BidsRequests();

export default instance;

import * as types from "core/types";

// Initial data
const postsInitialData: I_Post[] = [
  {
    id : "0",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Proin dictum semper sapien, id pellentesque turpis pulvinar rhoncus. " +
    "Integer mauris lacus, gravida sagittis enim quis, tempus ultrices sapien. " +
    "Mauris facilisis pharetra congue. Pellentesque sed nisi eu ipsum vulputate facilisis." +
    " Nam tempor pharetra mi nec pharetra. Donec sit amet ante accumsan, suscipit dui vitae," +
    " dapibus justo. Aliquam non diam magna. Cras at congue massa, vel laoreet ipsum. " +
    "Donec tristique odio dui, non dictum sapien faucibus sed. Class aptent taciti sociosqu " +
    "ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas viverra quis est " +
    "in interdum. Suspendisse rutrum massa sit amet lectus aliquam tincidunt. Etiam imperdiet " +
    "arcu tortor, a commodo felis ullamcorper laoreet. Cras efficitur neque nec justo tempor ultrices.",
    votesCount : 0,
    allowedActions : [
      types.INCREASE_VOTE,
      types.DECREASE_VOTE
    ]
  },
  {
    id : "1",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Proin dictum semper sapien, id pellentesque turpis pulvinar rhoncus. " +
    "Integer mauris lacus, gravida sagittis enim quis, tempus ultrices sapien. " +
    "Mauris facilisis pharetra congue. Pellentesque sed nisi eu ipsum vulputate facilisis." +
    " Nam tempor pharetra mi nec pharetra. Donec sit amet ante accumsan, suscipit dui vitae," +
    " dapibus justo. Aliquam non diam magna. Cras at congue massa, vel laoreet ipsum. " +
    "Donec tristique odio dui, non dictum sapien faucibus sed. Class aptent taciti sociosqu " +
    "ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas viverra quis est " +
    "in interdum. Suspendisse rutrum massa sit amet lectus aliquam tincidunt. Etiam imperdiet " +
    "arcu tortor, a commodo felis ullamcorper laoreet. Cras efficitur neque nec justo tempor ultrices.",
    votesCount : 5,
    allowedActions : [
      types.INCREASE_VOTE,
      types.DECREASE_VOTE
    ]
  },
  {
    id : "2",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Proin dictum semper sapien, id pellentesque turpis pulvinar rhoncus. " +
    "Integer mauris lacus, gravida sagittis enim quis, tempus ultrices sapien. " +
    "Mauris facilisis pharetra congue. Pellentesque sed nisi eu ipsum vulputate facilisis." +
    " Nam tempor pharetra mi nec pharetra. Donec sit amet ante accumsan, suscipit dui vitae," +
    " dapibus justo. Aliquam non diam magna. Cras at congue massa, vel laoreet ipsum. " +
    "Donec tristique odio dui, non dictum sapien faucibus sed. Class aptent taciti sociosqu " +
    "ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas viverra quis est " +
    "in interdum. Suspendisse rutrum massa sit amet lectus aliquam tincidunt. Etiam imperdiet " +
    "arcu tortor, a commodo felis ullamcorper laoreet. Cras efficitur neque nec justo tempor ultrices.",
    votesCount : 10,
    allowedActions : [
      types.INCREASE_VOTE,
      types.DECREASE_VOTE
    ]
  }
];

/**
 * A primary class to work with http requests. It can be based on the Axios/fetch/Ajax whatever.
 */
class HttpService {

  private defaultHeaders: I_DefaultHeaders = {
    "Accept-Language" : "en-US,en;q=0.5",
    "Content-Type" : "application/json"
  };

  generateGetRequest (url: string): Promise<I_Post[]> {
    console.warn("url to fetch -> ", url);
    console.warn("default headers should be added to the get headers -> ", this.defaultHeaders);

    // should add an error handling in the real situation
    return new Promise<I_Post[]>(res => {
      setTimeout(() => {
        res(postsInitialData);
      }, 3000);
    });
  }
}

export default new HttpService();

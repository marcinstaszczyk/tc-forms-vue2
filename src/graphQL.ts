import Vue from 'vue';
import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://api-euwest.graphcms.com/v1/cjpymi4hs0oak01bnwiq7lcxn/master';

const graphQLClient = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiYjdmYjk3YjEtN2IyZ'
    + 'C00ZDY2LWE4N2QtY2MwMDg4ZTRlYmYwIn0.JVZpXgG_J839PXrw45p4D-P1XR9xqR54nrqT4W8XItM',
  },
});

declare module 'vue/types/vue' {
  interface Vue {
    $graphQL: GraphQLClient;
  }
}

export const GraphQLPlugin = {
  install() {
    Vue.prototype.$graphQL = graphQLClient;
  },
};

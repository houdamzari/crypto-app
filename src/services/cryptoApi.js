import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "2cd2e33a74msha7527a93de388dep194126jsna54cc28d82c0",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/coin/Qwsogvtv82FCd/markets`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
export const { useGetCryptoDetailsQuery } = cryptoApi;
export const { useGetCryptoHistoryQuery } = cryptoApi;
export const { useGetCryptoExchangesQuery } = cryptoApi;

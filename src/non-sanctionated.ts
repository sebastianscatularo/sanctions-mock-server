export default function nonSanctionated(address: string, chain: string) {
  return [
    {
      accountExternalId: "",
      accountUuid: "",
      address: address,
      addressRiskIndicators: [],
      addressSubmitted: address,
      chain: chain,
      entities: [],
      externalId: null,
      trmAppUrl: `https://my.trmlabs.com/address/${address}/${chain}`,
    },
  ];
}

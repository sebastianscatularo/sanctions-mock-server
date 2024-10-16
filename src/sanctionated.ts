export default function sactionated(address: string, chain: string) {
  return [
    {
      accountExternalId: "",
      accountUuid: "",
      address: address,
      addressIncomingVolumeUsd: "1",
      addressOutgoingVolumeUsd: "1",
      addressRiskIndicators: [
        {
          category: "Blocklisted",
          categoryId: "636",
          categoryRiskScoreLevel: 10,
          categoryRiskScoreLevelLabel: "High",
          incomingVolumeUsd: "1",
          outgoingVolumeUsd: "1",
          riskType: "OWNERSHIP",
          totalVolumeUsd: "1",
        },
        {
          category: "Sanctions",
          categoryId: "69",
          categoryRiskScoreLevel: 15,
          categoryRiskScoreLevelLabel: "Severe",
          incomingVolumeUsd: "1",
          outgoingVolumeUsd: "1",
          riskType: "OWNERSHIP",
          totalVolumeUsd: "1",
        },
      ],
      addressSubmitted: address,
      addressTotalVolumeUsd: "1",
      chain: chain,
      entities: [
        {
          category: "Sanctions",
          categoryId: "69",
          confidenceScoreLabel: "Near Certainty",
          entity: "",
          riskScoreLevel: 15,
          riskScoreLevelLabel: "Severe",
          trmAppUrl: "https://my.trmlabs.com/entities/trm/<>",
          trmUrn: "/entity/manual/<>",
        },
      ],
      externalId: null,
      trmAppUrl: `https://my.trmlabs.com/address/${address}/${chain}`,
    },
  ];
}
